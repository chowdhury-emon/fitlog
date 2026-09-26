import WalkoutCard from "@/components/Walkout/WalkoutCard";
import { getWalkoutData } from "@/lib/api";

export default async function WalkoutLibrary() {

  const walkoutData = await getWalkoutData();

  return (
    <section id="library">
      <div>
        <h2 className="text-2xl font-bold uppercase">The Library</h2>
        <p className="text-muted">Twelve lifts covering every major muscle group.</p>
      </div>

      {/* The Grid of Walkout Library */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {walkoutData.map(walkout => (
          <div key={walkout.id}>
            <WalkoutCard walkout={walkout}></WalkoutCard>
          </div>
        ))}
      </div>

    </section>
  )
}