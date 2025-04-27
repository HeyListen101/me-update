export default function AuthLayout({ children } : { children : React.ReactNode}) {
    return (
        <main className="size-full">
            <div
                className="absolute inset-0 bg-white sm:bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen filter blur-sm scale-105"
                aria-hidden="true"
            />
            <div className="flex justify-center items-center size-full">
                <div className="flex flex-col relative w-screen sm:w-[375px] h-[325px] bg-white sm:rounded-[20px] px-[40px] py-[30px] sm:shadow-xl gap-[35px]">
                    { children }
                </div>
            </div>
        </main>
    )
}