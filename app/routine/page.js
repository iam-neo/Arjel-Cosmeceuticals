import RoutineBuilder from "../components/RoutineBuilder";

export const metadata = {
  title: "Skin Routine Builder — Arjel Cosmeceuticals",
  description: "Answer 3 quick questions to build your personalized science-backed skincare routine.",
};

export default function RoutinePage() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <RoutineBuilder />
    </main>
  );
}
