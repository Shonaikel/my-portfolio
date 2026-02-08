import { Button } from "./(components)/atoms/button";
import Header from "./(components)/organisms/header";
import HomeContent from "./(components)/pages/HomePage";
import SkillsBar from "./(components)/pages/Skills";
import ProjectsSection from "./(components)/pages/ProjectCards";
 
const HomePage = () => {
  return (
    <div className="bg-[#242427] min-h-screen flex flex-col">
      <Header />
        <main className="max-w-4xl mx-auto px-6 w-full flex flex-col"> 
          <HomeContent />   
        </main>

          <SkillsBar />

        <main className="max-w-4xl mx-auto px-6 w-full flex flex-col flex-1">
          <ProjectsSection />
        </main>


    </div>
  );
}
 {/* <div className="flex justify-center items-center gap-4 flex-1">
            <Button href="#contact" rounded="full-rounded">
              Contact Me
            </Button>

            <Button href="/cv.pdf">
              Download CV
            </Button>

            <Button variant="outline">
              My Work
            </Button>
              </div> */}
export default HomePage;

