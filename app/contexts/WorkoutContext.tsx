'use client';
import { Workout } from "@/types/workout.type";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

interface iWorkoutContext {
    planWokout?: Workout[];
    setPlanWokout?: Dispatch<SetStateAction<Workout[]>>;
    savedWorkout?: Workout[];
    setSavedWorkout?: Dispatch<SetStateAction<Workout[]>>;
}

export const WorkoutContext = createContext<iWorkoutContext>({});

export default function WorkoutContextProvider({ children }: { children: ReactNode }) {
    const [planWokout, setPlanWokout] = useState<Workout[]>([]);
    const [savedWorkout, setSavedWorkout] = useState<Workout[]>([]);

    const data = {
        planWokout,
        setPlanWokout,
        savedWorkout,
        setSavedWorkout
    }

    return (
        <WorkoutContext.Provider value={data}>
            {children}
        </WorkoutContext.Provider>
    )
}

// export function useWorkoutContext() {
//     const context = useContext(WorkoutContext);
//     if(!context){
//       clg
//     }
//     return context;
// }