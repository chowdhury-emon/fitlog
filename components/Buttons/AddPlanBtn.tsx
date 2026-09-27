'use client'
import { WorkoutContext } from "@/app/contexts/WorkoutContext";
import { Workout } from "@/types/workout.type";
import { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";

export default function AddPlanBtn({ workout }: { workout: Workout }) {
    const { setPlanWokout, planWokout } = useContext(WorkoutContext);

    const handlePlanWorkout = () => {
        if (planWokout?.some(item => item.id === workout.id)) {
            toast.warn(`${workout.name} already exist`)
        } else {
            setPlanWokout!(prev => [...prev, workout])
            toast.success(`${workout.name} added to today's plan`)
            console.log(planWokout)
        }
    }

    return (
        <>
            <button className="flex items-center justify-center gap-2 p-8 py-3 text-sm font-bold rounded-xl bg-primary text-background"
                onClick={handlePlanWorkout}
            >
                <LuCalendarPlus2 className="text-base" />
                Add to today's plan
            </button>
        </>
    )
}