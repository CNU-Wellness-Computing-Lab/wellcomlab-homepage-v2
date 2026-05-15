import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/textStyles";
import usePlayAndTalkStats from "../hooks/usePlayAndTalkStats";

const TYPE_IMAGES = [
  "/images/maker.png",
  "/images/explorer.png",
  "/images/collaborator.png",
  "/images/pioneer.png",
];

const SectionWrapper = styled.section`
  width: 100%;
  max-width: 100%;
  background: ${colors.background};
  padding: 40px 60px 40px;
  box-sizing: border-box;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 30px 30px 70px;
    border-radius: 24px;
  }
`;

const SectionInner = styled.div`
  max-width: 1400px;
  width: 100%;
  min-width: 0;
  margin: 0 auto;
  box-sizing: border-box;
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
  margin: 0;
  font-family: ${fonts.family.body};
  font-size: ${fonts.size.md};
  color: ${colors.textLightMuted};
  line-height: 1.5;
`;

const StatsGrid = styled.div`
  width: 100%;
  min-width: 0;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  overflow: hidden;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.article`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 24px;
  border-radius: 28px;
  background: ${colors.white};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 18px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.llg};
  font-weight: ${fonts.weight.bold};
  color: ${colors.text};
`;

const VerticalChart = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: end;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const TypeBarCard = styled.div`
  position: relative;
  height: 320px;
  border-radius: 20px;
  background: ${colors.white};
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    height: 240px;
    border-radius: 28px;
  }
`;

const BarFill = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  height: ${({ $percent }) => `${Math.max($percent, 8)}%`};
  background: linear-gradient(
    180deg,
    rgba(145, 194, 171, 0.75) 0%,
    hsla(160, 40%, 38%, 0.90) 100%
  );

  transition: height 0.3s ease;
`;

const TypeCharacter = styled.img`
  position: absolute;
  bottom: -6px;
  width: 180%;
  max-width: 210px;
  height: auto;
  object-fit: contain;
  z-index: 2;
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: 768px) {
    width: 150%;
    max-width: 170px;
  }
`;

const TypeInfo = styled.div`
  position: absolute;
  top: 18px;
  left: 12px;
  right: 12px;
  z-index: 3;
  text-align: center;
`;

const TypePercent = styled.div`
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.xl};
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.primary};
  line-height: 1;
`;

const BigNumber = styled.div`
  margin: 10px 0 8px;
  font-family: ${fonts.family.heading};
  font-size: clamp(42px, 6vw, 62px);
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.primary};
  line-height: 1;
`;

const SmallText = styled.p`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin: 0;
  font-family: ${fonts.family.body};
  font-size: ${fonts.size.md};
  color: ${colors.textLightMuted};
  line-height: 1.5;
`;

export default function PlayAndTalkStatsSection({ currentResultKey }) {
  const { stats, loading } = usePlayAndTalkStats(currentResultKey);

  if (loading) {
    return (
      <SectionWrapper>
        <SectionInner>
          <SmallText>탐험가 통계를 불러오는 중...</SmallText>
        </SectionInner>
      </SectionWrapper>
    );
  }

  if (stats.totalCount === 0) {
    return null;
  }

  return (
    <SectionWrapper>
      <SectionInner>
        <Header>
          <Title>탐험가 통계</Title>
          <Description>
            지금까지 기록을 남긴 탐험가들의 성향을 함께 살펴볼 수 있어요.
          </Description>
        </Header>
        <StatsGrid>

            <StatCard>
                <CardTitle>전체 유형 분포</CardTitle>

                <VerticalChart>
                    {stats.typeDistribution.map((item) => (
                    <TypeBarCard key={item.type}>
                        <BarFill $percent={item.percent} />

                        <TypeInfo>
                        <TypePercent>{item.percent}%</TypePercent>
                        {/* <TypeLabel>{item.name}</TypeLabel> */}
                        </TypeInfo>

                        <TypeCharacter
                        src={TYPE_IMAGES[item.type]}
                        alt={item.name}
                                />
                            </TypeBarCard>
                            ))}
                </VerticalChart>
            </StatCard>


            <StatCard>
                <CardTitle>당신과 같은 탐험가</CardTitle>
                <BigNumber>{stats.sameResultPercent}%</BigNumber>
                <SmallText>
                    탐험가라고 똑같은 탐험가가 아니죠.<br />
                전체 {stats.totalCount}명 중 {stats.sameResultCount}명이 당신과
                같은 유형이에요.
                <br /><br />
                탐험 기록을 남기면 명예의 전당에도 등록돼요.
                <br />
                상단의 [탐험가 등록하기] 버튼을 눌러 당신을 탐험가 명단에 올려보세요.
                </SmallText>
            </StatCard>

        </StatsGrid>

        
      </SectionInner>
    </SectionWrapper>
  );
}