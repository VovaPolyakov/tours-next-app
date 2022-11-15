import React from 'react'
import { Tours } from '@prisma/client'

const Tours = (items:Tours[]) => {
    console.log(items)
  return (
    <div>
        <ul>
            {items.map(item => <div key={item.id} className='pb-2'><li className='text-white border-2 rounded-lg border-slate-700 p-5' key={item.id}>ID: {item.id}, Name: {item.name}, DateTime: {item.time.toString()}</li></div>)}
        </ul>
    </div>
  )
}

export default Tours
