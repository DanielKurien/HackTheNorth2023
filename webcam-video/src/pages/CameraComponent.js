import React, { useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import { drawHand } from './utilities';
import * as fp from 'fingerpose';
import { gestures, names } from './gestures';

function CameraComponent(props) {

  const { setState } = props;

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 200);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      // Gesture Detection
      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          ...gestures
        ]);
    
        const gesture = await GE.estimate(hand[0].landmarks, 6);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          // console.log(gesture.gestures);
          const confidence = gesture.gestures.map(
            (gestures) => gestures.score
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          // console.log(confidence);
          // console.log(maxConfidence);
          // console.log("guess: " + gesture.gestures[maxConfidence].name);
          // setEmoji(gesture.gestures[maxConfidence].name);
          
          console.log(gesture.gestures[maxConfidence].name);
          // if(gesture.gestures[maxConfidence].name == names[ind].guessName) {
          //   await increment();
          //   console.log("Guess: " + names[ind].guessName);
          //   //change result
          // }
          await setState(gesture.gestures[maxConfidence].name);
        }
      }
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {runHandpose();}, []);

  return (
    <div>
      <Webcam
        ref={webcamRef}
        // mirrored={true}
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
          textAlign: 'center',
          zIndex: 9,
          width: 640,
          height: 400,
        }}
      />
      <canvas
        ref={canvasRef}
        mirrored={true}
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
          textAlign: 'center',
          zIndex: 9,
          width: 640,
          height: 400,
        }}
      />
    </div>
  );
}

export default CameraComponent;
