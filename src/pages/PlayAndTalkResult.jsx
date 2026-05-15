import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/textStyles";
import { playResults } from "../assets/playandtalk/playResult";
import PlayAndTalkFeedbackModal from "../layout/PlayAndTalkFeedbackModal";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import PlayAndTalkStatsSection from "../layout/PlayAndTalkStatsSection";

const PageWrapper = styled.main`
  width: 100%;
  background-color: ${colors.backgroundGray};
    max-width: 100vw;
`;

const ResultHeroWrapper = styled.section`
  width: 100%;
  background-color: ${colors.backgroundGray};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatsArea = styled.section`
  width: 100%;
  background-color: ${colors.backgroundGray};
  padding: 0 60px 60px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 24px 50px;
  }
`;

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px 60px 30px;
  max-height: 100%;
  @media (max-width: 768px) {
    padding: 40px 30px 60px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  gap: 48px;
  margin-bottom:30px;
  align-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-width: 0;
`;

const PageTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.xl};
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.textMuted};
  line-height: 1.3;
  letter-spacing: -0.03em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${fonts.size.xl};
  }
`;

const SubText = styled.p`
width: 100%;
  max-width: 100%;
  min-width: 0;
  margin: 0;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.sm};
  font-weight: ${fonts.weight.medium};
  color: ${colors.textLightMuted};
  line-height: 1.4;
  letter-spacing: -0.04em;
  white-space: pre-line;
  margin: 8px 0px;
  padding: 10px 0px;
`;


const SubTitle = styled.h3`
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.lg};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.textMuted};
  line-height: 1;
  margin: 10px 0px;
  letter-spacing: -0.04em;

  @media (max-width: 768px) {
    margin: 20px 0px;
  }
`;

const StartImage = styled.img`
  width: 100%;
  max-width: 320px;
  height: auto;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: 1024px) {
    max-width: 360px;
  }
`;

const StartButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const ButtonArea = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
   gap: 10px;
  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const StartButtonImage = styled.img`
  height: clamp(48px, 62vw, 102px);
  width: auto;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
  transition: transform 0.2s ease;

  ${StartButton}:hover & {
    transform: translateY(-2px) scale(1.03);
  }

  @media (max-width: 1024px) {
    height: 120px;
  }
`;

const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const KeywordTag = styled.span`
  padding: 4px 12px;
  border-radius: 999px;
  background: ${colors.primaryLight};
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.sm};
  font-weight: ${fonts.weight.bold};
  color: ${colors.primary};

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    font-size: ${fonts.size.lg};
    padding: 8px 16px;
  }
`;

const CareerSection = styled.div`
  margin-top: 6px;
  margin-bottom: 16px;
`;

const CareerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

   @media (max-width: 768px) {
    gap: 6px;
  }
`;

const CareerCard = styled.div`
  padding: 4px 20px;
  border-radius: 16px;
  background: ${colors.white};
  border: 1.5px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);

  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 100px;
  min-height: 44px;
  box-sizing: border-box;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }
  @media (max-width: 768px) {
    font-size: ${fonts.size.lg};
    padding: 8px 12px;
    min-width: 80px;
    min-height: 24px;
  }

`;

export default function PlayAndTalkResultPage() {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [resultContent, setResultContent] = useState(null);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  useEffect(() => {
    const savedResult = localStorage.getItem("playAndTalkResult");

    if (!savedResult) {
      navigate("/playandtalk/questions");
      return;
    }

    const parsed = JSON.parse(savedResult);
    const resultKey = `${parsed.firstType}-${parsed.secondType}`;
    const content = playResults[resultKey];

    if (!content) {
      console.error("No matching result:", resultKey);
      navigate("/playandtalk/questions");
      return;
    }
    setResult(parsed);
    setResultContent(content);
    }, [navigate]);

    if (!result || !resultContent) {
        return <div>Loading...</div>;
    }


    const handleFeedbackSubmit = async (formData) => {
        const alreadySubmitted = localStorage.getItem("playAndTalkSubmitted");

        if (alreadySubmitted) {
            alert("이미 탐험 기록을 남겼습니다.");
            setIsFeedbackModalOpen(false);
            return;
        }
        try {
            const resultKey = `${result.firstType}-${result.secondType}`;

            await addDoc(collection(db, "playAndTalkSubmissions"), {
            nickname: formData.nickname,
            grade: formData.grade,
            feedback: formData.feedback,

            resultKey,
            scores: result.scores,
            answerHistory: result.answerHistory,
            source: "openlab-2026",
            createdAt: serverTimestamp(),
            });

            localStorage.setItem("playAndTalkSubmitted", "true");

            setIsFeedbackModalOpen(false);
            alert("탐험 기록이 저장되었습니다.");
        } catch (error) {
            console.error("Failed to submit Play&Talk feedback:", error);
            alert("저장 중 문제가 발생했습니다. 다시 시도해주세요.");
        }
        };

  return (
    <PageWrapper>

    <ResultHeroWrapper>
      <Section>
        <PlayAndTalkFeedbackModal
            isOpen={isFeedbackModalOpen}
            onClose={() => setIsFeedbackModalOpen(false)}
            onSubmit={handleFeedbackSubmit}
            />
        <Layout>
          <LeftColumn>
            <StartImage src={resultContent.image} alt={resultContent.title} />
            <PageTitle>나는야! {resultContent.title}</PageTitle>
            <SubText>{resultContent.description}</SubText>
            <KeywordList>
                {resultContent.keywords.map((keyword) => (
                    <KeywordTag key={keyword}># {keyword}</KeywordTag>
                ))}
            </KeywordList>
          </LeftColumn>

          <RightColumn>

            <CareerSection>
                <SubTitle>Adventure Picks</SubTitle>
                <CareerList>
                    {resultContent.careers.map((career) => (
                    <CareerCard key={career}>{career}</CareerCard>
                    ))}
                </CareerList>
                </CareerSection>

            <div>
              <SubTitle>HCI Adventures</SubTitle>
              {resultContent.hciDomains.map((domain) => (
                <div key={domain.name}>
                  <CareerCard>{domain.name}</CareerCard>
                  <SubText>{domain.reason}</SubText>
                </div>
              ))}
            </div>
            <ButtonArea>
                <StartButton
                type="button"
                    onClick={() => setIsFeedbackModalOpen(true)}
                    >
                    <StartButtonImage src="/images/add_button.png" alt="add" />
                </StartButton>

                <StartButton
                    type="button"
                    onClick={() => navigate("/playandtalk")}
                    >
                    <StartButtonImage src="/images/back_button.png" alt="Start" />
                </StartButton>
            </ButtonArea>
          </RightColumn>
        </Layout>
      </Section>
      
    </ResultHeroWrapper>
            <PlayAndTalkStatsSection      currentResultKey={`${result.firstType}-${result.secondType}`}/>
    </PageWrapper>
  );
}