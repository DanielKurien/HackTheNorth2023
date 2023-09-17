import Image from 'next/image'
import Link from 'next/link';
import CameraComponent from './CameraComponent';
import React, { useState } from 'react';
import { names } from './gestures';

function shuffleArray(array) {
  // Create a copy of the original array to avoid modifying it directly
  const shuffledArray = [...array];
  
  // Start from the last element and swap it with a randomly selected earlier element
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  
  return shuffledArray;
}


// const randomizedArray = shuffleArray(names);


export default function test() {
  const [score, setScore] = useState(0);

  return (
    <>
      <div class='flex flex-col items-center'>
        <p class="text-3xl">{names[0]}</p>
        <CameraComponent guess={names[0]}/>
        <p class="text-3xl">Score {score}</p>
      </div>
    </>
  )
}
