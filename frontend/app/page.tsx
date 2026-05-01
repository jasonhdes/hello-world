import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            HELLO WORLD! HELLO MY FRIENDS! THIS EASY NOW!.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Get started by editing{" "}
            <code className="font-mono font-bold">app/page.tsx</code>
          </p>
          <div className="flex flex-col gap-4 text-center sm:text-left sm:flex-row">
            <a
              className="flex items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 py-3 text-sm font-medium text-zinc-50 transition hover:bg-zinc-700"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            >
              Deploy now
            </a>
            <a
              className="flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-medium text-zinc-950 shadow-sm border border-zinc-200 transition hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-700"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            >
              Read the docs
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
