import { Biography } from "@/lib/biography";
import { Footer } from "@/lib/footer";
import { Projects } from "@/lib/projects";
import { Skills } from "@/lib/skills";

export default function Home() {
  return (
    <div className="max-w-2xl mb-40 md:flex-row mx-4 mt-8 lg:mx-auto">
      <Biography />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

