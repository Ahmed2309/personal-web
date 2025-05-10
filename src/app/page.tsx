
import Header from "../components/Header";
import AboutSection from "../sections/AboutSection";
import ExperienceSection from "../sections/ExperienceSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";
import "./page.css";
export default function Home() {
  return (
    <div className="layout-container">
      <aside className="header-container">
        <Header />
      </aside>
      <main className="content-container">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
    </div>
  );
}
