import { getWorkoutDataById } from "@/lib/api";
import Image from "next/image";
import { LuBookmark, LuCalendarPlus2 } from "react-icons/lu";

interface TableContent {
    label: string;
    value: string;
}

export default async function WorkoutDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const workoutDeatails = await getWorkoutDataById(id);
    const tableContent: TableContent[] = [
        {
            label: 'equipment',
            value: `${workoutDeatails.equipment}`
        },
        {
            label: 'difficulty',
            value: `${workoutDeatails.difficulty}`
        },
        {
            label: 'sets',
            value: `${workoutDeatails.sets}`
        },
        {
            label: 'reps',
            value: `${workoutDeatails.reps}`
        },
        {
            label: 'duration',
            value: `${workoutDeatails.duration} min`
        },
        {
            label: 'calories',
            value: `${workoutDeatails.caloriesBurned} kcal`
        },
        {
            label: 'rating',
            value: `${workoutDeatails.rating}`
        }
    ];

    return (
        <section className="grid md:grid-cols-2 gap-10 my-8">
            <figure className="relative w-full min-h-100 max-h-210 rounded-2xl aspect-9/16 overflow-hidden">
                <Image src={workoutDeatails.image} fill alt="workoutDeatails.name" className="object-cover"></Image>
            </figure>
            <div className="grid gap-4 place-content-baseline">
                <h1 className="text-4xl font-bold">{workoutDeatails.name}</h1>
                <p className="text-muted">{workoutDeatails.description}</p>
                <div >
                    {workoutDeatails.muscleGroups.map((item, index) => (
                        <span key={index} className="p-1 px-3 mr-2 rounded-full bg-primary text-surface text-xs uppercase font-bold">
                            {item}
                        </span>
                    ))}
                </div>

                <div className="text-sm text-muted bg-surface my-6 outline outline-border -outline-offset-1 rounded-2xl overflow-hidden">
                    {tableContent.map((content, index) => (
                        <div key={index} className="flex justify-between p-5 px-6 border-b border-border ">
                            <p className="uppercase">{content.label}</p>
                            <p className="">{content.value}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h2 className="uppercase font-bold font-sans">Instructions</h2>
                    {workoutDeatails.instructions.map((instruction, index) => (
                        <ol key={index} className="text-sm text-neutral-300 font-light my-4">
                            <li className=""><span>{++index}.</span> {instruction}</li>
                        </ol>
                    ))}
                </div>

                <div className="grid lg:flex gap-4 w-full max-w-100 md:max-w-full place-self-center">
                    <button className="flex items-center justify-center gap-2 p-8 py-3 text-sm font-bold rounded-xl bg-primary text-background">
                        <LuCalendarPlus2 className="text-base"/>

                        Add to today's plan
                    </button>
                    <button className="flex items-center justify-center gap-2 p-8 py-3 text-sm font-medium rounded-xl border border-border">
                        <LuBookmark className="text-base"/>
                        Save for later
                    </button>
                </div>
            </div>

        </section>
    )
}