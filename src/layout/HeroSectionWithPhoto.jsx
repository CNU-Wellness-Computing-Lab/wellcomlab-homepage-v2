import styled from "styled-components";
import groupPhoto from "../assets/group_photo.png";
import fonts from "../styles/textStyles";
import colors from "../styles/colors";

const Section = styled.section`
  width: 100%;
  background: ${colors.white};
`;

const HeroInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 60px;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 0px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 10px 30px;
    gap: 36px;
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: ${colors.white};
`;

const GroupPhoto = styled.img`
  display: block;
  width: 100%;
  height: clamp(320px, 42vw, 560px);
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: 900px) {
    height: auto;
    max-height: 420px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

const Title = styled.h1`
  font-family: ${fonts.family.heading};
  font-weight: ${fonts.weight.bold};
  font-size: clamp(24px, 3.5vw, 32px);
  line-height: 1.2;
  color: ${colors.text};
  letter-spacing: -0.02em;
  line-height: 1.5;
  margin: 0;
`;

const Highlight = styled.span`
  display: inline-block;
  margin: 0 2px;
  padding: 3px 12px;
  border-radius: 999px;
  background: ${colors.text};
  font-size: clamp(22px, 3.5vw, 28px);
  color: white;
  font-weight: ${fonts.weight.bold};
`;

const SubTitle = styled.h2`
  font-family: ${fonts.family.heading};
  font-size: clamp(22px, 3.5vw, 32px);
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin-top: 12px;
  color: ${colors.text};
  font-weight: ${fonts.weight.bold};
`;


const TextWrapper = styled.div`
  margin-left: clamp(0px, 6vw, 120px);
  margin-top: clamp(0px, 5vh, 100px);

  @media (max-width: 900px) {
    margin-top: 20px;
  }
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


export default function HeroSectionWithPhoto() {
  return (
    <Section>
      <HeroInner>
        <PhotoWrapper>
          <GroupPhoto src={groupPhoto} alt="WellcomLab group photo" />
        </PhotoWrapper>

        <HeroContent>
            <TextWrapper>
                <Title>
            Welcome to <Highlight>WellcomLab</Highlight>
          </Title>
{/* 
          <SubTitle>
            at Chungnam National University!
          </SubTitle> */}

          <Description>
            Wellness Computing Lab (Wellcom Lab) is a research group at Chungnam National University exploring how the latest AI technologies can help people live healthier and safer lives. We build intelligent systems that support better decision-making, assist daily life through humanoid robots, and provide personalized health support by analyzing biosignals, behaviors, and environmental data.
          </Description>
            </TextWrapper>
        </HeroContent>
      </HeroInner>
    </Section>
  );
}