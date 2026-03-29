import styled from "styled-components";
import fonts from "../styles/textStyles";
import colors from "../styles/colors";
import { formatDate } from "./Utils"; 

const NewsItem = styled.article`
  border-bottom: 1px solid #7d7d7d;
`;

const NewsHeader = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 18px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  text-align: left;
`;

const NewsTitle = styled.h3`
  margin: 0;
  font-size: ${fonts.size.llg};
  font-family: ${fonts.family.heading};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.text};
  line-height: 1.3;

  @media (max-width: 900px) {
    font-size: ${fonts.size.llg};
  }
`;

const ToggleIcon = styled.span`
  flex-shrink: 0;
  font-size: 40px;
  line-height: 1;
  font-weight: 300;
  color: ${colors.text};
  transition: all 0.2s ease;

  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

const NewsBody = styled.div`
  max-height: ${({ $open }) => ($open ? "500px" : "0")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    opacity 0.2s ease;
`;

const NewsBodyInner = styled.div`
  padding: 0 0 28px;
`;

const NewsDate = styled.p`
  margin: 0 0 12px;
  color: ${colors.textMuted};
`;

const NewsContent = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.4;
  color: ${colors.text};
  white-space: pre-line;

  @media (max-width: 900px) {
    font-size: 17px;
  }
`;

export default function NewsAccordionItem({
  item,
  isOpen,
  onToggle,
}) {
  return (
    <NewsItem>
      <NewsHeader
        type="button"
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
      >
        <NewsTitle>{item.title}</NewsTitle>
        <ToggleIcon $open={isOpen}>{isOpen ? "−" : "+"}</ToggleIcon>
      </NewsHeader>

      <NewsBody $open={isOpen}>
        <NewsBodyInner>
          <NewsDate>{formatDate(item.date)}</NewsDate>
          <NewsContent>{item.content}</NewsContent>
        </NewsBodyInner>
      </NewsBody>
    </NewsItem>
  );
}