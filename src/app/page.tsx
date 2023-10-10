import IntroSection from './components/sections/IntroSection';
import ExperienceSection from './components/sections/ExperienceSection/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection/SkillsSection';
import AboutMeSection from './components/sections/AboutMeSection';
import Footer from './components/Footer';
import Header from './components/Header';
import WithFadeIn from './components/WithFadeIn';

export default function Home() {
  return (
  <>
 
    <div className='container mx-auto px-10 md:px-20'>
    <Header/>
    
      <IntroSection/>
      <WithFadeIn>
        <ExperienceSection/>
      </WithFadeIn>
      <WithFadeIn>
        <SkillsSection/>
      </WithFadeIn>
      
      {/* <AboutMeSection/> */}
    </div>
    <Footer/>
  </>
  );
}