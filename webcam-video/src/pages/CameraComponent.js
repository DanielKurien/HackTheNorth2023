import React, { useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import { drawHand } from './utilities';
import * as fp from 'fingerpose';
import { gestures } from './gestures';

function CameraComponent() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const runHandpose = async () => {
      const net = await handpose.load();
      console.log('Handpose model loaded.');
      setInterval(() => {
        detect(net);
      }, 100);
    };

    const detect = async (net) => {
      // Check if data is available
      if (
        typeof webcamRef.current !== 'undefined' &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        // Get video properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        // Set video height and width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // Make detections
        const hand = await net.estimateHands(video);
        //console.log(hand);

        if (hand.length > 0) {
          const GE = new fp.GestureEstimator([
            fp.Gestures.VictoryGesture,
            fp.Gestures.ThumbsUpGesture,
            ...gestures
          ]);

          const gesture = await GE.estimate(hand[0].landmarks, 8);
          console.log(gesture);
          if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
            console.log(gesture.gestures);
          }
        }

        // Draw mesh
        const ctx = canvasRef.current.getContext('2d');
        drawHand(hand, ctx);
      }
    };

    runHandpose();
  }, []);

  return (
    <div>
      <Webcam
        ref={webcamRef}
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
