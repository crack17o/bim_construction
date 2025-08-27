import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import Container from '../atoms/Container';
import Button from '../atoms/Button';

const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${props => props.scrolled ? props.theme.colors.white : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  padding: ${props => props.scrolled ? '10px 0' : '20px 0'};
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 0, 0, 0.1)'};
    pointer-events: none;
    transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;

const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.scrolled || props.menuOpen ? props.theme.colors.primary : props.theme.colors.white};
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  z-index: 1;
  
  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    right: ${props => props.open ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    background-color: ${props => props.theme.colors.white};
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 80px;
    transition: right 0.3s ease;
    box-shadow: ${props => props.open ? '-5px 0 15px rgba(0, 0, 0, 0.1)' : 'none'};
  }
`;

const NavItem = styled(Link)`
  margin: 0 15px;
  color: ${props => props.scrolled || props.menuOpen ? props.theme.colors.darkGrey : props.theme.colors.white};
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  &:hover, &.active {
    color: ${props => props.theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin: 15px 0;
    color: ${props => props.theme.colors.darkGrey};
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${props => props.scrolled || props.open ? props.theme.colors.primary : props.theme.colors.white};
  z-index: 1001;
  transition: color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const WhatsAppButton = styled.a`
  margin-left: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin: 20px 0 0;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Using window.requestAnimationFrame to optimize performance
      window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <NavbarWrapper scrolled={scrolled}>
      <NavbarContainer>
        <Logo href="#" scrolled={scrolled} menuOpen={menuOpen}>
          BIM Construction
        </Logo>
        
        <MobileToggle onClick={toggleMenu} scrolled={scrolled} open={menuOpen}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MobileToggle>
        
        <NavLinks open={menuOpen}>
          <NavItem 
            to="about" 
            smooth={true} 
            duration={500} 
            scrolled={scrolled}
            menuOpen={menuOpen}
            onClick={closeMenu}
          >
            À propos
          </NavItem>
          <NavItem 
            to="services" 
            smooth={true} 
            duration={500} 
            scrolled={scrolled}
            menuOpen={menuOpen}
            onClick={closeMenu}
          >
            Services
          </NavItem>
          <NavItem 
            to="values" 
            smooth={true} 
            duration={500} 
            scrolled={scrolled}
            menuOpen={menuOpen}
            onClick={closeMenu}
          >
            Valeurs
          </NavItem>
          <NavItem 
            to="portfolio" 
            smooth={true} 
            duration={500} 
            scrolled={scrolled}
            menuOpen={menuOpen}
            onClick={closeMenu}
          >
            Portfolio
          </NavItem>
          <NavItem 
            to="team" 
            smooth={true} 
            duration={500} 
            scrolled={scrolled}
            menuOpen={menuOpen}
            onClick={closeMenu}
          >
            Équipe
          </NavItem>
          <NavItem 
            to="contact" 
            smooth={true} 
            duration={500} 
            scrolled={scrolled}
            menuOpen={menuOpen}
            onClick={closeMenu}
          >
            Contact
          </NavItem>
          
          <WhatsAppButton 
            href="https://wa.me/243XXXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button small>
              <FaWhatsapp /> Discuter
            </Button>
          </WhatsAppButton>
        </NavLinks>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
