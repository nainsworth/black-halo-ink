export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div></div>
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-8xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Black Halo Ink
          </h1>
          <p className="text-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            Coming soon!
          </p>
        </div>
        <div></div>
      </main>
    </div>
  );
}
