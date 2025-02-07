import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Contact from "../components/sections/contact/Contact";
import Education from "../components/sections/education/Education";
import ProfessionalExperience from "../components/sections/experience/ProfessionalExperience";
import Profile from "../components/sections/profile/Profile";
import Skills from "../components/sections/skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Profile />
      <section id="resume">
        <ProfessionalExperience />
      </section>
      <Education />
      <Skills />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
