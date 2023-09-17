import * as fp from 'fingerpose';

const thumbsDownGesture = new fp.GestureDescription('thumbs_down');

thumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1);
thumbsDownGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 0.5);
thumbsDownGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 0.5);
thumbsDownGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 0.5);
thumbsDownGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 0.5);

thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.5);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);

const hiFiveGesture = new fp.GestureDescription('hi_five');

hiFiveGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1);
hiFiveGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
hiFiveGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1);
hiFiveGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1);
hiFiveGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1);

hiFiveGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.5);
hiFiveGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.5);
hiFiveGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1);
hiFiveGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 0.5); 
hiFiveGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.5);

const closedFistGesture = new fp.GestureDescription('closed_fist');

closedFistGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 2);
closedFistGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 2);
closedFistGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 2);
closedFistGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 2);
closedFistGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 2);

closedFistGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.5);
closedFistGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 0.5);
closedFistGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1);
closedFistGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 0.5); 
closedFistGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.5);

export const gestures = [thumbsDownGesture, hiFiveGesture, closedFistGesture]