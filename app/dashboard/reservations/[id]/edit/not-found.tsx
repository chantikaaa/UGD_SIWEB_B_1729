import Link from 'next/link';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { inter } from '@/app/ui/fonts';
 
export default function NotFound() {
  return (
    <main className={`${inter.className} flex h-full w-full flex-col items-center justify-center gap-2 bg-gray-100`}>
        <div className="p-7 w-100 h-60 rounded-sm bg-white shadow-md flex flex-col items-center justify-center">
        <div className="flex items-center justify-center text-xl font-semibold">
            <ExclamationCircleIcon className="w-10 h-10 text-red-500 mr-2" />
            404 Not Found
        </div>
      <p className= "mt-4 font-thin"> Sorry, the page you are looking for could not be found. </p>
      <Link
        href="/dashboard/reservations"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back to Home
      </Link>
      </div>
    </main>
  );
}