import Image from 'next/image'
import Link from 'next/link';
import CameraComponent from './CameraComponent';
import React, { useState } from 'react';


export default function test() {
  const [score, setScore] = useState(0);

  return (
    <>
      <div class='flex flex-col items-center'>
        <p class="text-3xl">Score {score}</p>
        <CameraComponent/>
      </div>
    </>
  )
}