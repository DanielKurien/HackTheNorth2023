import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

import Link from 'next/link';

export default function createAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const { signIn, user } = useAuth();
  const router = useRouter();

  if(user){
    router.push('/game');
  }

  console.log(user)

  const handleSignIn = async (e) => {
    e.preventDefault();
    const user = { email, password };
    signIn(user);
    router.push('/game');
  };

  return (
    <div class="flex flex-col items-center justify-center h-screen space-y-5">
      <h1 class="text-5xl">Create An Account</h1>
      <form onSubmit={handleSignIn} class="flex flex-col space-y-2">
        <input
          type="email"
          placeholder="Email"
          class="border border-black rounded-lg p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          class="border border-black rounded-lg p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          class="border border-black rounded-lg p-2"
          value={confirmPassword}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button type="submit" class="border border-black rounded-lg">Create</button>
      </form>
      <Link href="/signIn">
        <p class="text-blue-500">Already have an account?</p>
      </Link>
    </div>
  );
};


