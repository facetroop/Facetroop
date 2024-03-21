"use client";
import { getUserSession } from "@/lib/session";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function Home() {
   const router = useRouter();
  const user = await getUserSession();
  console.log(user);

  //  useEffect(()=>{
  //   if (!user.id) {
  //   // Navigate to "/choice" route if id is undefined or user is not logged in
  //     router.push('/choice');
  //    } else {
  //    // Navigate to "/dashboard" route if id is defined and user is logged in
  //      router.push('/dashboard');
  //    }
  //  },[router])
  if(user){
    if(user.id !== undefined){
      router.push('/choice')
    }
   
  }
  return (
    <>
      <div>{JSON.stringify(user)}</div>
    </>
  );
}