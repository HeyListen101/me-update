import Image from "next/image";
import bg2 from "@/public/bg2.jpg";
import icon from "@/public/icon.png"

import AccountForm from './components/AccountForm'
import { createClient } from '@/utils/supabase/server'

export default async function Account() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <main className="flex bg-white text text-black h-screen justify-center items-center lg:justify-between">
      <AccountForm user={user} />
      <div className="hidden lg:block relative">
        <Image src={bg2} alt="Generic Backgound Image" className="h-screen w-auto" />
        <div className="absolute text-white bottom-[110px] w-[100%] flex gap-[10px] justify-center">
          <Image src={icon} alt="Me Update Icon" className="size-[50px]" />
          <span className="text-[32px] font-bold text-shadow-lg/20">Me Update</span>
        </div>
      </div>
    </main>
  )
}