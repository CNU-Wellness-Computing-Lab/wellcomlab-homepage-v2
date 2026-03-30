import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/textStyles";
import usePublications from "../hooks/usePublications";

const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundGray};
`;

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px 60px;
  height: 100%;
  background-color: ${colors.backgroundGray};
  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const PageTitle = styled.h1`
  margin: 0 0 56px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.hero};
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.text};
  line-height: 1;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    font-size: ${fonts.size.xl};
  }
`;

const PublicationList = styled.div`
  border-top: 1px solid #7d7d7d;
`;

const PublicationItem = styled.article`
  border-bottom: 1px solid #7d7d7d;
`;

const PublicationHeader = styled.div`
  width: 100%;
  background: none;
  border: none;
  padding: 22px 0 28px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  text-align: left;
  letter-spacing: -0.03em;
`;

const PublicationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PublicationMeta = styled.p`
  margin: 0;
  font-family: ${fonts.family.body};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.medium};
  color: ${colors.textLightMuted};
  line-height: 1.3;

  @media (max-width: 900px) {
    font-size:  ${fonts.size.sm};
    letter-spacing: -0.05em;
  }
`;

const PublicationTitle = styled.h2`
  margin: 0;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.llg};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.text};
  line-height: 1.35;

  @media (max-width: 900px) {
    font-size:  ${fonts.size.lg};
  }
`;

const PublicationAuthors = styled.p`
  margin: 0;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.regular};
  font-style: italic;
  color: ${colors.textLightMuted};
  line-height: 1.4;
  @media (max-width: 900px) {
    font-size:  ${fonts.size.sm};
    letter-spacing: -0.04em;
  }
`;

const EmptyText = styled.p`
  margin: 0;
  font-family: ${fonts.family.body};
  font-size: ${fonts.size.md};
  color: ${colors.textMuted};
`;

function formatMeta(item) {
  return `${item.venue} ${item.year} | ${item.category}`;
}

export default function PublicationsPage() {
  const { loading, filteredPublications } = usePublications();

  return (
    <SectionWrapper>
    <Section>
      <PageTitle>Publications</PageTitle>

      {loading ? (
        <EmptyText>Loading...</EmptyText>
      ) : filteredPublications.length === 0 ? (
        <EmptyText>No publications yet.</EmptyText>
      ) : (
        <PublicationList>
          {filteredPublications.map((item) => (
            <PublicationItem key={item.id}>
              <PublicationHeader type="button">
                <PublicationInfo>
                  <PublicationMeta>{formatMeta(item)}</PublicationMeta>

                  <PublicationTitle>{item.title}</PublicationTitle>

                  <PublicationAuthors>
                    {Array.isArray(item.authors)
                      ? item.authors.join(", ")
                      : item.authors}
                  </PublicationAuthors>
                </PublicationInfo>
              </PublicationHeader>
            </PublicationItem>
          ))}
        </PublicationList>
      )}
    </Section>
    </SectionWrapper>
  );
}