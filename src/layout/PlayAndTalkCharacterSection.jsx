import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/textStyles";

const characters = [
  {
    name: "Builder",
    tagline: "없으면 직접 만드는",
    description: "손에 잡히는 해결책을 만들고 직접 해보며 답을 찾는 타입",
    image: "/images/maker.png",
  },
  {
    name: "Explorer",
    tagline: "끝까지 파고드는",
    description: "단서와 맥락을 살피며 문제의 구조를 파악하는 타입",
    image: "/images/explorer.png",
  },
  {
    name: "Collaborator",
    tagline: "함께 해내는",
    description: "사람들과 의견을 나누며 더 나은 방향을 만드는 타입",
    image: "/images/collaborator.png",
  },
  {
    name: "Pioneer",
    tagline: "먼저 뛰어드는",
    description: "새로운 가능성을 향해 빠르게 움직이는 타입",
    image: "/images/pioneer.png",
  },
];

const SectionWrapper = styled.section`
  width: 100%;
  background: ${colors.white};
  padding: 70px 60px 90px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 60px 30px 70px;
  }
`;

const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 32px;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CharacterCard = styled.article`
  padding: 0px 8px 16px 4px;
  border-radius: 20px;
  background: ${colors.white};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }
    transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

`;

const CharacterImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 16px;
  user-select: none;
  -webkit-user-drag: none;
`;

const CharacterName = styled.h3`
  margin: 0 0 0px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.llg};
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.text};
  letter-spacing: -0.02em;
`;

const Tagline = styled.p`
  margin: 2px 0 2px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.bold};
  color: ${colors.primary};
  letter-spacing: -0.02em;
`;

const CardDescription = styled.p`
  margin: 0;
  font-family: ${fonts.family.body};
  font-size: ${fonts.size.sm};
  color: ${colors.textLightMuted};
  line-height: 1.3;
  padding: 0px 16px;
  letter-spacing: -0.04em;
  text-align: left; 
`;

export default function PlayAndTalkCharacterSection() {
  return (
    <SectionWrapper>
      <SectionInner>
        <Header>
          <Title>어떤 탐험가를 만나게 될까요?</Title>
          <Description>
            6개의 상황을 지나면 나와 가장 닮은 탐험 캐릭터를 만날 수 있어요. < br />
            결과에서는 나와 닮은 캐릭터뿐 아니라, 잘 맞을 수 있는 진로 방향과 관심을 가져볼 만한 HCI 연구 분야까지 함께 추천해드립니다.
          </Description>
        </Header>

        <CardGrid>
          {characters.map((character) => (
            <CharacterCard key={character.name}>
              <CharacterImage src={character.image} alt={character.name} />
              <CharacterName>{character.name}</CharacterName>
              <Tagline>{character.tagline}</Tagline>
              <CardDescription>{character.description}</CardDescription>
            </CharacterCard>
          ))}
        </CardGrid>
      </SectionInner>
    </SectionWrapper>
  );
}