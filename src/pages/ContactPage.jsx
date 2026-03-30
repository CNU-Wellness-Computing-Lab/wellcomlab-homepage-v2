import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/textStyles";

const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundGray};
`;

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 70px 60px 90px;
  height: 100%;

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
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.h1`
  margin: 0 0 28px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.hero};
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.text};
  line-height: 1.1;
  letter-spacing: -0.03em;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: ${fonts.size.xl};
  }
`;

const Address = styled.p`
  margin: 0 0 36px;
  max-width: 620px;
  font-family: ${fonts.family.body};
  font-size: 26px;
  font-weight: ${fonts.weight.regular};
  color: ${colors.text};
  line-height: 1.55;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 28px;
  }
`;

const MapButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 8px 26px;
  background-color: ${colors.black};
  color: ${colors.white};
  text-decoration: none;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.llg};
  font-weight: ${fonts.weight.bold};
  line-height: 1;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    font-size: ${fonts.size.lg};
    padding: 16px 22px;
  }
`;

const MapIcon = styled.img`
  width: 44px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const InfoCard = styled.div`
  margin-top: 28px;
  padding: 18px 20px;
  width: 100%;
  max-width: 620px;
  border: 1px solid #d7d7d7;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.35);

  @media (max-width: 768px) {
    margin-top: 24px;
    padding: 16px 18px;
  }
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const ParkingIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

const InfoTitle = styled.h2`
  margin: 0;
  font-family: ${fonts.family.heading};
  font-size: 24px;
  font-weight: ${fonts.weight.bold};
  color: ${colors.textLightMuted};
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const InfoText = styled.p`
  margin: 0 0 0 38px;
  font-family: ${fonts.family.body};
  font-size: 18px;
  color: ${colors.textLightMuted};
  line-height: 1.5;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    margin-left: 34px;
    font-size: 16px;
  }
`;

const MapImage = styled.img`
  width: 100%;
  max-width: 640px;
  height: auto;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: 1024px) {
    max-width: 560px;
  }
`;

export default function ContactPage() {
  return (
    <SectionWrapper>
      <Section>
        <Layout>
          <LeftColumn>
            <PageTitle>Location</PageTitle>

            <Address>
              Room 606, W2, 99 Daehak-ro, Yuseong-gu,
              <br />
              Daejeon, Republic of Korea (34134)
            </Address>

            <MapButton
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapIcon src="/icons/icon-map.png" alt="map icon" />
              Google Map
            </MapButton>

            <InfoCard>
              <InfoHeader>
                <ParkingIcon src="/icons/icon_parking.png" alt="parking icon" />
                <InfoTitle>Where is the parking lot?</InfoTitle>
              </InfoHeader>
              <InfoText>It’s located between W2 and W3.</InfoText>
            </InfoCard>
          </LeftColumn>

          <RightColumn>
            <MapImage src="/images/contact-map.png" alt="Campus map illustration" />
          </RightColumn>
        </Layout>
      </Section>
    </SectionWrapper>
  );
}