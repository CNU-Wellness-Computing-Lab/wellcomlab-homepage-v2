import styled from "styled-components";
import colors from "../styles/colors";
import useNews from "../hooks/useNews";
import NewsSidebar from "./NewsSidebar"; 
import NewsAccordionItem from "./NewsAccordionItem";

const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundGray};
`;

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 100px 60px;
  background-color: ${colors.backgroundGray};
  @media (max-width: 768px) {
    padding: 100px 30px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const NewsList = styled.div`
  border-top: 1px solid #7d7d7d;
`;

const EmptyText = styled.p`
  color: ${colors.text};
  margin-top: 20px;
`;

export default function NewsSection() {
  const {
    loading,
    openId,
    selectedYear,
    years,
    filteredNews,
    setSelectedYear,
    handleToggle,
  } = useNews();

  return (
    <SectionWrapper>
    <Section>
      <Layout>
        <NewsSidebar
          years={years}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
        />

        <div>
          {loading ? (
            <EmptyText>Loading...</EmptyText>
          ) : filteredNews.length === 0 ? (
            <EmptyText>No news yet.</EmptyText>
          ) : (
            <NewsList>
              {filteredNews.map((item) => (
                <NewsAccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={handleToggle}
                />
              ))}
            </NewsList>
          )}
        </div>
      </Layout>
    </Section>
    </SectionWrapper>
  );
}