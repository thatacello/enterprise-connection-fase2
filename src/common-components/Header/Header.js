import styled from 'styled-components';
import { Colors, FontFamilies, FontSizes } from '../../shared/DesignTokens';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  display: flex;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  z-index: -1;
  height: 10rem;
  padding: 0 10rem;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 60vw;
`;

const Typography = styled.span`
  font-size: ${FontSizes.size_30};
  font-family: ${FontFamilies.primary};
  color: ${Colors.primary};
`;

export function Header(props) {
  return (
    <Wrapper>
      <NavBar>
        {props.menu.map((item, index) => (
          <Typography key={index}>
            <Link to={`/${item.route}`}>{item.title}</Link>
          </Typography>
        ))}
      </NavBar>
    </Wrapper>
  );
}
