'use client'

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import LeftSection from '@/layout/LeftSection';
import RightSection from '@/layout/RightSection';

export default function HomePage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [guestName, setGuestName] = useState(null);
    const [slugGuestName, setSlugGuestName] = useState(null);
    const [isChecking, setIsChecking] = useState(true);


    useEffect(() => {
        const toParam = searchParams.get('to');
        if (!toParam) {
            setGuestName(null); // Default to "Bapak/Ibu"
            setSlugGuestName(null);
            setIsChecking(false);
            return;
        }

        const checkGuest = async () => {
            try {
                const normalizedSlug = toParam.toLowerCase();

                const res = await fetch(`https://jova-admin.mantappdev.com/api/check-guest?to=${encodeURIComponent(normalizedSlug)}`, {
                    method: 'GET',
                    cache: 'no-store',
                });
                if (!res.ok) throw new Error('Not valid guest');


                const data = await res.json();
                console.log('API Response:', data);
                const guestName = data?.guest?.name;
                const slugGuestName = data?.guest?.slug;

                if (guestName) {
                    setGuestName(guestName); // misalnya: "John Doe"
                    setSlugGuestName(slugGuestName);
                } else {
                    router.replace('/not-found'); // Atur ke halaman fallback jika tidak ditemukan
                }
            } catch (e) {
                console.log(e);
                router.replace('/not-found');
            } finally {
                setIsChecking(false);
            }
        };

        checkGuest();
    }, [searchParams, router]);

    if (isChecking) {
        return <div className="min-h-screen flex items-center justify-center">Memuat undangan...</div>;
    }


    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <LeftSection />
            <RightSection guestName={guestName} slugGuestName={slugGuestName} />
        </div>
  )
}
