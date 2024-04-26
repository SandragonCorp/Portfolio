'use client'

import { BsFillMoonStarsFill } from 'react-icons/bs';

const Nav = () => {
  return (
    <section className='py-10 flex justify-between text-white md:mx-10 lg:mx-20'>
        <h1 className='text-xl font-jersey'>Logo</h1>
        <a className='bg-primary px-4 py-2 rounded-md ml-8 hover:bg-secondary' href="#">Login</a>
    </section>
  )
}

export default Nav