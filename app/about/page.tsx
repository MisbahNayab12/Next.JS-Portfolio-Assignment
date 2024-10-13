import React from 'react'
import Image from 'next/image';
import picture from "../../public/me.jpg"

export default function aboutPage(){
  return (
    <div>
        <div className='flex justify-between'>
            <div className='w-2/3'>
            <h1 className='font-semibold text-4xl text-pink-600 ml-10 mt-10 mb-5'>About Me</h1>
            <p className='ml-10 mb-5 text-green-700'> Welcome to my portfolio! I am <span className='font-semibold'> Misbah Nayab </span>, an enthusiastic educator with a passion for teaching Mathematics and English, currently working at one of the adopted government schools. My journey in education is driven by a desire to inspire students through creativity and innovation. I specialize in developing engaging lesson plans and worksheets that make learning both fun and effective. </p> 
            <p className='ml-10 mb-5 text-green-700'> I believe in integrating creative teaching methods, including interactive math games and hands-on activities, to foster a deeper understanding of complex concepts. My goal is to help students connect real-life applications to classroom learning, making education meaningful and enjoyable. </p>
            <p className='ml-10 mb-5 text-green-700'> Through this website, you will find a collection of math games, lesson plans, and other resources that showcase my innovative approach to education. I am excited to share my passion for teaching with you and look forward to continuing to contribute to the world of education in meaningful ways.</p>
            </div>
            <div className=''>
            <Image src={picture} alt="me" className='size-60 rounded-full mr-10 mt-10'/>
            </div>

        </div>
        
    </div>
  )
}




