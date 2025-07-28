import prisma from "@/lib/prisma";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";


export async function itemsAll(userId : number){
  
  const data = await prisma.item.findMany({
    where: {
      ownerId: userId
    }
  })

  return data;
}