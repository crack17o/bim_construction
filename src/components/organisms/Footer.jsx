import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTiktok } from 'react-icons/fa';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

const FooterSection = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 80px 0 0;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const FooterColumn = styled.div``;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const FooterLink = styled.li`
  margin-bottom: 10px;
  
  a {
    color: ${props => props.theme.colors.white};
    opacity: 0.8;
    transition: opacity 0.3s ease;
    display: inline-flex;
    align-items: center;
    
    &:hover {
      opacity: 1;
    }
    
    svg {
      margin-right: 10px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const LogoImage = styled.img`
  max-width: 180px;
  height: auto;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: 140px;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding: 20px 0;
  margin-top: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    opacity: 0.7;
    font-size: 14px;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterColumn>
            <Heading $as="h3" light mb="20px">
              <LogoImage src="./img/logo.png" alt="logo BIM Construction" />
            </Heading>
            <Text light mb="20px">
              Votre partenaire de confiance pour tous vos projets de construction en République Démocratique du Congo.
            </Text>
            <SocialLinks>
              <SocialLink
                href="https://www.facebook.com/profile.php?id=100064249621090"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialLink>

              <SocialLink
                href="https://x.com/BIMCONSTRU60521"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialLink>

              <SocialLink
                href="https://www.instagram.com/bimc.onstruction?igsh=MWQwNXdxdnkwZHJheQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialLink>

              <SocialLink
                href="https://wa.me/243846661944"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </SocialLink>

              <SocialLink
                href="https://www.tiktok.com/@bimconstruction1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </SocialLink>
            </SocialLinks>

          </FooterColumn>

          <FooterColumn>
            <Heading $as="h3" light mb="20px">
              Liens Rapides
            </Heading>
            <FooterLinks>
              <FooterLink>
                <Link to="home" smooth={true} duration={500}>
                  Accueil
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="about" smooth={true} duration={500}>
                  À propos
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="services" smooth={true} duration={500}>
                  Services
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="portfolio" smooth={true} duration={500}>
                  Portfolio
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="galerie" smooth={true} duration={500}>
                  Galerie
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="team" smooth={true} duration={500}>
                  Équipe
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <Heading $as="h3" light mb="20px">
              Services
            </Heading>
            <FooterLinks>
              <FooterLink>
                <Link to="services" smooth={true} duration={500}>
                  Travaux publics
                </Link>

              </FooterLink>
              <FooterLink>
                <Link to="services" smooth={true} duration={500}>
                  Rénovation & réhabilitation
                </Link>

              </FooterLink>
              <FooterLink>
                <Link to="services" smooth={true} duration={500}>
                  Études techniques
                </Link>

              </FooterLink>
              <FooterLink>
                <Link to="services" smooth={true} duration={500}>
                  Conseil en ingénierie
                </Link>

              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <Heading $as="h3" light mb="20px">
              Contact
            </Heading>
            <FooterLinks>
              <FooterLink>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <FaMapMarkerAlt />
                  Av. de l'école n°451 C/Gombe, Kinshasa, RDC
                </a>
              </FooterLink>
              <FooterLink>
                <a href="tel:+243846661944">
                  <FaPhone />
                  +243 846 661 944
                </a>
              </FooterLink>
              <FooterLink>
                <a href="mailto:Constructionbim77@gmail.com">
                  <FaEnvelope />
                  Constructionbim77@gmail.com
                </a>
              </FooterLink>
              <FooterLink>
                <a>
                  <FaClock />
                  Lun - Ven: 8h00 - 17h00
                </a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>
      </Container>

      <Copyright>
        <Container>
          <Text light mb="0" center>
            &copy; {currentYear} BIM Construction. Tous droits réservés.
          </Text>
            <Text light mb="0" center>
            Designed by <strong>JeJ</strong>
          </Text>
        </Container>
      </Copyright>
    </FooterSection>
  );
};

export default Footer;
