import styled, { keyframes } from "styled-components";
import hero1 from "../assets/hero_1.png";
import hero2 from "../assets/hero_2.png";
import hero3 from "../assets/hero_3.png";
import hero4 from "../assets/hero_4.png";
import hero6 from "../assets/hero_6.png";
import hero7 from "../assets/hero_7.png";
import hero8 from "../assets/hero_8.png";
import hero9 from "../assets/hero_9.png";
import fonts from "../styles/textStyles";
import colors from "../styles/colors";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 520px;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  background: linear-gradient(
    135deg,
    #fbfffdff 0%,
    #d6e5dcff 50%,
    #e7e7e7ff 100%
  );
`;

const Layer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  user-select: none;
`;

const Hero1 = styled.img`
  position: absolute;
  top: clamp(-80px, -5vw, -20px);
  left: 0;

  width: clamp(280px, 50vw, 600px); 
  height: auto;
  pointer-events: none;
`;

const Hero2 = styled.img`
  position: absolute;
  bottom: clamp(-10px, -5vw, -20px);
  right: 0;

  width: clamp(240px, 50vw, 500px); 
  height: auto;
  pointer-events: none;
`;

const Hero3 = styled.img`
  position: absolute;
  top: clamp(-10px, -5vw, -20px);
  right: clamp(160px, 10vw, 800px);

  width: clamp(200px, 30vw, 380px); 
  height: auto;
  pointer-events: none;

  transition: opacity 0.6s ease;

  @media (max-width: 1024px) {
    opacity: 0;
  }
`;
const Hero4 = styled.img`
  position: absolute;
  top: clamp(-10px, -5vw, -20px);
  right: clamp(-20px, -20vw, -200px);

  width: clamp(100px, 26vw, 240px); 
  height: auto;
  pointer-events: none;
`;

const Hero6 = styled.img`
  position: absolute;
  bottom: clamp(-40px, -15vw, -80px);
  left: clamp(0px, 10vw, 1200px);
  width: clamp(180px, 28vw, 300px);
  height: auto;
  pointer-events: none;
`;

const Hero7 = styled.img`
  position: absolute;
  bottom: clamp(40px, 15vw, 80px);
  left: clamp(-300px, -10vw, -100px);
  width: clamp(180px, 28vw, 300px);
  height: auto;
  pointer-events: none;
`;

const Hero8 = styled.img`
  position: absolute;
  top: clamp(-0px, -5vw, 0px);
  left: clamp(10px, 3vw, 40px);
  width: clamp(100px, 6vw, 200px);
  height: auto;
  pointer-events: none;

   transition: opacity 0.6s ease;

  @media (max-width: 1024px) {
    opacity: 0;
  }
`;

const Hero9 = styled.img`
  position: absolute;
  top: clamp(-0px, -5vw, 0px);
  left: 34%;
  width: clamp(200px, 10vw, 500px);

  height: auto;
  pointer-events: none;
  transition: opacity 0.6s ease;
  @media (max-width: 1024px) {
    opacity: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;

  max-width: 890px;
  margin: 0 auto;
  min-height: 520px;
  padding: 80px 20px;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 420px;
    padding: 56px 20px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  background: radial-gradient(
  circle at center,
  rgba(193, 193, 193, 0.3) 30%,
  rgba(197, 197, 197, 0.4) 70%,
  rgba(193, 193, 193, 0.5) 90%
);
`;

const Title = styled.h1`
  font-family: ${fonts.family.heading};
  font-weight: ${fonts.weight.semibold};
  font-size: clamp(28px, 5vw, 44px);
  line-height: 1.2;
  color: ${colors.text};
  letter-spacing: -0.02em;
  line-height: 1.5;
  margin: 0;
`;

const Highlight = styled.span`
  display: inline-block;
  margin: 0 2px;
  padding: 5px 12px;
  border-radius: 999px;
  background: #5b7f73;
  color: white;
  font-weight: ${fonts.weight.semibold};
`;

const SubTitle = styled.h2`
  font-family: ${fonts.family.heading};
  font-weight: ${fonts.weight.medium};
  font-size: clamp(24px, 3.6vw, 36px);
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin-top: 12px;
  color: ${colors.text};
  font-weight: ${fonts.weight.semibold};
  margin-left: clamp(0px, 3vw, 80px);
`;

const TextWrapper = styled.div`
  margin-left: clamp(0px, 6vw, 120px);
  margin-top: clamp(20px, 5vh, 100px);
`;

const Description = styled.p`
  max-width: 980px;

  font-family: ${fonts.family.body};
  font-weight: ${fonts.weight.regular};
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${colors.text};
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

export default function HeroSection() {
  return (
    <Section>
      <HeroBackground />
      <Layer>
        <Hero1 src={hero1} alt="" />
        <Hero2 src={hero2} alt="" />
        <Hero3 src={hero3} alt="" />
        <Hero4 src={hero4} alt="" />
        <Hero6 src={hero6} alt="" />
        <Hero7 src={hero7} alt="" />
        <Hero8 src={hero8} alt="" />
        <Hero9 src={hero9} alt="" />
      </Layer>

      <Overlay />

      <HeroContent>
        <TextWrapper>
          <Title>
            Welcome to <Highlight>WellcomLab</Highlight>
          </Title>
          <SubTitle>
            at Chungnam National University!
          </SubTitle>

          <Description>
            We explore AI-driven user experiences with generative and augmented
            technologies, creating immersive and intuitive interactions. Our primary
            goal is to enhance well-being through innovative HCI research. By
            focusing on creating user-centered technology, we strive to make
            meaningful contributions to both the field and individuals&apos; lives.
          </Description>
        </TextWrapper>
      </HeroContent>
    </Section>
  );
}