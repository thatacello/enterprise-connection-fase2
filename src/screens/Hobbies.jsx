import { Header } from '../common-components/Header/Header';
import { hobbies } from '../shared/Links';
import styled from 'styled-components';
import { Colors, FontFamilies, FontSizes } from '../shared/DesignTokens';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  padding: 5rem;
  font-size: ${FontSizes.size_30};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .pink {
    color: ${Colors.secondary};
  }

  .blue {
    color: ${Colors.primary};
  }
`;

const Title = styled.div`
  font-size: ${FontSizes.size_80};
  font-family: ${FontFamilies.secondary};
`;

const Image = styled.img`
  height: 32rem;
  width: 23rem;
`;

export function Hobbies() {
  return (
    <>
      <Header menu={hobbies} />
      <Container>
        <ImagesContainer>
          <Content>
            <Title className="blue">TÊNIS</Title>
            <Image
              src="../assets/images/hobbies1.png"
              alt="máquina fotográfica"
            />
          </Content>

          <Content>
            <Image src="../assets/images/hobbies2.png" alt="raquete de tênis" />
            <Title className="pink">FOTOGRAFIA</Title>
          </Content>
        </ImagesContainer>
        <TextContainer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique
          et egestas quis ipsum suspendisse ultrices. Nisl nunc mi ipsum
          faucibus vitae aliquet nec. Id diam vel quam elementum pulvinar etiam
          non. At erat pellentesque adipiscing commodo elit at imperdiet dui
          accumsan. Volutpat ac tincidunt vitae semper quis. Ac odio tempor orci
          dapibus ultrices in iaculis. Quis vel eros donec ac. Feugiat nisl
          pretium fusce id velit ut tortor pretium viverra. Et ultrices neque
          ornare aenean euismod. Posuere ac ut consequat semper viverra nam.
          Elit ut aliquam purus sit amet luctus venenatis lectus magna.
        </TextContainer>
      </Container>
    </>
  );
}
