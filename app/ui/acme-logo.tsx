import Image from 'next/image';
import { kanit } from './fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${kanit.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/logo_hero.png" 
        alt="Logo Hero"
        width={38} 
        height={38} 
        className="rotate-[15deg]"
      />
      <p className="text-[30px]">Atma</p>
      <p className="text-[30px]">Barbershop</p>
    </div>
  );
}
