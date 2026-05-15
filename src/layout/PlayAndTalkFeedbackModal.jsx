import { useState } from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/textStyles";

const nicknameAdjectives = [
  "용감한",  "느긋한",  "호기심 많은",  "야무진",  "파도 타는", "보물 찾는",  "반짝이는",  "엉뚱한",  "든든한",  "날쌘",  "차분한",  "씩씩한",
    "기세 좋은", "엉성한", "고독한", "전설의", "행운의", "행복한", "낮잠 자는", "달리는", "늙은", "배고픈", "외로운", "지친", "뱅글뱅글",
    "비밀스런", "소문의", 
];

const nicknameObjects = [
  "코코넛", "앵무새",
  "조개", "해적", "상어", 
  "나침반", "뗏목", "소라",
  "망고", "카누", "보물상자",
  "지도", "배구공", "도마뱀",
  "야자수", "원숭이", "바다거북",
  "돛단배", "해파리", 
  "망원경", "갈매기",
  "모닥불",
  "바나나",
];

function generateNickname() {
  const adjective =
    nicknameAdjectives[Math.floor(Math.random() * nicknameAdjectives.length)];
  const object =
    nicknameObjects[Math.floor(Math.random() * nicknameObjects.length)];
  return `${adjective} ${object}`;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.45);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
`;

const ModalCard = styled.div`
  width: 100%;
  max-width: 520px;
  padding: 32px;
  border-radius: 28px;
  background: ${colors.backgroundGray};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.22);
  box-sizing: border-box;
`;

const ModalTitle = styled.h2`
  margin: 0 0 8px;
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.xl};
  font-weight: ${fonts.weight.extrabold};
  color: ${colors.text};
  letter-spacing: -0.04em;
`;

const ModalDescription = styled.p`
  margin: 10px 0 24px;
  font-family: ${fonts.family.body};
  font-size: ${fonts.size.md};
  color: ${colors.textLightMuted};
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.bold};
  color: ${colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1.5px solid rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  background: ${colors.white};
  box-sizing: border-box;

  font-family: ${fonts.family.body};
  font-size: ${fonts.size.md};
  color: ${colors.text};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px 16px;
  border: 1.5px solid rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  background: ${colors.white};
  box-sizing: border-box;

  font-family: ${fonts.family.body};
  font-size: ${fonts.size.md};
  color: ${colors.text};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

const FeedbackGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const FeedbackOption = styled.button`
  padding: 13px 14px;
  border-radius: 16px;
  border: 1.5px solid
    ${({ $selected }) => ($selected ? colors.primary : "rgba(0, 0, 0, 0.1)")};
  background: ${({ $selected }) => ($selected ? colors.primary : colors.white)};
  color: ${({ $selected }) => ($selected ? colors.white : colors.text)};
  cursor: pointer;

  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.sm};
  font-weight: ${fonts.weight.semibold};

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 8px;
`;

const CancelButton = styled.button`
  padding: 13px 20px;
  border: none;
  border-radius: 999px;
  background: ${colors.white};
  color: ${colors.textLightMuted};
  cursor: pointer;

  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.bold};
`;

const SubmitButton = styled.button`
  padding: 13px 24px;
  border: none;
  border-radius: 999px;
  background: ${({ disabled }) => (disabled ? colors.textLightMuted : colors.text)};
  color: ${colors.white};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  font-family: ${fonts.family.heading};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.bold};
`;

const feedbackOptions = [
  "도움이 많이 됐어요",
  "재밌었어요",
  "그냥 그랬어요",
  "잘 모르겠어요",
];


export default function PlayAndTalkFeedbackModal({ isOpen, onClose, onSubmit }) {
  const [nickname, setNickname] = useState(() => generateNickname());
  const [grade, setGrade] = useState("");
  const [feedback, setFeedback] = useState("");

  if (!isOpen) return null;

  const canSubmit = nickname.trim() && grade && feedback;

  const resetForm = () => {
    setNickname(generateNickname());
    setGrade("");
    setFeedback("");
    };

    const handleClose = () => {
    resetForm();
    onClose();
    };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!canSubmit) return;

    onSubmit({
      nickname: nickname.trim(),
      grade,
      feedback,
    });
  };

  return (
    <Overlay onClick={handleClose}>
      <ModalCard onClick={(event) => event.stopPropagation()}>
        <ModalTitle>탐험 기록 남기기</ModalTitle>
        <ModalDescription>
          닉네임과 간단한 피드백을 남기면 탐험자 명예의 전당에 올라갑니다.
        </ModalDescription>

        <Form onSubmit={handleSubmit}>
          <FieldGroup>
            <Label htmlFor="nickname">이름을 적어주세요 (닉네임 가능)</Label>
            <Input
              id="nickname"
              type="text"
              placeholder="예: 씩씩한 바나나"
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="grade">학년을 선택해주세요</Label>
            <Select
              id="grade"
              value={grade}
              onChange={(event) => setGrade(event.target.value)}
            >
              <option value="">선택해주세요</option>
              <option value="1학년">1학년</option>
              <option value="2학년">2학년</option>
              <option value="3학년">3학년</option>
              <option value="4학년">4학년</option>
              <option value="대학원생">대학원생</option>
              <option value="기타">기타</option>
            </Select>
          </FieldGroup>

          <FieldGroup>
            <Label>탐험 어땠나요?</Label>
            <FeedbackGrid>
              {feedbackOptions.map((option) => (
                <FeedbackOption
                  key={option}
                  type="button"
                  $selected={feedback === option}
                  onClick={() => setFeedback(option)}
                >
                  {option}
                </FeedbackOption>
              ))}
            </FeedbackGrid>
          </FieldGroup>

          <ButtonRow>
            <CancelButton type="button" onClick={handleClose}>
              닫기
            </CancelButton>
            <SubmitButton type="submit" disabled={!canSubmit}>
              기록 남기기
            </SubmitButton>
          </ButtonRow>
        </Form>
      </ModalCard>
    </Overlay>
  );
}