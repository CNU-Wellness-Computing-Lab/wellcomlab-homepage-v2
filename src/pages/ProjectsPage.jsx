import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/textStyles";
import useProjects from "../hooks/useProjects";

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

const ProjectList = styled.div`
  border-top: 1px solid #7d7d7d;
`;

const ProjectItem = styled.article`
  border-bottom: 1px solid #7d7d7d;
`;

const ProjectHeader = styled.div`
  width: 100%;
  padding: 24px 0 28px;
  display: flex;
  gap: 28px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 18px;
  }
`;

const Thumbnail = styled.img`
  width: 220px;
  height: 132px;
  border-radius: 16px;
  object-fit: cover;
  flex-shrink: 0;
  background: ${colors.white};

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
`;

const ProjectMeta = styled.p`
  margin: 0;
  font-family: ${fonts.family.body};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.medium};
  color: ${colors.textLightMuted};
  line-height: 1.3;

  @media (max-width: 900px) {
    font-size: ${fonts.size.sm};
    letter-spacing: -0.04em;
  }
`;

const ProjectTitle = styled.h2`
  margin: 0;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.llg};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.text};
  line-height: 1.35;
  letter-spacing: -0.02em;

  @media (max-width: 900px) {
    font-size: ${fonts.size.lg};
  }
`;

const ProjectDescription = styled.p`
  margin: 0;
  font-family: ${fonts.family.body};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.regular};
  color: ${colors.textLightMuted};
  line-height: 1.6;

  @media (max-width: 900px) {
    font-size: ${fonts.size.sm};
  }
`;

const EmptyText = styled.p`
  margin: 0;
  font-family: ${fonts.family.body};
  font-size: ${fonts.size.md};
  color: ${colors.textMuted};
`;

function formatMeta(project) {
  if (project.period) return project.period;
  if (project.year) return String(project.year);
  return "";
}

export default function ProjectsPage() {
  const { loading, projects } = useProjects();

  return (
    <SectionWrapper>
    <Section>
      <PageTitle>Projects</PageTitle>

      {loading ? (
        <EmptyText>Loading...</EmptyText>
      ) : projects.length === 0 ? (
        <EmptyText>No projects yet.</EmptyText>
      ) : (
        <ProjectList>
          {projects.map((project) => (
            <ProjectItem key={project.id}>
              <ProjectHeader>
                <Thumbnail
                  src={project.thumbnail || "/projects/default-thumbnail.png"}
                  alt={project.name}
                  onError={(e) => {
                    e.target.src = "/projects/default-thumbnail.png";
                  }}
                />

                <ProjectInfo>
                  {formatMeta(project) && (
                    <ProjectMeta>{formatMeta(project)}</ProjectMeta>
                  )}

                  <ProjectTitle>{project.name}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </ProjectInfo>
              </ProjectHeader>
            </ProjectItem>
          ))}
        </ProjectList>
      )}
    </Section>
    </SectionWrapper>
  );
}