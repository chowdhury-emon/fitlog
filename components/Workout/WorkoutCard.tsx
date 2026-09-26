import { Workout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import { AiFillFire, AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";

interface WorkoutCardProps {
    workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    return (
        <article className="grid bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/30">
            <Link href={`workout-details/${workout.id}`}>

                <figure className="relative w-full h-50">
                    <Image src={workout.image} fill alt={workout.name} className="object-cover" />
                </figure>
                <div className="p-6">
                    <div >
                        {workout.muscleGroups.map((item, index) => (
                            <span key={index} className="p-1 px-3 mr-2 rounded-full bg-primary text-surface text-xs uppercase font-bold">
                                {item}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-semibold text-xl mt-4 uppercase">{workout.name}</h1>
                    <p className="text-xs text-muted my-2">{workout.equipment}</p>

                    <div className="flex gap-6 pt-4 mt-4 border-t border-border text-sm text-muted *:flex *:items-center *:gap-1">
                        <span> <AiOutlineClockCircle /> {workout.duration} min</span>
                        <span> <AiFillFire /> {workout.caloriesBurned} kcal</span>
                        <span> <AiOutlineStar /> {workout.rating}</span>
                    </div>
                </div>

            </Link>
        </article>
    )
}