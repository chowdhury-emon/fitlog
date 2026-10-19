'use client'
import { useContext, useEffect, useState } from "react";
import MetricSummaryCard from "@/components/MyPlan/MetricSummaryCard";
import { WorkoutContext } from "@/app/contexts/WorkoutContext";
import MyPlanWokoutCard from "@/components/MyPlan/MyPlanWokoutCard";
import Link from "next/link";
import { Workout } from "@/types/workout.type";
import { useSearchParams } from "next/navigation";

type SortBy = 'duration' | 'calories' | 'rating';

export default function MyPlan() {
  const {planWokout, savedWorkout} = useContext(WorkoutContext);
  const [sortBy, setSortBy] = useState<SortBy>('duration');
  
  const searchParam = useSearchParams();
  const activeTab = searchParam.get("tab") === 'saved' ? 'saved' : 'plan';

  const sortWorkout = (workouts: Workout[]) => {
    const sortedleWorkouts = [...workouts]

    if (sortBy === 'calories') {
      sortedleWorkouts.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    }
    else if (sortBy === 'rating') {
      sortedleWorkouts.sort((a, b) => a.rating - b.rating);
    } else {
      sortedleWorkouts.sort((a, b) => a.duration - b.duration);
    }
    // console.log(sortedleWorkouts)
    return sortedleWorkouts;
  }

  const sortedPlanWokout = sortWorkout(planWokout!);
  const sortedSavedWokout = sortWorkout(savedWorkout!);

  return (
    <div>
      <h1 className="text-2xl/loose font-bold uppercase"> MyPlan </h1>
      <p className="text-sm text-muted">Cap of five lifts for today. Finish them, then load more.</p>

      <MetricSummaryCard data={activeTab === "plan" ? planWokout! : savedWorkout!}></MetricSummaryCard>

      <section className="grid gap4 sm:flex sm:justify-between w-full mt-12">

        <div className="text-center grid grid-cols-2 max-w-80 h-fit bg-surface rounded-2xl border border-border p-1 text-sm" >
          <Link href={"/my-plan?tab=plan"} className={`p-2 px-8 rounded-xl ${activeTab === "plan" ? "bg-border font-bold" : ""}`}
          >
            Today's Plan
          </Link>

          <Link href={"/my-plan?tab=saved"} className={`p-2 px-8 rounded-xl ${activeTab === "saved" ? "bg-border font-bold" : ""}`}
          >
            Saved
          </Link>

          {/* <button className={`p-2 px-8 rounded-xl ${activeLink === "plan" ? "bg-border font-bold" : ""}`}
            onClick={() => setActiveLink("plan")}>
            Today's Plan
          </button>

          <button className={`p-2 px-8 rounded-xl ${activeLink === "saved" ? "bg-border font-bold" : ""}`}
            onClick={() => setActiveLink("saved")}>
            Saved
          </button> 
          */}
        </div>

        <div className="w-fit bg-surface border border-border rounded-xl p-2 my-2" >
          <select className="bg-surface outline-0" value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value as SortBy)
            }} >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </section>

      {/* MY PLAN CARD LIST */}
      <section className="grid gap-8 my-6 mb-12">
        {
          activeTab === "plan"
            ? sortedPlanWokout!.map(workout => (
              <MyPlanWokoutCard key={workout.id} workout={workout} activeLinkPlan={true} />
            ))

            : sortedSavedWokout!.map(workout => (
              <MyPlanWokoutCard key={workout.id} workout={workout} />
            ))
        }

        {/* EMPTY MESSAGE */}
        <div className={`border border-border border-dashed rounded-2xl place-items-center p-4 py-20
        ${activeTab === "plan" && planWokout?.length === 0 ||
            activeTab === "saved" && savedWorkout?.length === 0
            ? "grid" : "hidden"} `} >
          <h2 className="text-xl font-bold">NOTHING HERE YET</h2>
          <p className="text-xs/relaxed sm:text-sm text-muted">Browse the library and add a lift to get today moving.</p>
          <Link className="p-4 py-2 mt-4 bg-primary text-background text-sm font-semibold rounded-full" href={"/"}>
            Go to Workouts
          </Link>
        </div>

      </section >

    </div >
  )
}