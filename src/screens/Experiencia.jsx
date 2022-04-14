import { Header } from '../common-components/Header/Header';
import { experiencia } from '../shared/Links';
import { experienciaContent } from '../shared/Content';
import { TimeLine } from './../common-components/TimeLine/TimeLine';
import styled from 'styled-components';
import {
  Colors,
  Gradient,
  FontFamilies,
  FontSizes,
} from '../shared/DesignTokens';
import { imageContent } from './../shared/Content';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageContainer = styled.section`
  background-image: ${Gradient.neutral_gradient};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  padding: 6rem 0;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin-bottom: 1rem;
  width: 10rem;
  height: 10rem;
`;

const Description = styled.span`
  font-size: ${FontSizes.size_20};
  color: ${Colors.primary};
  font-family: ${FontFamilies.primary};
  width: 10rem;
  text-align: center;
`;

export function Experiencia() {
  return (
    <Container>
      <Header menu={experiencia} />
      <TimeLine content={experienciaContent} />
      <ImageContainer>
        {imageContent.map((item) => (
          <Item>
            <Image src={`/assets/images/${item.image}`} />
            <Description>{item.description}</Description>
          </Item>
        ))}
      </ImageContainer>
    </Container>
  );
}
