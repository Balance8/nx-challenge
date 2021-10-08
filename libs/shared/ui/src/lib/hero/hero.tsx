import Link from 'next/link';
import { useState } from 'react';

export function Hero() {
  const [sortOrder, setSortOrder] = useState('show');
  return (
    <div className="relative overflow-hidden bg-white">
      <main className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Mega 🐋 Ultra 🦄 Overkill</span>{' '}
            <span className="block text-indigo-600 xl:inline">TICKET LIST</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            by Michael Slocum
          </p>
          <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/create-ticket" passHref>
                <a
                  href="/create-ticket"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Create Ticket
                </a>
              </Link>
            </div>
            <div className="w-40 mt-3 rounded-md shadow w-50 sm:mt-0 sm:ml-3">
              <Link href={`/#${sortOrder}`} passHref>
                <a
                  onClick={() =>
                    setSortOrder(sortOrder === 'show' ? 'hide' : 'show')
                  }
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-600 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
                >
                  {sortOrder === 'show' ? 'Pending' : 'Done'}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
