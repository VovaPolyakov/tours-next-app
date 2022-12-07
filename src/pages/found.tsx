import { Tours } from '@prisma/client'
import type { InferGetServerSidePropsType, NextPage } from 'next'
import prisma from '../../prisma/client'
import HeadComponent from '../components/Head'
import { NextPageContext} from 'next'


export async function findTours(context:NextPageContext) {
  if(context.query.where == undefined){
    return {props:{data:[]}}
  }
  const name = Array.isArray(context.query.where) ? context.query.where.pop() : context.query.where
  let foundTour = await prisma.tours.findMany({
    where: {
      name,
    }
  })
  const data = foundTour.map(({name,id,time}) => 
    ({name,id,time: time.toLocaleDateString()})
  )
  return {
    props: {data},
  }
}



const Page: NextPage <InferGetServerSidePropsType<typeof findTours>>  = ({data}) => {
  return (
    <div>
        <HeadComponent/>
        <div className='text-white m-auto sm:w-4/5 lg:w-2/5 bg-gray-700 dark:bg-gray-800 p-4 rounded-lg shadow-lg'>
        <ul>
          {data?.length > 0 ? data.map(({name,time,id}) => <li key={id}>Name: {name}, Time: {time.toString()}</li>) : 'Нету такой страны'}
        </ul>
      </div>
    </div>  )
}

export default Page