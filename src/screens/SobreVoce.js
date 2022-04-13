import styled from 'styled-components';
import { Header } from '../common-components/Header/Header';
import { Colors, FontFamilies, FontSizes } from '../shared/DesignTokens';
import { sobreVoce } from '../shared/Links';

const Container = styled.div`
  height: 100vh;
  background-color: ${Colors.neutral};
`;

const ImageContainer = styled.section``;

const Image = styled.img`
  width: 40vw;
  height: 100vh;
`;

const TextContent = styled.section`
  width: 100%;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: ${FontSizes.size_60};
  color: ${Colors.secondary};

  span {
    font-family: ${FontFamilies.secondary};
    color: ${Colors.dark};
    opacity: 0.5;
    font-size: ${FontSizes.size_23};
    margin-left: 1rem;
  }
`;

const Info = styled.span`
  font-size: ${FontSizes.size_25};
  color: ${Colors.dark};
  margin-bottom: 2rem;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  font-family: ${FontFamilies.secondary};
`;

export function SobreVoce() {
  return (
    <>
      <Container>
        <Header menu={sobreVoce} />

        <Content>
          <ImageContainer>
            <Image src="../assets/images/foto-perfil.png" alt="" />
          </ImageContainer>

          <TextContent>
            <Title>
              Fulana da Silva<span>(She, her)</span>
            </Title>
            <InfoSection>
              <Info>fulanadasilva@gmail.com</Info>
              <Info>(11) 99999-9999</Info>
              <Info>
                R. Zâmbia - Jardim das Maravilhas Santo André - SP, 09250-060
              </Info>
            </InfoSection>
          </TextContent>
        </Content>
      </Container>
    </>
  );
}
