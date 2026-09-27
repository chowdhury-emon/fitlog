'use client'
import { WorkoutContext } from "@/app/contexts/WorkoutContext";
import { Workout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AiFillFire, AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import { LuCheck, LuX } from "react-icons/lu";
import { toast } from "react-toastify";

export default function MyPlanWokoutCard({ workout, activeLinkPlan = false }: { workout: Workout, activeLinkPlan?: boolean }) {
    const { planWokout, setPlanWokout, savedWorkout, setSavedWorkout } = useContext(WorkoutContext);

    const handleWorkoutRemove = () => {
        if (activeLinkPlan) {
            const newItems = planWokout!.filter(item => item.id !== workout.id)
            setPlanWokout!(newItems);
            toast.success(`${workout.name} removed form today's plan`);
        } else {
            const newItems = savedWorkout!.filter(item => item.id !== workout.id)
            setSavedWorkout!(newItems);
            toast.success(`${workout.name} removed form today's plan`);
        }

    }

    return (
        <article className="flex justify-between p-4 bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/30">
            <div className="grid grid-cols-2 bg-surface">
                <figure className="relative w-full h-28 rounded-xl overflow-hidden">
                    <Image src={workout.image} fill alt={workout.name} className="object-cover" />
                </figure>

                <div className="p-4">
                    <h1 className="font-semibold text-xl uppercase">{workout.name}</h1>
                    <p className="text-xs text-muted my-2">{workout.equipment}</p>

                    <div className="flex gap-4 text-sm text-muted *:flex *:items-center *:gap-1">
                        <span> <AiOutlineClockCircle className="text-primary" /> {workout.duration} min</span>
                        <span> <AiFillFire className="text-primary" /> {workout.caloriesBurned} kcal</span>
                        <span> <AiOutlineStar className="text-primary" /> {workout.rating}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
                <Link href={`/workout-details/${workout.id}`}
                    className="p-4 py-2 rounded-full border border-border ">
                    View Details
                </Link>
                {activeLinkPlan &&
                    <button className="p-4 py-2 rounded-full flex items-center gap-2 bg-primary text-surface font-semibold"
                        onClick={handleWorkoutRemove}
                    >
                        <LuCheck />
                        Mark as Done
                    </button>
                }
                <button className="py-2 font-black text-base rounded-full text-muted hover:text-red-400"
                    onClick={handleWorkoutRemove}
                >
                    <LuX />
                </button>
            </div>

        </article>
    )
}