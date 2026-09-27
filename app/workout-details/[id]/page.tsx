import AddPlanBtn from "@/components/Buttons/AddPlanBtn";
import SaveLaterBtn from "@/components/Buttons/SaveLaterBtn";
import { getWorkoutDataById } from "@/lib/api";
import Image from "next/image";
import { LuBookmark, LuCalendarPlus2 } from "react-icons/lu";

interface TableContent {
    label: string;
    value: string;
}

export default async function WorkoutDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const workout = await getWorkoutDataById(id);

    const tableContent: TableContent[] = [
        {
            label: 'equipment',
            value: `${workout.equipment}`
        },
        {
            label: 'difficulty',
            value: `${workout.difficulty}`
        },
        {
            label: 'sets',
            value: `${workout.sets}`
        },
        {
            label: 'reps',
            value: `${workout.reps}`
        },
        {
            label: 'duration',
            value: `${workout.duration} min`
        },
        {
            label: 'calories',
            value: `${workout.caloriesBurned} kcal`
        },
        {
            label: 'rating',
            value: `${workout.rating}`
        }
    ];

    return (
        <section className="grid md:grid-cols-2 gap-10 my-8 mt-0">
            <figure className="relative w-full min-h-100 max-h-100 md:max-h-210 rounded-2xl aspect-9/16 overflow-hidden">
                <Image src={workout.image} fill alt="workoutDeatails.name" className="object-cover"></Image>
            </figure>
            <div className="grid gap-4 place-content-baseline">
                <h1 className="text-4xl font-bold">{workout.name}</h1>
                <p className="text-muted">{workout.description}</p>
                <div >
                    {workout.muscleGroups.map((item, index) => (
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
                    {workout.instructions.map((instruction, index) => (
                        <ol key={index} className="text-sm text-neutral-300 font-light my-4">
                            <li className=""><span>{++index}.</span> {instruction}</li>
                        </ol>
                    ))}
                </div>

                <div className="grid lg:flex gap-4 w-full max-w-100 md:max-w-full place-self-center">
                    <AddPlanBtn workout={workout} />
                    <SaveLaterBtn workout={workout} />
                </div>
            </div>

        </section>
    )
}