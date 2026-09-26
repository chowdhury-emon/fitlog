import { Workout } from "@/types/workout.type";

// const ApiURL: string = "https://api.abcz.workers.dev/api/fitlog";
const ApiURL: string = "https://api.api-store.workers.dev/api/fitlog";

export const getWorkoutData = async (): Promise<Workout[]> => {
    const res = await fetch(ApiURL);
    
    if (!res.ok) {
        console.error("DATA FETCHING FAILED")
    }

    console.log(res)
    return res.json();
}

export const getWorkoutDataById = async (id: string): Promise<Workout> => {
    const ApiURLWithID = `${ApiURL}/${id}`;
    const res = await fetch(ApiURLWithID);

    if (!res.ok) {
        console.error("DATA FETCHING FAILED")
    }

    console.log(res)
    return res.json();
}