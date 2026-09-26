export default async function WorkoutDetails({params}: {params: Promise<{workoutID: string}>}) {
    const workoutID = await params;
    console.log(workoutID)
    
  return (
    <div>WorkoutDetails</div>
  )
}