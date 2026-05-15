const playQuestions = [
  {
    id: 1,
    question: "미지의 섬에 표류했습니다. 가장 먼저 무엇을 할까요?",
    options: [
      { id: "a", text: "높은 곳에 올라가 지형을 살핀다", type: [0, 1, 0, 1] },
      { id: "b", text: "다른 생존자가 있는지 소리쳐 찾는다", type: [0, 0, 1, 0] },
      { id: "c", text: "쓸 만한 물건들을 수집하고 분류한다", type: [1, 1, 0, 0] },
    ],
    image: "/images/q1_image.png"
  },
  {
    id: 2,
    question: "숲이 깊어 길을 잃었습니다.",
    options: [
      { id: "a", text: "감을 믿고 한 방향을 정해 나아간다", type: [1, 0, 0, 1]},
      { id: "b", text: "잠시 멈춰 방향을 가늠한다", type: [0, 1, 1, 0] },
    ],
    image: "/images/q2_image.png"
  },
  {
    id: 3,
    question: "떨어져 있는 낡은 지도를 발견했습니다.",
    options: [
      { id: "a", text: "진짜일까? 주변 지형과 비교해본다", type: [0, 2, 0, 1]},
      { id: "b", text: "누가 그렸을까? 지도의 필체나 종이 상태를 훑어본다", type: [0, 2, 1, 0] },
      { id: "c", text: "못 믿겠다. 누군가 파놓은 함정일지도 모른다", type: [0, 1, -2, 0] },
    ],
    image: "/images/q3_image.png"
  },
  {
    id: 4,
    question: "정체불명의 생명체를 발견했습니다. 가장 먼저 드는 생각은?",
    options: [
      { id: "a", text: "위험한 존재일까? 피하자", type: [1, -1, -2, -1]},
      { id: "b", text: "어떻게 소통할 수 있을까?", type: [0, 2, 3, 1] },
      { id: "c", text: "잊기 전에 특징을 그려본다", type: [2, 1, 0, 0] },
      { id: "d", text: "길을 알려줄지도 몰라, 따라가자", type: [0, 1, 0, 1] },
    ],
    image: "/images/q4_image.png"
  },
  {
    id: 5,
    question: "식량이 거의 떨어졌습니다.",
    options: [
      { id: "a", text: "남은 식량을 계산하고 배분한다", type: [0, 1, 1, 0]},
      { id: "b", text: "이것도 먹을 수 있을까? 미지의 생물을 먹어본다", type: [0, 1, 1, 1] },
      { id: "c", text: "음식을 찾으러 다시 떠난다", type: [1, 0, 0, 1] },
    ],
    image: "/images/q5_image.png"
  },
  {
    id: 6,
    question: "결국 무인도를 탈출했습니다. 가장 뿌듯할 순간은?",
    options: [
      { id: "a", text: "내가 만든 도구로 모두 살아남은 것", type: [3, 0, 0, 0]},
      { id: "b", text: "섬의 비밀을 끝내 밝혀낸 것", type: [0, 3, 0, 0] },
      { id: "c", text: "탐험대 다 같이 생존한 것", type: [0, 0, 3, 0] },
      { id: "d", text: "아무도 시도하지 않은 탈출 방법을 성공시킨 것", type: [0, 0, 0, 3] },
    ],
    image: "/images/q6_image.png"
  },
];

export default playQuestions;