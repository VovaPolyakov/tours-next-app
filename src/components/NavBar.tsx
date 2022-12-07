import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
  <div className='bg-gray-700 dark:bg-gray-800 mb-48'>
      <div className='w-10/12 m-auto p-5'>
          <div className='flex items-center justify-between'>
                <Link href='/' className=' pr-5 text-3xl text-white'>LOGO</Link>
                <div>
                  <Link className='  text-white'  href='/add'>Add-Tours</Link>
                  <Link className=' text-white'  href='/list'>List-Tours</Link>
                </div>
          </div>
      </div>
  </div>
  )
}

export default Home