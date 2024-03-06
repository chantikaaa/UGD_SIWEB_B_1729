import AcmeLogo from '@/app/ui/acme-logo';
import Image from 'next/image';
import bg_hero from '../public/bg_hero.png';
import { anton } from '@/app/ui/fonts';
import { kanit } from '@/app/ui/fonts';
import { UserIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10">
        <Image
          alt="Barber Background"
          src={bg_hero}
          layout="fill" 
          objectFit="cover" 
          placeholder="blur"
          quality={100}
        />
      </div>

      <div className={`${kanit.className} flex justify-end space-x-2 p-6 text-lg font-normal`}>
        <button
        // button utk desktop
          className="hidden md:block px-4 py-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black md:px-10"
          >Login</button>
          
        <div className="md:hidden">
          <UserIcon className="h-6 w-6 text-black dark:text-white" />
        </div>
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-4 py-8 sm:px-6 sm:py-10 md:w-2/5 md:px-20">
          <p className={`${kanit.className} text-xl text-white whitespace-nowrap`}>
            221711729 - Cinta Chantika Lestari
          </p>
          <p className={`${anton.className} text-6xl md:text-7xl text-white tracking-wider md:whitespace-nowrap`}>
            <strong>Our Barbershop</strong>
          </p>
          <p className={`${anton.className} text-6xl md:text-7xl text-white tracking-wider md:whitespace-nowrap`}>
            <strong>Admin Dashboard</strong>
          </p>
        </div>

      <div className="absolute top-0 left-0 z-10 p-4 md:p-6">
        <div className={`${kanit.className} flex h-16 md:h-20 shrink-0 items-end rounded-lg p-2 md:p-4`}>
          <AcmeLogo />
        </div>
        </div>
      </div>
    </main>
  );
}
