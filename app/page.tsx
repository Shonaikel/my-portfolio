import { Button } from "./(components)/atoms/button";
import Header from "./(components)/organisms/header";
import HomeContent from "./(components)/pages/HomePage";
import SkillsBar from "./(components)/pages/Skills";
import ProjectsSection from "./(components)/pages/ProjectCards";
import Services from "./(components)/pages/ServicesCards";
import Myexperience from "./(components)/pages/Experience";
import ContactSection from "./(components)/organisms/Footer";


const HomePage = () => {
  return (
    <div className="bg-[#17171a] min-h-screen flex flex-col scroll-smooth">
      
      <Header />

      <main className="flex flex-col">

        {/* Home */}
        <section className="max-w-4xl mx-auto md:px-6 w-full">
          <HomeContent />
        </section>

        {/* Skills */}
        <section className="w-full bg-[#242427]">
          <div className="max-w-4xl mx-auto px-6">
            <SkillsBar />
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-4xl mx-auto md:px-6 w-full">
          <ProjectsSection />
        </section>

        {/* Services + Experience */}
        <section className="w-full bg-[#242427]">
          <div className="max-w-4xl mx-auto md:px-6">
            <Services />
            <Myexperience />
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-4xl mx-auto md:px-6 w-full">
          <ContactSection />
        </section>

      </main>
    </div>
  );
}
export default HomePage;

