import { Header } from '../common-components/Header/Header';
import { formacao } from '../shared/Content';
import styled from 'styled-components';
import { Colors, FontFamilies, FontSizes } from '../shared/DesignTokens';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-family: ${FontFamilies.primary};
  font-size: ${FontSizes.size_30};
`;

const Description = styled.span`
  font-family: ${FontFamilies.primary};
  font-size: ${FontSizes.size_20};
  text-align: center;
`;

const Divisor = styled.img``;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export function Formacao() {
  return (
    <>
      <Header menu={formacao} />
      <Container>
        <Divisor src="../assets/images/divisor.svg" />
        <Box>
          {formacao.map((item) => (
            <Content>
              <Title>{item.title}</Title>
              <Description
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </Content>
          ))}
        </Box>
      </Container>
    </>
  );
}
