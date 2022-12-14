import type { GetServerSideProps, NextPage } from 'next'
import prismaClient from '../../prisma/client'
import { Tours } from '@prisma/client'
import ListOfTours from '../components/ListOfTours'
import HeadComponent from '../components/Head'



export async function getServerSideProps() {
    const list = await prismaClient.tours.findMany()
    list.map(item => {
        item.time = item.time.toDateString() as any
        return item
    })
    return {
      props: {list},
    }
}

const Page: NextPage<{list:Tours[]}> = ({list}) => {
  return (
    <div>
      <HeadComponent/>
      <div className='m-auto sm:w-4/5 lg:w-2/5 bg-gray-700 dark:bg-gray-800 p-4 rounded-lg shadow-lg'>
        {/* <ul>
            {list.map(item => <div key={item.id} className='pb-2'><li className='text-white border-2 rounded-lg border-slate-700 p-5' key={item.id}>ID: {item.id}, Name: {item.name}, DateTime: {item.time.toString()}</li></div>)}
        </ul> */}
        <ul>
        <ListOfTours tours={list}/>
        </ul>
      </div>
    </div>
  )
}

export default Page