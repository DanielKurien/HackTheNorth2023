import Image from 'next/image'
import Link from 'next/link';
import CameraComponent from './CameraComponent';
import React, { useState, useEffect } from 'react';
import { names } from './gestures';
import Timer from './timer';

// const [index, setIndex] = useState(0);
// export const ind = index;

export default function test() {
  const [guess, setGuess] = useState('');
  

  const setState = async (state) => {
    setGuess(state);
    // setIndex(Math.floor(Math.random() * 5));
  };

  // useEffect(() => {
  //   // Update the index when the score changes
  //   setIndex(Math.floor(Math.random() * 5));
  // }, [score]);

  return (
    <>
      <div class='flex flex-col items-center'>
        {/* <Timer/> */}
        <p class="text-3xl">Guess: {guess}</p>
        {/* <p class="text-3xl">{names[index].displayName}</p> */}
        <CameraComponent setState={setGuess}/>
      </div>
    </>
  )
}
