import { Tours } from '@prisma/client'
import type { InferGetServerSidePropsType, NextPage } from 'next'
import prisma from '../../prisma/client'
import Head from 'next/head'
import { NextPageContext} from 'next'


export async function getServerSideProps(context:NextPageContext) {
  if(context.query.where == undefined){
    return {props:{data:[]}}
  }
  const name = Array.isArray(context.query.where) ? context.query.where.pop() : context.query.where
  let x = await prisma.tours.findMany({
    where: {
      name,
    }
  })
  const data = x.map(({name,id,time}) => 
    ({name,id,time: time.toLocaleDateString()})
  )
  return {
    props: {data},
  }
}



const Page: NextPage <InferGetServerSidePropsType<typeof getServerSideProps>>  = ({data}) => {
  return (
    <div>
        <Head>
            <title>List tour</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='text-white m-auto sm:w-4/5 lg:w-2/5 bg-gray-700 dark:bg-gray-800 p-4 rounded-lg shadow-lg'>
        <ul>
          {data?.length > 0 ? data.map(({name,time,id}) => <li key={id}>Name: {name}, Time: {time.toString()}</li>) : 'Нету такой страны'}
        </ul>
      </div>
    </div>  )
}

export default Page