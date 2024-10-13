import React from 'react'
import Image from 'next/image'
import Handson from "../../public/handson.jpg";
import Models from "../../public/models.webp";
import Games from "../../public/games.jpg";
import Puzzles from "../../public/puzzles.png";

export default function Content(){
  return (
    <div>
        <h1 className='text-4xl mt-16 bg-yellow-700 h-32 shadow-md content-center'> What you need to know as a Math Teacher </h1>
    <div className='flex justify-between gap mt-5 h-3/5 mb-10'>
        <div className='w-1/4 mt-10 ml-5 mb-10 border-2 border-black rounded-md bg-pink-600'>
            <div className='p-2'>
            <Image src={Handson} alt="myimage" className='w-full h-48 object-cover rounded-lg'/>
            </div>
            <div>
                <h2 className='font-semibold'>Hands On Activities </h2>
                <p className='text-left p-2'> Incorporating hands-on activities that allow students to explore concepts physically. Manipulatives and interactive materials help students internalize abstract ideas by seeing and touching math in action. Knowing how to structure and guide these activities is key to fostering deeper understanding.</p>
            </div>
        </div>
        <div className='w-1/4 mt-10 ml-4 mb-10 border-2 border-black rounded-md bg-cyan-600'>
            <div className='p-2'>
            <Image src={Models} alt="myimage" className='w-full h-48 object-cover rounded-md'/>
            </div>
            <div>
                <h2 className='font-semibold'> Math Models </h2>
                <p className='text-left p-2'> Understanding how to effectively use math models is crucial for teaching. Models like number lines, base-ten blocks, and fraction bars give students visual representations of mathematical ideas. Mastering the selection and implementation of the right model for each concept is an important skill for every math teacher.</p>
            </div>
        </div>
        <div className='w-1/4 mt-10 ml-4 mb-10 border-2 border-black rounded-md bg-orange-600'>
            <div className='p-2'>
            <Image src={Games} alt="myimage" className='w-full h-48 object-cover rounded-md'/>
            </div>
            <div>
                <h2 className='font-semibold'> Math Games </h2>
                <p className='text-left p-2'> Math games offer a dynamic way to reinforce concepts and engage students. Knowing which games best align with your curriculum and how to use them effectively can enhance students math fluency and make learning enjoyable. </p>
            </div>
        </div>
        <div className='w-1/4 mt-10 ml-4 mr-5 mb-10 border-2 border-black rounded-md bg-purple-600'>
            <div className='p-2'>
            <Image src={Puzzles} alt="myimage" className='w-full h-48 object-cover rounded-md'/>
            </div>
            <div>
                <h2 className='font-semibold'> Math Puzzles </h2>
                <p className='text-left p-2'> Math puzzles are not just fun—they are powerful tools for developing logical thinking and problem-solving abilities. As a teacher, knowing how to integrate these puzzles into your lessons will encourage students to approach challenges creatively and improve their critical thinking skills.</p>
            </div>
        </div>
    </div>
    </div>
  )
}



