import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='bg-gray-700 dark:bg-gray-800 mb-48'>
      <div className='w-10/12 m-auto pb-5 pt-5'>
        <div>
            <div className='flex flex-row items-center justify-between '>
              <Link href='/' className='text-3xl text-slate-100'>LOGO</Link>
              <div>
                <Link className='pl-5  text-slate-100'  href='/add'>Add-Tours</Link>
                <Link className='pl-5  text-slate-100'  href='/list'>List-Tours</Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home