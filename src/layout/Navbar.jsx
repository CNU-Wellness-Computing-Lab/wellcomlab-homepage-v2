import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/nav_logo.png";
import fonts from "../styles/textStyles";
import colors from "../styles/colors";

const NavWrapper = styled.nav`
  width: 100%;
  background: ${colors.black};
  position: relative;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${fonts.family.heading};
  font-weight: ${fonts.weight.semibold};
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
`;

const LogoImg = styled.img`
  height: 48px;
  width: auto;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Menu = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  font-family: ${fonts.family.heading};
  font-weight: ${fonts.weight.semibold};
  font-size: ${fonts.size.md};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const MobileMenuIcon = styled.button`
  display: none;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background: ${colors.white};
  border-radius: 999px;
  transition: all 0.3s ease;
  transform-origin: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  ${MobileMenuIcon}[aria-expanded="true"] &:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  ${MobileMenuIcon}[aria-expanded="true"] &:nth-child(2) {
    opacity: 0;
  }

  ${MobileMenuIcon}[aria-expanded="true"] &:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    background: ${colors.black};
    padding: ${({ $isOpen }) => ($isOpen ? "0 24px 24px 24px" : "0 24px")};
    max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    overflow: hidden;
    transition:
      max-height 0.3s ease,
      opacity 0.25s ease,
      padding 0.3s ease;
  }
`;

const MobileLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  font-family: ${fonts.family.heading};
  font-weight: ${fonts.weight.semibold};
  font-size: ${fonts.size.md};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

function MenuIcon({ isActive, onClick }) {
  return (
    <MobileMenuIcon
      type="button"
      aria-label="Toggle menu"
      aria-expanded={isActive}
      onClick={onClick}
    >
      <IconBox>
        <IconLine />
        <IconLine />
        <IconLine />
      </IconBox>
    </MobileMenuIcon>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <NavWrapper>
      <NavInner>
        <Logo to="/" onClick={handleMobileMenuClose}>
          <LogoImg src={logo} alt="WellcomLab Logo" />
        </Logo>

        <RightSection>
          <Menu>
            <StyledLink to="/publications">Publication</StyledLink>
            <StyledLink to="/members">Members</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
          </Menu>

          <MenuIcon
            isActive={isMobileMenuOpen}
            onClick={handleMenuToggle}
          />
        </RightSection>
      </NavInner>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileLink to="/publications" onClick={handleMobileMenuClose}>
          Publication
        </MobileLink>
        <MobileLink to="/members" onClick={handleMobileMenuClose}>
          Members
        </MobileLink>
        <MobileLink to="/projects" onClick={handleMobileMenuClose}>
          Projects
        </MobileLink>
        <MobileLink to="/contact" onClick={handleMobileMenuClose}>
          Contact
        </MobileLink>
      </MobileMenu>
    </NavWrapper>
  );
}