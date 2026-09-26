import Image from "next/image";
import Link from "next/link";

export default function
  () {
  return (
    <div className="container mx-auto p-4 py-12 grid place-items-center gap-4 md:flex md:justify-between">

      <Link className="flex gap-2" href={"/"}>
        <Image src={"/footer-logo.svg"} width={200} height={200} alt="Fitlog Logo Image" className="max-w-6"></Image>
        <h1 className="uppercase text-xl font-bold">Fitlog</h1>
      </Link>
      <p className="text-sm text-muted text-balance text-center">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>

    </div>
  )
}