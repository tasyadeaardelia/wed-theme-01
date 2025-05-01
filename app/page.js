'use client'

import LeftSection from '@/layout/LeftSection';
import RightSection from '@/layout/RightSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LeftSection />
      <RightSection />
    </div>
  )
}
