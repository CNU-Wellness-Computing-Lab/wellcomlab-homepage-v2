import styled from "styled-components";
import fonts from "../styles/textStyles"; 
import colors from "../styles/colors";

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h2`
  margin: 0 0 8px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.hero};
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.text};
  line-height: 1;
`;

const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const FilterButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  cursor: pointer;
  font-size: ${fonts.size.llg};
  color: ${({ $active }) => ($active ? colors.text : colors.textMuted)};
  font-weight: ${({ $active }) =>
    $active ? fonts.weight.semibold : fonts.weight.regular};
  line-height: 1.2;

  @media (max-width: 900px) {
    font-size: 22px;
  }
`;

export default function NewsSidebar({
  years,
  selectedYear,
  onSelectYear,
}) {
  return (
    <Sidebar>
      <SectionTitle>News</SectionTitle>

      <FilterList>
        {years.map((year) => (
          <FilterButton
            key={year}
            type="button"
            $active={selectedYear === year}
            onClick={() => onSelectYear(year)}
          >
            {year}
          </FilterButton>
        ))}
      </FilterList>
    </Sidebar>
  );
}