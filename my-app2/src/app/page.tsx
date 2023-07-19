import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <div>
        <Link
          href="/notes"
          className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-pink-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
        >
          View list
        </Link>
        <Link
          href="/notes/new"
          className="inline-block bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus-visible:ring ring-pink-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
        >
          Add new
        </Link>
      </div>
    </main>
  );
}
