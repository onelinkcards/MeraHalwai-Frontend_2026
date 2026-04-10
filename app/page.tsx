import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#8A3E1D]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-8 px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Your Perfect Event,
          <span className="block text-[#EC8A25]">Catered to Perfection</span>
        </h1>

        <p className="max-w-2xl text-base font-medium md:text-xl">
          Discover trusted caterers that match your taste, budget, and event vibe.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/caterers"
            className="rounded-xl bg-[#EC8A25] px-6 py-3 text-lg font-bold text-white transition hover:opacity-90"
          >
            Explore Caterers
          </Link>
          <Link
            href="/caterers"
            className="rounded-xl bg-[#8A3E1D] px-6 py-3 text-lg font-bold text-white transition hover:opacity-90"
          >
            Book a Caterer
          </Link>
        </div>
      </section>
    </main>
  );
}
