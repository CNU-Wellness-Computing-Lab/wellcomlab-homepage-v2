import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/textStyles";

const FooterWrapper = styled.footer`
  width: 100%;
  background: linear-gradient(90deg, #104a3bff, #17342fff);
  color: ${colors.white};
`;

const FooterInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 28px 60px;

  display: flex;
  align-items: center;
  gap: 32px;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;   
    gap: 20px;
    padding: 24px 30px;
  }
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LogoImg = styled.img`
  height: 72px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.4);

  @media (max-width: 768px) {
    display: none;
  }
`;

const AddressGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AddressEn = styled.p`
  margin: 0;
  font-family: ${fonts.family.heading};
  font-size: 16px;
  font-weight: ${fonts.weight.medium};
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const AddressKr = styled.p`
  margin: 0;
  font-family: ${fonts.family.body};
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        {/* Left: Logos */}
        <LogoGroup>
          <LogoImg src="/images/wellcom_logo.png" alt="WellcomLab" />
          <LogoImg src="/images/cnu_logo.png" alt="CNU" />
        </LogoGroup>

        {/* Divider */}
        <Divider />

        {/* Right: Address */}
        <AddressGroup>
          <AddressEn>
            Room 606, W2, 99 Daehak-ro, Yuseong-gu,
            Daejeon, Republic of Korea (34134)
          </AddressEn>
          <AddressKr>
            대전광역시 유성구 대학로 99, 충남대학교 606호
          </AddressKr>
        </AddressGroup>
      </FooterInner>
    </FooterWrapper>
  );
}