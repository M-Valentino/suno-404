import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-404-left" />
      <div className="bg-404-right" />
      <div className="flex items-center justify-center min-h-screen">
        <main className="m-auto max-w-3xl p-2">
          <img
            src="https://suno.com/logos/Logo-6.svg"
            width={151.75}
            height={37.25}
            alt="Suno Logo"
            className="m-auto"
          />
          <h1 className="text-white text-6xl font-bold text-center mt-8 text-404-shadow">
            Oops, page not found!
          </h1>
          <p className="text-primary mt-8 text-center text-404-shadow">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>
          <Link href="/" passHref>
            <button
              type="button"
              className="bg-quaternary text-white hover:bg-primary/30 font-medium px-4 py-1 rounded-md text-xl font-sans select-none mt-4 block m-auto"
              draggable="false"
            >
              Take Me Back Home
            </button>
          </Link>
        </main>
      </div>
    </>
  );
}
