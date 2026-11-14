export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-12 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <section className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Capstone Project
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Build a better homepage.
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          This page was cleaned up from the default Next.js starter so it renders
          without depending on generated template assets or broken starter links.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Get Started
          </a>
          <a
            href="#details"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            View Details
          </a>
        </div>

        <div id="details" className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <h2 className="text-lg font-semibold">What changed</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <li>• Removed unused starter assets and default Next.js image imports.</li>
            <li>• Simplified the component structure to a valid, semantic page layout.</li>
            <li>• Kept all styling inside valid Tailwind utility classes.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
