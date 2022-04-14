import { Header } from '../common-components/Header/Header';
import { TimeLine } from '../common-components/TimeLine/TimeLine';
import { formacao } from '../shared/Links';
import { formacaoContent } from './../shared/Content';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export function Formacao() {
  return (
    <>
      <Header menu={formacao} />
      <Container>
        <TimeLine content={formacaoContent} />
      </Container>
    </>
  );
}
