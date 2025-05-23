import Link from "next/link"
import { signin } from "../actions"

export default function SignInPage() {
    return (
        <>
        <div className="flex items-center justify-center">
            <span className="inline-block font-bold text-lg w-[90%] text-center text-[#0D0C22] border-b-2 border-[#EEE] pb-[5px]">Sign In</span>
        </div>
        <form className="size-full flex flex-col justify-between">
            <div className="flex flex-col gap-[30px]">
                <div className="relative flex">            
                    <input type="text" placeholder="Email" id="email" name="email" required className="font-regular w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-black text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow h-11" />
                
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#0D0C22" className="absolute size-4 top-3.5 right-4.5 text-slate-600">
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                </div>
                <div className="relative">            
                    <input type="password" placeholder="Password" id="password" name="password" required className="font-regular w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-black text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow h-11" />
                
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#0D0C22" className="absolute size-4 top-3.5 right-4.5 text-slate-600">
                        <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between">
                <button formAction={signin} className="text-xs font-bold cursor-pointer rounded-[10px] bg-[#0D0C22] text-white px-[20px] py-[10px] shadow-sm transition duration-300 ease-in hover:text-[#0D0C22] hover:bg-[white]">Sign In</button>
                <Link href="/signup" className="text-xs font-bold text-[#0D0C22] px-[20px] py-[10px] shadow-sm rounded-[10px] transition duration-300 ease-in hover:text-white hover:bg-[#0D0C22]">Sign Up</Link>
            </div>
        </form>
        </>
    )
}