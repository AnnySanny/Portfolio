import React from 'react';
import { DiFirebase, DiIllustrator, DiPhotoshop, DiReact, DiZend } from 'react-icons/di';
import { SiAutodesk, SiAdobe } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { MdTexture } from "react-icons/md";
import { FaChessBoard } from "react-icons/fa";
const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Технології</SectionTitle>
    <SectionText>
    За допомогою сучасних технологій відображаю в 3Д 
       існуючі або тільки запроектовані об'єкти нерухомості, інфраструктури, ландшафту або інтер'єру з максимальною точністю до деталей та освітлення. 
    </SectionText>
    <List>
      <ListItem>
        <SiAdobe size="6rem" />
        <ListContainer>
          <ListTitle>Adobe</ListTitle>
          <ListParagraph>
            Photoshop та Illustrator <br />
            створення банерів, плакатів, мокапів, художніх зображень
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAutodesk size="6rem" />
        <ListContainer>
          <ListTitle>Autodesk</ListTitle>
          <ListParagraph>
            3ds Max <br />
            візуалізація об'єктів, моделювання екстер'єру та інтер'єру 
          </ListParagraph>
        </ListContainer>
      </ListItem>
  

    </List>

  </Section>
);

export default Technologies;
