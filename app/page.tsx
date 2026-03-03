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

        <main className="max-w-4xl mx-auto px-6 w-full flex flex-col scroll-smooth"> 
          <HomeContent />   
        </main>

        <main className="w-full bg-[#242427] flex flex-col flex-1">
           <div className="max-w-4xl mx-auto px-6 w-full">
           <SkillsBar />
           </div>
        </main>

        <main className="max-w-4xl mx-auto px-6 w-full flex flex-col flex-1">
          <ProjectsSection />
        </main>

        <main className="w-full bg-[#242427] flex flex-col flex-1">
           <div className="max-w-4xl mx-auto px-6 w-full">
              <Services />
              <Myexperience />
           </div>
        </main>
      
        <main className="max-w-4xl mx-auto px-6 w-full flex flex-col flex-1">
          <ContactSection />
        </main>
    </div>
  );
}
export default HomePage;

