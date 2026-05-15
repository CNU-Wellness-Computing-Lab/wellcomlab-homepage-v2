import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/textStyles";
import usePlayAndTalkSubmissions from "../hooks/usePlayAndTalkSubmissions";
import { playResults } from "../assets/playandtalk/playResult";

const SectionWrapper = styled.section`
  width: 100%;
  background: ${colors.backgroundGray};
  padding: 40px 60px 90px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 30px 30px 70px;
  }
`;

const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 28px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.xl};
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.text};
  letter-spacing: -0.04em;
`;

const Description = styled.p`
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.medium};
  color: #777;
  line-height: 1.45;
  padding-left: 6px;
  letter-spacing: -0.04em;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
    @media (max-width: 468px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const BadgeCard = styled.article`
  padding: 18px 14px;
  border-radius: 24px;
  background: ${colors.white};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BadgeImage = styled.img`
  width: 92px;
  height: 92px;
  object-fit: contain;
  margin-bottom: 10px;
  user-select: none;
  -webkit-user-drag: none;
`;

const Nickname = styled.h3`
  margin: 0px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.lg};
  font-weight: ${fonts.weight.bold};
  color: ${colors.text};
  letter-spacing: -0.1em;
`;

const ResultName = styled.p`
  margin: 0 0 0px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.primary};
  letter-spacing: -0.1em;
`;

const Meta = styled.p`
  margin: 0;
  font-family: ${fonts.family.body};
  font-size: ${fonts.size.sm};
  color: ${colors.textLightMuted};
`;

const EmptyText = styled.p`
  font-family: ${fonts.family.body};
  font-size: ${fonts.size.md};
  color: ${colors.textLightMuted};
`;

export default function PlayAndTalkHallOfFameSection() {
  const { submissions, loading } = usePlayAndTalkSubmissions(12);

  return (
    <SectionWrapper>
      <SectionInner>
        <Header>
          <Title>탐험자 명예의 전당</Title>
          <Description>
            탐험 기록을 남긴 참여자들의 배지를 모아볼 수 있어요.
          </Description>
        </Header>

        {loading && <EmptyText>탐험 기록을 불러오는 중...</EmptyText>}

        {!loading && submissions.length === 0 && (
          <EmptyText>아직 등록된 탐험 기록이 없습니다.</EmptyText>
        )}

        {!loading && submissions.length > 0 && (
          <BadgeGrid>
            {submissions.map((submission) => {
              const resultContent = playResults[submission.resultKey];

              return (
                <BadgeCard key={submission.id}>
                    <BadgeImage
                        src={submission.resultImage}

                        alt={submission.resultTitle}
                    />

                    <Nickname>{submission.nickname}</Nickname>
                    <ResultName>{submission.resultTitle}</ResultName>
                    <Meta>{submission.grade}</Meta>
                    </BadgeCard>
              );
            })}
          </BadgeGrid>
        )}
      </SectionInner>
    </SectionWrapper>
  );
}