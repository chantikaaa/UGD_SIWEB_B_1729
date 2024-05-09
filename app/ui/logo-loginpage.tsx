import Image from 'next/image';
import { inter } from '@/app/ui/fonts';

export default function Logo() {
    return (
        <div className={`${inter.className} flex flex-row items-center leading-none text-white justify-content: flex-end`}>
            <p className="text-[35px] inter gap-7"> Atma Barbershop </p>
            <Image
                src="/logo_hero.png"
                alt="Logo Hero"
                width={65}
                height={65}
                className="rotate-[5deg]"
                style={{ position: 'absolute', right: '30px' }}
            />
        </div>
    );
}