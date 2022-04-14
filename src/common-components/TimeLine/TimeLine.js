import styled from 'styled-components';
import { FontFamilies, FontSizes } from '../../shared/DesignTokens';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export function TimeLine(props) {
  return (
    <>
      <Container>
        <Divisor src="../assets/images/divisor.svg" />
        <Box>
          {props.content.map((item) => (
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
