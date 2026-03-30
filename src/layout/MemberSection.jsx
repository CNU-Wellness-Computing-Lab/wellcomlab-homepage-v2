import { useState } from "react";
import styled from "styled-components";
import fonts from "../styles/textStyles";
import colors from "../styles/colors";

const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${({ $index }) =>
    $index % 2 === 0 ? colors.backgroundGray : colors.white};
`;

const SectionInner = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 60px 60px;
  @media (max-width: 768px) {
    padding: 30px 30px;
  }
`;


const SectionTitle = styled.h2`
  margin: 0 0 36px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.xl};
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.text};
  text-align: center;
  line-height: 1.3;

`;

const MemberList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 900px) {
    grid-template-columns: ${({ $isAlumni }) =>
      $isAlumni ? "1fr 1fr 1fr" : "1fr 1fr"};
  }
`;

const MemberCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 24px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 120px;

  }
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MemberName = styled.h3`
  margin: 0;
  letter-spacing: -0.02em;
  padding: 18px 0 4px 0;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.llg};
  font-weight: ${fonts.weight.bold};
  color: ${colors.text};
`;

const ResearchTitle = styled.p`
  margin: 0;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.lg};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.textLightMuted};
`;

const ResearchList = styled.ul`
  margin: 0;
  padding-left: 16px;
  color: ${colors.textLightMuted};
  font-size: ${fonts.size.md};
  line-height: 1.5;
`;

const IconRow = styled.div`
  display: flex;
  gap: 16px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }

  &:hover img {
    opacity: 1;
  }
`;

const CopyText = styled.span`
  font-size: 14px;
  color: ${colors.textLightMuted};
`;

/* Alumni 전용 */
const AlumniCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 0;

  align-items: center;  
  text-align: center;   
  justify-self: center;

`;

const AlumniName = styled.h3`
  margin: 0;
  letter-spacing: -0.02em;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.llg};
  font-weight: ${fonts.weight.bold};
  color: ${colors.text};
  line-height: 1.3;
`;

const AlumniOrg = styled.p`
  margin: 0;
  font-size: ${fonts.size.lg};
  color: ${colors.textLightMuted};
  font-weight: ${fonts.weight.bold};
  line-height: 1;
`;

const AlumniPosition = styled.p`
  margin: 0;
  font-size: ${fonts.size.md};
  color: ${colors.textLightMuted};
  line-height: 1;
`;

export default function MemberSection({ title, members, index }) {
  const [copiedId, setCopiedId] = useState(null);

  if (!members || members.length === 0) return null;

  const isAlumni = title === "Alumni";

  function copyEmail(email, id) {
    navigator.clipboard.writeText(email);
    setCopiedId(id);

    setTimeout(() => {
      setCopiedId(null);
    }, 1500);
  }

  return (
    <SectionWrapper $index={index}> 
    <SectionInner>
      <SectionTitle>{title}</SectionTitle>

      <MemberList $isAlumni={isAlumni}>
        {members.map((member) =>
          isAlumni ? (
            <AlumniCard key={member.id}>
              <AlumniName>{member.name}</AlumniName>
              {member.alumniInfo?.organization && (
                <AlumniOrg>{member.alumniInfo.organization}</AlumniOrg>
              )}
              {member.alumniInfo?.position && (
                <AlumniPosition>{member.alumniInfo.position}</AlumniPosition>
              )}
            </AlumniCard>
          ) : (
            <MemberCard key={member.id}>
              <ProfileImage
                src={member.profileUrl || "/members/default-profile.png"}
                alt={member.name}
                onError={(e) => {
                  e.target.src = "/members/default-profile.png";
                }}
              />

              <MemberInfo>
                <MemberName>{member.name}</MemberName>

                {Array.isArray(member.researchField) &&
                  member.researchField.length > 0 && (
                    <>
                      <ResearchTitle>Research Interests</ResearchTitle>
                      <ResearchList>
                        {member.researchField.map((field, i) => (
                          <li key={i}>{field}</li>
                        ))}
                      </ResearchList>
                    </>
                  )}

                <IconRow>
                  {member.email && (
                    <IconButton onClick={() => copyEmail(member.email, member.id)}>
                      <img src="/icons/icon_email.png" alt="email" />
                    </IconButton>
                  )}

                  {member.googleScholar && (
                    <IconButton
                      as="a"
                      href={member.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/icons/icon_gs.png" alt="google scholar" />
                    </IconButton>
                  )}

                  {copiedId === member.id && <CopyText>Copied!</CopyText>}
                </IconRow>
              </MemberInfo>
            </MemberCard>
          )
        )}
      </MemberList>
      </SectionInner>
    </SectionWrapper>
  );
}