import { Walkout } from "@/types/walkout.type";

const ApiURL: string = "https://api.abcz.workers.dev/api/fitlog";

export const getWalkoutData = async(): Promise<Walkout[]> => {
    const res = await fetch(ApiURL);
    return await res.json();
   
}