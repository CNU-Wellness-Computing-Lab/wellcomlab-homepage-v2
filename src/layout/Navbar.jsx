import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/nav_logo.png";
import fonts from "../styles/textStyles";
import colors from "../styles/colors";

const NavWrapper = styled.nav`
  width: 100%;
  background: ${colors.black};
`;

const Menu = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${fonts.family.heading};
  font-weight: ${fonts.weight.semibold};
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;
const LogoImg = styled.img`
  height: 48px;
`;

export default function Navbar() {
  return (
    <NavWrapper>
      <NavInner>
        <Logo to="/">
          <LogoImg src={logo} alt="WellcomLab Logo" />
        </Logo>
        <Menu>
          <StyledLink to="/publications">Publication</StyledLink>
          <StyledLink to="/members">Members</StyledLink>
          <StyledLink to="/projects">Projects</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </Menu>
      </NavInner>
    </NavWrapper>
  );
}