import Link from 'next/link';


export default function Home() {
  return (
    <>
      <div class="flex flex-col items-center justify-center h-screen space-y-2  ">
        <h1 class="text-5xl">Title of Game here</h1>
        <Link href="/game">
          <button class="border rounded-lg border-black p-2 w-48">Play As Guest</button>
        </Link>
        <Link href="/signIn">
          <button class="border rounded-lg border-black p-2 w-48">Login and Play</button>
        </Link>
      </div>
    </>
  )
}
