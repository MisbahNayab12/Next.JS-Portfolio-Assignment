import React from 'react'
import Link from 'next/link';

export default function Home() {
  return (
    <nav className='bg-green-800 h-20 mt-1 flex justify-between items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-yellow-400 ml-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
</svg>
<p className='text-yellow-400 ml-4 font-semibold text-2xl mr-auto'>MathLib</p>
<ul className='flex gap-6 list-none text-yellow-400 mr-4'>
  <li>
    <Link href="/" className=' hover:text-pink-400'>Home</Link>
  </li>
  <li>
    <Link href="/games" className=' hover:text-pink-400'> Games </Link>
  </li>
  <li>
    <Link href="/lessons" className=' hover:text-pink-400'> Lessons </Link>
  </li>
  <li>
    <Link href="/contact" className=' hover:text-pink-400'> Contact </Link>
  </li>
  <li>
    <Link href="/about" className=' hover:text-pink-400'> About </Link>
  </li>
    
</ul>
    </nav>
  )
}


