import { FeaturesSection } from "@/components/FeaturesSection";
import { TeamworkHubSection } from "@/components/TeamworkHubSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";


export default function Centerhome() {
  return (
    <div className="min-h-screen">
      <TeamworkHubSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
}
