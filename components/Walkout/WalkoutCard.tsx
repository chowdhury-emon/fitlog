import { Walkout } from "@/types/walkout.type"
import Image from "next/image";
import Link from "next/link";
import { AiFillFire, AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";

interface walkoutCardProps {
    walkout: Walkout;
}

export default function WalkoutCard({ walkout }: walkoutCardProps) {
    return (
        <article className="grid max-w-md bg-surface border border-border rounded-2xl overflow-hidden">
            <Link href={`exercise/${walkout.id}`}>

                <figure className="relative w-full h-50">
                    <Image src={walkout.image} fill alt={walkout.name} className="object-cover" />
                </figure>
                <div className="p-6">
                    <div >
                        {walkout.muscleGroups.map((item, index) => (
                            <span key={index} className="p-1 px-3 mr-2 rounded-full bg-primary text-surface text-xs uppercase font-bold">
                                {item}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-semibold text-xl mt-4 uppercase">{walkout.name}</h1>
                    <p className="text-xs text-muted my-2">{walkout.equipment}</p>

                    <div className="flex gap-6 pt-4 mt-4 border-t border-border text-sm text-muted *:flex *:items-center *:gap-1">
                        <span> <AiOutlineClockCircle /> {walkout.duration} min</span>
                        <span> <AiFillFire /> {walkout.caloriesBurned} kcal</span>
                        <span> <AiOutlineStar /> {walkout.rating}</span>
                    </div>
                </div>
                
            </Link>
        </article>
    )
}