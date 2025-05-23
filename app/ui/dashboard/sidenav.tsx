import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { 
  ArrowUturnLeftIcon,
  PowerIcon
 } from '@heroicons/react/24/outline';
import { kanit, inter } from '../fonts';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-amber-950 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <p  className={`${kanit.className} text-3xl text-white md:text-3xl md:leading-normal tracking-wider`}
          >Atma Barbershop
          </p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        {/* Back */}
        <Link href="/">
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-amber-100 hover:text-amber-950 md:flex-none md:justify-start md:p-2 md:px-3">
          <ArrowUturnLeftIcon className="w-6"/>
          <div className={`${inter.className} hidden md:block`}>
            <strong>Back</strong></div>
          </button>
        </Link>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-amber-100 hover:text-amber-950 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className={`${inter.className} hidden md:block`}><strong>Sign Out</strong></div>
          </button>
        </form>
      </div>
    </div>
  );
}
