import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="container mx-auto flex justify-between p-4">
            <Link className="flex gap-2" href={"/"}>
                <Image src={"/logo.svg"} width={200} height={200} alt="Fitlog Logo Image" className="max-w-6"></Image>
                <h1 className="uppercase text-2xl">Fitlog</h1>
            </Link>

            <nav className="*:p-4 *:py-2">
                <Link className="bg-neutral-900 rounded-full" href={""}>Workouts</Link>
                <Link href={""}>My Plan</Link>
            </nav>

            <nav className="flex gap-4">
                <div>
                    <Link href={""}>
                        <span>Plan</span>
                        <span className="p-4">0</span>
                    </Link>
                </div>
                <div>
                    <Link href={""}>
                        <span>Saved</span>
                        <span className="p-4">0</span>
                    </Link>

                </div>
            </nav>
        </div>
    )
}