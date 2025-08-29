import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

// === Animations ===
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeBg = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  30% { opacity: 1; }
  40% { opacity: 0; }
  100% { opacity: 0; }
`;

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white; }
`;

// === Styled Components ===
const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.primary};
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: ${fadeBg} 35s infinite;
  animation-delay: ${props => props.delay}s;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.45);
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 650px;
  opacity: 0;
  animation: ${fadeInUp} 1.6s ease forwards;
`;

// Typing heading dynamique
const TypingHeading = styled(Heading)`
  overflow: hidden;
  border-right: 3px solid white;
  display: inline-block;
  animation: ${blink} 0.8s step-end infinite;

  /* Par défaut : pas de retour à la ligne */
  white-space: nowrap;

  /* Sur mobile : on autorise le retour à la ligne */
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    white-space: normal;
    font-size: 1.6rem; /* réduire un peu la taille */
    line-height: 1.3;
    word-break: break-word;
  }
`;


// Texte qui fade-in après le titre
const AnimatedText = styled(Text)`
  opacity: 0;
  animation: ${fadeInUp} 2.5s ease forwards;
  animation-delay: 1s;
`;

// Boutons
const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Hero = () => {
  const images = [
    "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481725/488542158_1061912002627111_3644216956228791275_n_yejg9v.jpg",
    "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481713/470697059_1100293094887603_7628524880126417093_n_af587d.jpg",
    "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481714/488761384_1061643149320663_763092387260269920_n_nke2wm.jpg",
    "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481715/487453540_1061643162653995_3724842192002143436_n_bflbbf.jpg",
    "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481713/469530168_1092178729032373_1291363834250135052_n_dmrxhy.jpg"
  ];

  // === Gestion typing dynamique ===
  const phrases = [
    "Des solutions de qualité pour vos projets",
    "Un partenaire fiable pour vos routes",
    "Construisons ensemble vos bâtiments"
  ];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typingTimeout;

    if (!isDeleting) {
      typingTimeout = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000); // pause avant suppression
        }
      }, speed);
    } else {
      typingTimeout = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 50);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <HeroSection id="home">
      {images.map((url, i) => (
        <BackgroundImage
          key={i}
          style={{ backgroundImage: `url(${url})` }}
          delay={i * 7}
        />
      ))}
      <Overlay />
      <Container>
        <HeroContent>
          <TypingHeading $as="h1" light mb="20px">
            {text}
          </TypingHeading>

          <AnimatedText light size="large" maxWidth="550px">
            BIM Construction est votre partenaire de confiance en République Démocratique du Congo 
            pour la construction de bâtiments, routes et infrastructures civiles.
          </AnimatedText>

          <ButtonGroup>
            <Link to="contact" smooth={true} duration={500}>
              <Button>
                Demander un devis <FaArrowRight />
              </Button>
            </Link>
            <Link to="services" smooth={true} duration={500}>
              <Button variant="white" outline>
                Nos services
              </Button>
            </Link>
          </ButtonGroup>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
