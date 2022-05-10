import React from 'react';
import { BlogCard, CardInfo, GridContainer, HeaderThree, Hr, TitleContent, Img } from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { SRLWrapper } from "simple-react-lightbox";




 const Projects = () => (
  <SRLWrapper>
  <Section nopadding id="projects">
    <SectionTitle main>Портфоліо</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description }) => (
   
          <Img src={image}/>
       
      ))}
    </GridContainer>
  </Section>
  </SRLWrapper>
);

export default Projects;