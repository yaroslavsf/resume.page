import IntroSection from './components/sections/IntroSection';
import ExperienceSection from './components/sections/ExperienceSection/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection/SkillsSection';
import AboutMeSection from './components/sections/AboutMeSection';
import Footer from './components/Footer';
import SectionHeading from './components/typography/SectionHeading';
import Header from './components/Header';

export default function Home() {
  return (
  <>
  <Header/>
    <div className='container mx-auto px-10 md:px-20'>
      <IntroSection/>

      <SectionHeading title="Experience"/>
      <ExperienceSection/>

      <SectionHeading title="Skills"/>
      <SkillsSection/>

      <SectionHeading title="About me"/>
      <AboutMeSection/>
    </div>
    <Footer/>
  </>
  );
}