import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/textStyles";
import usePlayAndTalkCount from "../hooks/usePlayAndTalkCount";
import PlayAndTalkCharacterSection from "../layout/PlayAndTalkCharacterSection";
import PlayAndTalkHallOfFameSection from "../layout/PlayAndTalkHallOfFameSection";

const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundGray};
`;

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 60px 0px;
  max-height: 100%;

  @media (max-width: 768px) {
    padding: 40px 30px 60px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const PageTitle = styled.h1`
  margin: 0;
  margin-top: 12px;
  padding-left: 12px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.hero};
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.textLightMuted};
  line-height: 1.3;
  letter-spacing: -0.03em;
  @media (max-width: 768px) {
    font-size: ${fonts.size.hero};
  }
`;

const SubText = styled.p`
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.medium};
  color: #777;
  line-height: 1.45;
  padding-left: 16px;
  letter-spacing: -0.04em;
`;

const StartImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: 1024px) {
    max-width: 500px;
  }
`;

const StartButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const StartButtonImage = styled.img`
  width: clamp(280px, 32vw, 450px);
  height: auto;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
  transition: transform 0.2s ease;
  ${StartButton}:hover & {
    transform: translateY(-2px) scale(1.03);
  }
  @media (max-width: 1024px) {
    padding: 10px 0px;
    width: 100%;
    max-width: 400px;
  }
`;

const Keyword = styled.span`
  padding: 14px 16px;
  border-radius: 999px;
  background: ${colors.white};
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.llg};
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.textLightMuted};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
`;

export default function PlayAndTalkPage() {
    const { count, loading } = usePlayAndTalkCount();
   const navigate = useNavigate();
  return (
    <SectionWrapper>
      <Section>
        <Layout>
          <LeftColumn>
            <StartImage src="/images/start_image.png" alt="start" />
          </LeftColumn>

          <RightColumn>
            <Keyword>2026 CNU OpenLab</Keyword>
            <PageTitle>지금까지 <br /> {loading ? "0" : count} 명이 <br /> 탐험을 시작했어요</PageTitle>
            <SubText>
                2026.5.15(금) WELLCOM Lab(W5 606)으로 오시면 대면 진로상담을 진행합니다.
                <br />
                3분 만에 떠나는 진로 탐험, 6개의 상황으로 나의 캐릭터를 만나요!
            </SubText>
            <StartButton type="button" onClick={() => navigate("/playandtalk/questions")}>
                <StartButtonImage src="/images/start_button.png" alt="Start" />
            </StartButton>

          </RightColumn>
        </Layout>
      </Section>
      <PlayAndTalkCharacterSection />
      <PlayAndTalkHallOfFameSection />
    </SectionWrapper>
  );
}