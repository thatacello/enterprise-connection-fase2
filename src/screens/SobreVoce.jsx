import styled from 'styled-components';
import { Header } from '../common-components/Header/Header';
import { Colors, FontFamilies, FontSizes } from '../shared/DesignTokens';
import { sobreVoce } from '../shared/Links';

const Container = styled.div`
  height: 100vh;
  background-color: ${Colors.neutral};
`;

const Image = styled.div`
  width: 40vw;
  height: 100vh;
  background-image: url('../assets/images/foto-perfil.png');
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

const SocialMediaSection = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${FontFamilies.secondary};

    p {
      font-size: ${FontSizes.size_20}
      margin-left: 2rem;
    }
`;

const Button = styled.button`
  width: 10rem;
  margin-bottom: 1rem;
`;

function consultaEndereco() {
  let cep = '09250060';
  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url).then(function (response) {
    response.json().then(function (data) {
      mostrarEndereco(data);
    });
  });
}

function mostrarEndereco(dados) {
  let resultado = document.querySelector('#resultado');

  resultado.innerHTML = `Endereço: ${dados.logradouro} <br>
    Bairro: ${dados.bairro} <br>
    Cidade: ${dados.localidade} - ${dados.uf}`;
}

export function SobreVoce() {
  return (
    <>
      <Container>
        <Header menu={sobreVoce} />

        <Content>
          <Image src="/assets/images/foto-perfil.png" alt="foto de perfil" />

          <TextContent>
            <Title>
              Fulana da Silva<span>(She, her)</span>
            </Title>
            <InfoSection>
              <Info>fulanadasilva@gmail.com</Info>
              <Info>(11) 99999-9999</Info>
              <Info>CEP: 09250-060</Info>
              <Button onClick={() => consultaEndereco()}>Ver Endereço</Button>
              <Info id="resultado"></Info>
            </InfoSection>
            <SocialMediaSection>
              <img src="../assets/icons/in-icon.svg" alt="" />
              <p>@fulaninho</p>
            </SocialMediaSection>
            <SocialMediaSection>
              <img src="../assets/icons/slack-icon.svg" alt="" />
              <p>@fulaninho</p>
            </SocialMediaSection>
          </TextContent>
        </Content>
      </Container>
    </>
  );
}
