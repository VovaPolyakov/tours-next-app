import type { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>


)

{
    const {name, time} = req.body
    await prismaClient.tours.create({
        data: {
            name,
            time: new Date(time),
        },
    })
  res.status(302).setHeader('Location','/').send()
}
