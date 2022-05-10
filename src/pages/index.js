
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import SimpleReactLightbox from 'simple-react-lightbox'

const Home = () => {
  return (
    <Layout>
      <SimpleReactLightbox>
       <Section grid> 
        <Hero />
         <BgAnimation /> 
      </Section> 
      <Projects />
      <Technologies />
      <Timeline />
      </SimpleReactLightbox>
    </Layout>
    
  );
};

export default Home;
