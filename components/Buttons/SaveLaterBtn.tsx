'use client'
import { WorkoutContext } from "@/app/contexts/WorkoutContext";
import { Workout } from "@/types/workout.type";
import { useContext } from "react";
import { LuBookmark } from "react-icons/lu";
import { toast } from "react-toastify";

export default function SaveLaterBtn({ workout }: { workout: Workout }) {
    const { savedWorkout, setSavedWorkout } = useContext(WorkoutContext)

    const handleSaveWorkout = () => {
        if (savedWorkout?.includes(workout)) {
            toast.warn(`${workout.name} already exist`)
        }
        else {
            setSavedWorkout!(prev => [...prev, workout])
        }
    }

    return (
        <>
            <button className="flex items-center justify-center gap-2 p-8 py-3 text-sm font-medium rounded-xl border border-border"
                onClick={handleSaveWorkout}
            >
                <LuBookmark className="text-base" />
                Save for later
            </button>
        </>
    )
}