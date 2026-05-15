import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/textStyles";
import playQuestions from "../assets/playandtalk/playQuestions";

const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${colors.backgroundGray};
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 60px 90px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0px 10px 60px;
  }
`;

const PageTitle = styled.h1`
  margin: 30px 0 16px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.hero};
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.text};
  line-height: 1.6;
  letter-spacing: -0.04em;

  @media (max-width: 768px) {
    font-size: ${fonts.size.xl};
    margin: 0px;
  }
`;

const Description = styled.p`
  margin: 0 0 10px;
  font-family: ${fonts.family.body};
  font-size: ${fonts.size.lg};
  color: ${colors.textLightMuted};
  line-height: 1;

  @media (max-width: 768px) {
    margin-bottom: 2px;
    font-size: ${fonts.size.md};
    font-weight: ${fonts.weight.medium};
    letter-spacing: -0.04em;
  }
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const QuestionCard = styled.article`
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 36px;
  align-items: center;
  padding: 32px;
  border-radius: 28px;
  background: ${colors.white};
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 16px 20px;
  }
`;

const QuestionImageFrame = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 18px;
  overflow: hidden;
  justify-self: center;
  background: ${colors.backgroundGray};

  @media (max-width: 900px) {
    height: 240px;
  }
`;

const QuestionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  display: block;
  user-select: none;
  -webkit-user-drag: none;
`;

const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionNumber = styled.p`
  margin: 0 0 1px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.bold};
  color: ${colors.textLightMuted};

  @media (max-width: 768px) {
    padding: 0px 10px;
    letter-spacing: -0.04em;
  }
`;

const QuestionText = styled.h2`
  margin: 0 0 14px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.xl};
  font-weight: ${fonts.weight.bold};
  color: ${colors.text};
  line-height: 1.35;
  letter-spacing: -0.03em;

  @media (max-width: 768px) {
    font-size: ${fonts.size.llg};
    padding: 0px 10px;
  }
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 16px 18px;
  border: 2px solid
    ${({ $selected }) => ($selected ? colors.text : "transparent")};
  border-radius: 18px;
  background: ${({ $selected }) =>
    $selected ? colors.text : colors.backgroundGray};
  color: ${({ $selected }) => ($selected ? colors.white : colors.text)};
  cursor: pointer;
  text-align: left;

  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.lg};
  font-weight: ${fonts.weight.semibold};
  line-height: 1.4;
  letter-spacing: -0.02em;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const SubmitButton = styled.button`
  padding: 18px 22px;
  border: none;
  border-radius: 999px;

  background: ${({ $progress, disabled }) =>
    disabled
      ? `linear-gradient(
          90deg,
          ${colors.text} 0%,
          ${colors.text} ${$progress}%,
          ${colors.textLightMuted} ${$progress}%,
          ${colors.textLightMuted} 100%
        )`
      : colors.text};

  color: ${colors.white};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.lg};
  font-weight: ${fonts.weight.bold};

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0px;
    font-size: ${fonts.size.llg};
    font-weight: ${fonts.weight.semibold};
  }
  
  transition:
    background 0.25s ease,
    transform 0.2s ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-2px)")};
  }
  
`;


function calculateScores(answers) {
  return Object.values(answers).reduce(
    (acc, selectedOption) => {
      selectedOption.type.forEach((score, index) => {
        acc[index] += score;
      });
      return acc;
    },
    [0, 0, 0, 0]
  );
}

function getTopTwoTypes(scores) {
  return scores
    .map((score, index) => ({ index, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
}

const StickyHeader = styled.div`
  position: sticky;
  top: 80px;
  z-index: 50;
  background-color: ${colors.backgroundGray};
  @media (max-width: 768px) {
    position: static;
    top: auto;
    padding-top: 16px;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  padding-bottom : 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProgressArea = styled.div`
  min-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MobileBottomBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  padding: 0px;
  background: ${colors.text};
  box-sizing: border-box;
`;

export default function PlayAndTalkQPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const answeredCount = Object.keys(answers).length;
  const progressPercent = (answeredCount / playQuestions.length) * 100;

  const isComplete = useMemo(() => {
    return Object.keys(answers).length === playQuestions.length;
  }, [answers]);

  const handleSelect = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmit = () => {
    if (!isComplete) return;

    const scores = calculateScores(answers);
    const topTwoTypes = getTopTwoTypes(scores);

    const answerHistory = playQuestions.map((question) => ({
      questionId: question.id,
      optionId: answers[question.id].id,
  }));

    const resultData = {
      scores,
      firstType: topTwoTypes[0].index,
      secondType: topTwoTypes[1].index,
      answerHistory,
    };

    localStorage.setItem("playAndTalkResult", JSON.stringify(resultData));
    navigate("/playandtalk/result");
  };

  return (
    <SectionWrapper>
      <Section>
        <StickyHeader>

        <HeaderTop>
        <HeaderText>
          <PageTitle>무인도 탐험 테스트</PageTitle>
          <Description>
            각 상황에서 가장 나다운 선택지를 골라주세요.
          </Description>
        </HeaderText>

        {!isMobile && (
          <ProgressArea>
            <SubmitButton
              type="button"
              disabled={!isComplete}
              $progress={progressPercent}
              onClick={handleSubmit}
            >
              결과 보러 가기 ({answeredCount}/{playQuestions.length})
            </SubmitButton>
          </ProgressArea>
        )}
      </HeaderTop>
      </StickyHeader>

        <QuestionList>
          {playQuestions.map((question, index) => {
            const selectedOption = answers[question.id];

            return (
              <QuestionCard key={question.id}>
                <QuestionImageFrame>
                  <QuestionImage src={question.image} alt="" />
                </QuestionImageFrame>

                <QuestionContent>
                  <QuestionNumber>
                    Question {index + 1} / {playQuestions.length}
                  </QuestionNumber>

                  <QuestionText>{question.question}</QuestionText>

                  <OptionList>
                    {question.options.map((option) => (
                      <OptionButton
                        key={option.id}
                        type="button"
                        $selected={selectedOption?.id === option.id}
                        onClick={() => handleSelect(question.id, option)}
                      >
                        {option.text}
                      </OptionButton>
                    ))}
                  </OptionList>
                </QuestionContent>
              </QuestionCard>
            );
          })}
          {isMobile && (
          <MobileBottomBar>
            <SubmitButton
              type="button"
              disabled={!isComplete}
              $progress={progressPercent}
              onClick={handleSubmit}
            >
              결과 보러 가기 ({answeredCount}/{playQuestions.length})
            </SubmitButton>
          </MobileBottomBar>
        )}
        
        </QuestionList>

      </Section>
    </SectionWrapper>
  );
}