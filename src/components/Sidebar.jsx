import React from 'react'

function Sidebar() {
  return (
    <div className='fixed w-1/5 bg-gray-800 h-full text-white flex items-center justify-center'>
        <nav className='text-3xl'>
            <ul>
                <li>
                    <img alt='logo' />
                </li>
                <li  className='mt-10'>
                    <p>HOME</p>
                </li>
                <li  className='mt-10'>
                    <p>SKILLS</p>
                </li>
                <li  className='mt-10'>
                    <p>PROJECTS</p>
                </li>
                <li  className='mt-10'>
                    <p>EXPERIENCE</p>
                </li>
                <li  className='mt-10'>
                    <p>CONTACT</p>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar