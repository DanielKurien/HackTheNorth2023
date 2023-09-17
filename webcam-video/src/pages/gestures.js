import * as fp from 'fingerpose';

const thumbsDownGesture = new fp.GestureDescription('Thumbs Down');

thumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.9);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 0.9);

for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    thumbsDownGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    thumbsDownGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  }

const hiFiveGesture = new fp.GestureDescription('Hi Five!');

hiFiveGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1);
hiFiveGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
hiFiveGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1);
hiFiveGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1);
hiFiveGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1);

hiFiveGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1);
hiFiveGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1);
hiFiveGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1);
hiFiveGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1); 
hiFiveGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1);

const loveYouGesture = new fp.GestureDescription('ASL I Love You'); 

loveYouGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.5)
// loveYouGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.25);
loveYouGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.5);

// Index
loveYouGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1)
loveYouGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1);

// Pinky
loveYouGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1);

for(let finger of [fp.Finger.Middle, fp.Finger.Ring]){
    loveYouGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1); 
    loveYouGesture.addDirection(finger, fp.FingerDirection.VerticalUp, 1);
}

export const gestures = [hiFiveGesture, thumbsDownGesture, loveYouGesture, fp.Gestures.VictoryGesture, fp.Gestures.ThumbsUpGesture]

export const names = [{displayName: "Hi Five!", guessName: "hi_five"}, {displayName: "Thumbs Down :(", guessName: "thumbs_down"} , {displayName: "Rock Star", guessName: "i_love_you"}, {displayName: "Peace", guessName: "victory"}, {displayName: "Thumbs Up :)", guessName: "thumbs_up"}]
