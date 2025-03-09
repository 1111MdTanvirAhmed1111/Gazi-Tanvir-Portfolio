


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function page({searchParams}) {
const {q,tag} = await searchParams

  console.log(q,tag);
  return (
    <div>
      
    </div>
  )
}

export default page
