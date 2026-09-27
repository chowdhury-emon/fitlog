import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default function notFound() {
  return (
    <div className="grid place-items-center h-[80vh]">
        <h1 className="uppercase text-7xl lg:text-9xl font-black ">Page not Found</h1>
        <Link href={'/'} className="text-7xl animate-bounce"> <LuArrowLeft /></Link>
        <h3 className="text-primary">(404)</h3>
        
    </div>
  )
}