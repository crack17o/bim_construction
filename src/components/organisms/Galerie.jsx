import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import Container from "../atoms/Container";
import Section from "../atoms/Section";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

// ===== Animations =====
const scrollUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;
const scrollDown = keyframes`
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
`;

// ===== Styles =====
const PhotoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 40px 0;
  padding: 20px;
  background: #fff;
  border-radius: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

const Column = styled(motion.div)`
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  height: 400px;

  @media (max-width: 1024px) {
    height: 350px;
  }
  @media (max-width: 640px) {
    height: 300px;
  }

  .scrolling {
    display: flex;
    flex-direction: column;
    animation: ${(props) =>
        props.direction === "up" ? scrollUp : scrollDown}
      linear infinite;
    animation-duration: ${(props) => props.speed}s;

    img {
      margin: 10px 0;
      border-radius: 12px;
      width: 100%;
      height: auto;
      max-height: 180px;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
      &:hover {
        transform: scale(1.08);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

// ===== Modal =====
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  width: 90%;
  max-width: 900px;
  aspect-ratio: 16/9;
  display: flex;
  justify-content: center;
  align-items: center;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 16px;
    background: #000;
    box-shadow: 0 10px 40px rgba(0,0,0,0.35);
  }

  .prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1.6rem;
    padding: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover { color: #222; }
  }
  .prev { left: -60px; @media(max-width:1024px){ left:10px; } }
  .next { right: -60px; @media(max-width:1024px){ right:10px; } }
`;

const CloseButton = styled.button`
  position: fixed;
  background: transparent;
  top: 20px;
  right: 25px;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 8px 12px;
  z-index: 10000;
  transition: all 0.3s ease;
  &:hover { color: red; }
`;

// ===== Video Carousel =====
const VideoSection = styled.div`
  margin-top: 60px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
`;

const VideoWrapper = styled.div`
  display: flex;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform: translateX(${props=>props.offset}%);
`;

const VideoBox = styled(motion.div)`
  min-width: 100%;
  height: 400px;
  background: linear-gradient(135deg,#87cefa 0%,#ffffff 100%);
  position: relative;
  display:flex;
  justify-content:center;
  align-items:center;

  img{
    width:50%;
    cursor:pointer;
    border-radius:12px;
    transition: transform 0.4s ease;
    &:hover{ transform: scale(1.05);}
  }

  .play-icon{
    position:absolute;
    font-size:4rem;
    color: rgba(255,255,255,0.9);
    pointer-events:none;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse{
    0%{transform: scale(1); opacity:0.9;}
    50%{transform: scale(1.2); opacity:1;}
    100%{transform: scale(1); opacity:0.9;}
  }
`;

const Dots = styled.div`
  display:flex;
  justify-content:center;
  margin-top:12px;
  gap:10px;
  span{
    width:12px;
    height:12px;
    background:#ccc;
    border-radius:50%;
    cursor:pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    &.active{
      background:#007bff;
      transform:scale(1.2);
    }
  }
`;

// ===== Composant =====
const Galerie = () => {
  const [modalOpen,setModalOpen] = useState(false);
  const [currentIndex,setCurrentIndex] = useState(0);
  const [modalType,setModalType] = useState("image");
  const [videoIndex,setVideoIndex] = useState(0);

  const photoBands = [
    [
      "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481713/469530168_1092178729032373_1291363834250135052_n_dmrxhy.jpg",
      "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481713/470697059_1100293094887603_7628524880126417093_n_af587d.jpg",
      "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481713/469404662_1092178822365697_9136343951879758930_n_uafgg4.jpg",
    ],
    [
      "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481713/487818513_1057520776399567_8869759726771928338_n_nv8wn1.jpg",
      "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481714/488761384_1061643149320663_763092387260269920_n_nke2wm.jpg",
      "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481714/487221173_1061643025987342_2526297532227709646_n_tnlydj.jpg",
    ],
    [
      "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481714/469281165_1092182492365330_7246310124228468489_n_sdrvur.jpg",
      "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481714/487828065_1057520963066215_6935360999702409036_n_dzmpvc.jpg",
      "https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481714/168594836_274820500768204_5557828795578058513_n_ydpbig.jpg",
    ],
  ];

  const videos = [
    {
      url:"https://res.cloudinary.com/dbwuzqvgn/video/upload/v1756482344/Villa_uni_ecologique_hjeo6x.mp4",
      thumbnail:"https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481726/488199865_1061926755958969_7635251130115395931_n_ahixbb.jpg"
    },
    {
      url:"https://res.cloudinary.com/dbwuzqvgn/video/upload/v1756482126/2_OK_ix8lqa.mp4",
      thumbnail:"https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481722/487983933_1061643082654003_1746859014386580641_n_mqpwma.jpg"
    },
    {
      url:"https://res.cloudinary.com/dbwuzqvgn/video/upload/v1756482146/APPART_R_3_afqnfp.mp4",
      thumbnail:"https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481715/487849359_1061643005987344_8299947703764663113_n_xxnzvc.jpg"
    },
    {
      url:"https://res.cloudinary.com/dbwuzqvgn/video/upload/v1756482344/3_MODERNE_s6stgv.mp4",
      thumbnail:"https://res.cloudinary.com/dbwuzqvgn/image/upload/v1756481725/488542158_1061912002627111_3644216956228791275_n_yejg9v.jpg"
    },
  ];

  const allPhotos = photoBands.flat();

  const openModal = (index,type)=>{
    setCurrentIndex(index);
    setModalType(type);
    setModalOpen(true);
  };
  const closeModal = ()=>setModalOpen(false);
  const prevItem = ()=> setCurrentIndex(prev=>(prev-1 + (modalType==="image"?allPhotos.length:videos.length)) % (modalType==="image"?allPhotos.length:videos.length));
  const nextItem = ()=> setCurrentIndex(prev=>(prev+1) % (modalType==="image"?allPhotos.length:videos.length));

  useEffect(()=>{
    const interval = setInterval(()=>{ setVideoIndex(prev=>(prev+1)%videos.length); },6000);
    return ()=>clearInterval(interval);
  },[videos.length]);

  return (
    <Section id="galerie">
      <Container>
        <Heading center underline>Galerie</Heading>
        <Text center maxWidth="700px" style={{margin:"0 auto 30px"}}>
          Découvrez nos réalisations et projets à travers nos photos et vidéos.
        </Text>

        {/* Photos */}
        <PhotoSection>
          {photoBands.map((col,i)=>(
            <Column key={i} direction={i===1?"down":"up"} speed={30+i*10}
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.6, delay:i*0.2}}
            >
              <div className="scrolling">
                {col.concat(col).map((img,j)=>(
                  <img key={j} src={img} alt={`photo-${j}`} loading="lazy" onClick={()=>openModal(allPhotos.indexOf(img),"image")} />
                ))}
              </div>
            </Column>
          ))}
        </PhotoSection>

        {/* Vidéos */}
        <VideoSection>
          <VideoWrapper offset={-videoIndex*100}>
            {videos.map((video,i)=>(
              <VideoBox key={i} initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0.6}}>
                <img src={video.thumbnail} alt={`video-${i}`} onClick={()=>openModal(i,"video")} />
                <FaPlay className="play-icon" />
              </VideoBox>
            ))}
          </VideoWrapper>
          <Dots>
            {videos.map((_,i)=>(
              <span key={i} className={videoIndex===i?"active":""} onClick={()=>setVideoIndex(i)}></span>
            ))}
          </Dots>
        </VideoSection>

        {/* Modal */}
        <AnimatePresence>
          {modalOpen && (
            <ModalOverlay initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={closeModal}>
              <CloseButton onClick={closeModal}><FaTimes/></CloseButton>
              <ModalContent initial={{scale:0.8, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.8, opacity:0}} onClick={e=>e.stopPropagation()}>
                {modalType==="image"?
                  <img src={allPhotos[currentIndex]} alt="modale" />:
                  <video src={videos[currentIndex].url} controls autoPlay />
                }
                <button className="prev" onClick={prevItem}><FaArrowLeft/></button>
                <button className="next" onClick={nextItem}><FaArrowRight/></button>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default Galerie;
