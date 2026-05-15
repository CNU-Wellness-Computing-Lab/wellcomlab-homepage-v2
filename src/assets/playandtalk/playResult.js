export const TYPE = {
  MAKER: 0,
  EXPLORER: 1,
  COLLABORATOR: 2,
  PIONEER: 3,
};

export const CAREER = {
  DEVELOPMENT: "Development",
  MAKING: "Making",
  HACKATHON: "Hackathon",
  PROJECTS_BUILD: "Build Projects",

  RESEARCH: "Research",
  DATA_ANALYSIS: "Data Analysis",
  GRAD_SCHOOL: "Graduate School",
  HCI_AI: "HCI / AI",

  UX: "UX",
  PM: "Product Management",
  USER_RESEARCH: "User Research",

  STARTUPS: "Startups",
  EMERGING_TECH: "Emerging Tech",
};

export const HCI_DOMAIN = {
  PEOPLE_UX: "🧐 Understanding People & UX",
  AI_INTERACTION: "🤖 Computational Interaction & AI",
  INTERACTION_ENGINEERING: "📡 Interaction Techniques & Engineering",
  ACCESSIBILITY_HEALTH: "♿️ Accessibility, Aging & Health",
  SOCIAL_COMPUTING: "👥 Interaction Beyond the Individual",
  LEARNING_EDUCATION: "🎓 Learning, Education, and Families",
  GAMES_PLAY: "🕹️ Games and Play",
  PRIVACY_SECURITY: "🛡️ Privacy and Security",
};


export const playResults = {
// 메이커x탐구형
  "0-1": {
    title: "꼼지락 뚝딱이",
    mainType: TYPE.MAKER,
    subType: TYPE.EXPLORER,
    description: "당신은 직접 만들고 실험하면서 답을 찾는 사람입니다. 머릿속으로 오래 고민하기보다 일단 손에 잡히는 무언가를 만들고, 그 결과를 관찰하며 개선합니다. 새로운 아이디어를 현실로 구현하는 과정 자체를 즐기며, 논리와 호기심이 함께 움직이는 타입입니다."
    ,keywords: ["호기심", "일단해봐", "맨땅헤딩"], 
    careers: [
      CAREER.PROJECTS_BUILD,
      CAREER.HACKATHON,
      CAREER.RESEARCH,
    ],
    hciDomains: [
        {
            name: HCI_DOMAIN.INTERACTION_ENGINEERING,
            reason:
            "직접 손으로 만들어보고 작동 원리를 확인하는 걸 좋아하나요? 새로운 앱 기능, 센서 인터랙션, 제스처나 음성처럼 사람들이 기술과 상호작용하는 새로운 방식을 직접 구현해보는 분야입니다.",
        },
        {
            name: HCI_DOMAIN.AI_INTERACTION,
            reason:
            "AI를 그냥 사용하는 것보다 ‘이 AI가 왜 이렇게 행동하지?’, ‘사람이랑 더 잘 협력하려면 어떻게 해야 하지?’를 궁금해하는 타입이라면 잘 맞아요. AI와 사람이 자연스럽게 협력하는 경험을 설계하는 분야입니다.",
        },
    ],
    image: "/images/results/0_1.png",
  },
//   메이커 × 협업형
  "0-2": {
    title: "친근한 뚝딱이",
    mainType: TYPE.MAKER,
    subType: TYPE.COLLABORATOR,
    description: 
    "당신은 혼자 만드는 것보다 사람들과 함께 아이디어를 현실로 바꾸는 데 강점을 가진 사람입니다. 다른 사람의 의견을 듣고 조율하면서 더 나은 결과를 만드는 과정에서 에너지를 얻습니다. 기술이나 창작을 통해 사람들에게 실제로 도움이 되는 무언가를 만드는 일을 좋아합니다"
    ,keywords: ["센스있는", "분위기메이커", "재밌겠다"], 
    careers: [
        CAREER.MAKING, 
        CAREER.UX, 
        CAREER.PM
    ],
    hciDomains: [
        {
            name: HCI_DOMAIN.PEOPLE_UX,
            reason:
            "무언가를 만들 때 ‘이걸 사람들이 어떻게 느낄까?’를 자연스럽게 떠올리는 타입이에요. 사용자의 행동, 불편함, 감정을 이해하고 더 좋은 경험을 설계하는 UX 분야와 잘 맞습니다.",
        },
        {
            name: HCI_DOMAIN.LEARNING_EDUCATION,
            reason:
            "사람들이 더 쉽게 이해하고 성장할 수 있도록 돕는 경험을 만드는 데 잘 맞아요. 교육 앱, 학습 서비스, 코칭 시스템처럼 사람의 변화를 만드는 인터랙션을 설계하는 분야입니다.",
        },
    ],
    image: "/images/results/0_2.png",
  },
  //   메이커 × 개척형
  "0-3": {
    title: "요리조리 뚝딱이",
    mainType: TYPE.MAKER,
    subType: TYPE.PIONEER,
    description: 
    "당신은 새로운 것을 만드는 데서 끝나지 않고, 아무도 시도하지 않은 방식으로 문제를 해결하고 싶어 하는 사람입니다. 안정적인 길보다 직접 길을 만드는 쪽에 더 끌립니다. 아이디어를 빠르게 실행으로 옮기며, 도전적인 환경에서 더 크게 성장하는 타입입니다."
    ,keywords: ["장인정신", "재밌겠다", "가보자고"], 
    careers: [
        CAREER.MAKING,
        CAREER.STARTUPS,
        CAREER.HACKATHON,
    ],
    hciDomains: [
        {
            name: HCI_DOMAIN.INTERACTION_ENGINEERING,
            reason:
            "아이디어를 ‘이거 진짜 만들어볼까?’로 바로 넘어가는 편인가요? 새로운 버튼 방식, 센서 인터랙션, 음성 인터페이스, 제스처 조작처럼 사람들이 기술과 직접 상호작용하는 방식을 실제로 구현하고 실험하는 분야와 잘 맞습니다. 예를 들어 스마트워치로 새로운 건강 인터랙션을 만들거나, 색다른 입력 방식을 가진 앱이나 디바이스를 직접 만들어보는 연구가 여기에 해당합니다.",
        },
        {
            name: HCI_DOMAIN.GAMES_PLAY,
            reason:
            "‘재미있고 새로운 경험’을 만드는 데 더 흥미가 있나요? 사람들이 더 몰입하고, 더 즐겁게 참여하도록 만드는 게임 인터페이스나 체험형 서비스와 잘 맞습니다. 예를 들어 운동을 게임처럼 즐기게 만드는 서비스, 친구들과 함께 참여하는 인터랙티브 경험, 혹은 새로운 방식의 플레이를 만드는 프로젝트가 있습니다",
        },
        ],
    image: "/images/results/0_3.png",
  },

  // 탐구형 x 메이커
  "1-0": {
    title: "뚝딱뚝딱 탐험가",
    mainType: TYPE.EXPLORER,
    subType: TYPE.MAKER,
    description: 
    "당신은 왜 그런지 이해한 뒤 직접 구현해보는 사람입니다. 현상을 그냥 지나치지 않고 구조를 파악하려 하며, 배운 것을 실제 결과물로 연결하는 데 강합니다. 탐구와 실행 사이의 균형이 뛰어나며, 깊이 있게 파고드는 성향이 있습니다."
    ,keywords: ["호기심", "왜?", "팩트폭행"], 
    careers: [
        CAREER.RESEARCH,
        CAREER.DATA_ANALYSIS,
        CAREER.HCI_AI
    ],
    hciDomains: [
        {
            name: HCI_DOMAIN.AI_INTERACTION,
            reason:
            "기술을 그냥 사용하는 것보다 ‘이게 왜 이렇게 동작하지?’를 먼저 궁금해하나요? 특히 AI처럼 복잡한 시스템이 사람과 어떻게 상호작용해야 하는지, 왜 사람은 AI를 믿거나 의심하는지 탐구하는 분야와 잘 맞습니다. 예를 들어 AI 추천 시스템이 사람의 선택에 어떤 영향을 주는지, 챗봇은 어떤 방식으로 말해야 더 신뢰를 얻는지 연구하는 프로젝트가 여기에 해당합니다.",
        },
        {
            name: HCI_DOMAIN.INTERACTION_ENGINEERING,
            reason:
            "단순히 아이디어를 생각하는 데서 끝나는 게 아니라, 이해한 내용을 실제로 만들어보며 검증하고 싶으신가요? 새로운 인터페이스나 시스템을 직접 구현하면서 ‘진짜 잘 작동하는지’ 실험해보는 분야와 잘 맞습니다. 예를 들어 새로운 입력 방식의 앱을 만들거나, 센서 데이터를 활용해 사람과 상호작용하는 시스템을 직접 개발하는 프로젝트가 잘 맞을 수 있습니다.",
        },
        ],
    image: "/images/results/1_0.png",
  },
  // 탐구형 x 협업
  "1-2": {
    title: "도란도란 탐험가",
    mainType: TYPE.EXPLORER,
    subType: TYPE.COLLABORATOR,
    description: 
    "당신은 사람과 아이디어 사이의 연결점을 발견하는 데 능한 사람입니다. 혼자 깊게 생각하는 것도 좋아하지만, 다른 사람과 대화하면서 새로운 통찰을 얻는 과정도 즐깁니다. 복잡한 문제를 이해하고 이를 사람들에게 이해하기 쉽게 풀어내는 데 강합니다."
    ,keywords: ["분위기메이커", "호기심", "든든한"], 
    careers: [
        CAREER.HCI_AI, 
        CAREER.USER_RESEARCH, 
        CAREER.UX
     ],
     hciDomains: [
        {
            name: HCI_DOMAIN.PEOPLE_UX,
            reason:
            "기술 그 자체보다 ‘사람이 왜 이렇게 행동할까?’를 더 궁금해하는 편인가요? 사용자가 어디서 불편함을 느끼는지, 어떤 순간에 헷갈리는지, 무엇이 더 좋은 경험을 만드는지를 이해하는 UX 분야와 잘 맞습니다. 예를 들어 앱 사용자를 인터뷰하거나, 사람들이 어떤 화면에서 이탈하는지 분석해서 더 좋은 서비스를 설계하는 일이 여기에 해당합니다.",
        },
        {
            name: HCI_DOMAIN.SOCIAL_COMPUTING,
            reason:
            "혼자 생각하는 것도 좋아하지만, 사람들과 대화하고 다양한 관점을 연결하면서 더 좋은 아이디어를 만들 수도 있죠. 개인 한 명의 경험보다 팀, 커뮤니티, 온라인 소통처럼 사람들 사이의 상호작용을 다루는 분야입니다. 예를 들어 사람들이 온라인에서 어떻게 협업하는지, AI와 여러 사람이 함께 의사결정을 하면 어떤 일이 생기는지를 연구하는 프로젝트가 잘 맞을 수 있습니다.",
        },
        ],
    image: "/images/results/1_2.png",
  },
  // 탐구형 x 개척
  "1-3": {
    title: "반짝반짝 탐험가",
    mainType: TYPE.EXPLORER,
    subType: TYPE.PIONEER,
    description: 
    `당신은 답이 없는 문제를 마주할수록 더 흥미를 느끼는 사람입니다. 
    익숙한 길보다 새로운 질문과 미지의 가능성을 탐색하는 데 끌립니다. 기존 방식을 그대로 따르기보다 스스로 탐색하며 새로운 관점을 만들어내는 타입입니다.`
    ,keywords: ["호기심", "왜?", "아이디어뱅크"],
    careers: [
        CAREER.EMERGING_TECH,
        CAREER.RESEARCH,
        CAREER.HCI_AI
    ],
    hciDomains: [
  {
    name: HCI_DOMAIN.AI_INTERACTION,
    reason:
    `이미 정리된 답을 따라가기보다, 새로운 기술이 사람에게 어떤 영향을 줄지 먼저 궁금해하는 편이신가요? 
    특히 AI처럼 빠르게 변하는 기술은 아직 정답이 없는 질문이 많기 때문에 잘 맞습니다. 예를 들어 사람들이 AI를 언제 믿게 되는지, AI가 사람의 판단을 어떻게 바꾸는지, 여러 AI가 동시에 조언할 때 사람은 어떻게 결정하는지를 탐구하는 연구가 여기에 해당합니다.`,
  },
  {
    name: HCI_DOMAIN.PRIVACY_SECURITY,
    reason:
      `새로운 기술이 등장하면 편리함만 보는 게 아니라 ‘이거 진짜 괜찮을까?’라는 질문도 던지는 타입인가요? 
      개인정보, 보안, AI의 신뢰 문제처럼 아직 사회적으로 답이 완전히 정리되지 않은 주제를 탐구하는 분야와 잘 맞습니다. 예를 들어 사람들이 보안 경고를 왜 무시하는지, AI 서비스에 개인정보를 어디까지 공유하는지, 더 안전한 사용자 경험은 어떻게 설계할 수 있는지를 연구하는 프로젝트가 잘 맞을 수 있습니다.`,
  },
],
    image: "/images/results/1_3.png",
  },

  // 협업형 x 메이커
  "2-0": {
    title: "도란도란 해결사",
    mainType: TYPE.COLLABORATOR,
    subType: TYPE.MAKER,
    description: 
    "당신은 사람들의 필요를 이해하고, 그것을 실제 해결책으로 바꾸는 데 강한 사람입니다. 협업 속에서 아이디어를 발전시키며, 단순히 만드는 것이 아니라 ‘누구를 위해 만드는가’를 중요하게 생각합니다. 공감과 실행력이 함께 움직이는 타입입니다."
    ,keywords: ["분위기메이커", "센스좋은", "트렌드"], 
    careers: [
        CAREER.UX,
        CAREER.PM,
        CAREER.PROJECTS_BUILD,
    ],
    hciDomains: [
        {
            name: HCI_DOMAIN.PEOPLE_UX,
            reason:
            "무언가를 만들 때 ‘이 기능 멋있다’보다 ‘사람들이 이걸 편하게 쓸 수 있을까?’를 먼저 생각하는 편이신가요? 사용자가 어디서 불편해하는지, 무엇을 필요로 하는지 이해하고 그에 맞는 경험을 설계하는 UX 분야와 잘 맞습니다. 예를 들어 앱 화면을 더 직관적으로 바꾸거나, 사람들이 어떤 순간에 버튼을 못 찾는지 관찰해서 더 쓰기 쉬운 서비스를 만드는 프로젝트가 여기에 해당합니다.",
        },
        {
            name: HCI_DOMAIN.ACCESSIBILITY_HEALTH,
            reason:
            "사람들의 실제 문제를 해결하는 데 관심이 많기 때문에, 특히 도움이 꼭 필요한 사람들을 위한 기술과 잘 맞습니다. 고령자, 장애인, 환자처럼 기존 기술을 사용하기 어려운 사람들을 위해 더 쉽고 편한 경험을 설계하는 분야예요. 예를 들어 어르신도 쉽게 사용할 수 있는 건강관리 앱을 만들거나, 환자의 불편함을 줄여주는 디지털 헬스케어 서비스를 설계하는 프로젝트가 잘 맞을 수 있습니다.",
        },
        ],
    image: "/images/results/2_0.png",
  },
  // 협업형 x 탐구형
  "2-1": {
    title: "영차영차 해결사",
    mainType: TYPE.COLLABORATOR,
    subType: TYPE.EXPLORER,
    description: 
    "당신은 사람들과의 대화와 협업 속에서 새로운 아이디어와 통찰을 발견하는 사람입니다. 다양한 관점을 자연스럽게 연결하고, 복잡한 문제 속에서도 핵심을 빠르게 파악합니다. 사람을 이해하는 공감력과 구조를 읽는 분석력이 함께 움직이는 타입입니다.",    
    keywords: ["분위기메이커", "호기심", "느낌좋은"], 
    careers: [
        CAREER.UX,
        CAREER.USER_RESEARCH,
        CAREER.RESEARCH,
    ],
    hciDomains: [
        {
            name: HCI_DOMAIN.SOCIAL_COMPUTING,
            reason:
            "사람들 사이에서 일어나는 상호작용에 흥미를 느끼시나요? 누가 어떤 말을 하고, 어떻게 의견이 모이고, 왜 협업이 잘되거나 꼬이는지를 자연스럽게 관찰하는 타입이라면 사람들의 소통과 협업을 다루는 분야와 잘 맞습니다. 예를 들어 온라인 커뮤니티에서 사람들이 어떻게 의견을 나누는지, 여러 사람이 AI와 함께 의사결정을 하면 어떤 변화가 생기는지 연구하는 프로젝트가 여기에 해당합니다.",
        },
        {
            name: HCI_DOMAIN.PEOPLE_UX,
            reason:
            "사람들의 행동을 그냥 지나치지 않고 ‘왜 저렇게 행동했지?’를 궁금해하는 성향이 강하다면 UX 분야와도 잘 맞습니다. 사용자의 감정, 행동 패턴, 불편함을 이해하고 더 좋은 경험으로 바꾸는 역할이에요. 예를 들어 앱 사용자를 인터뷰해서 문제점을 찾거나, 사람들이 어떤 기능에서 자주 헷갈리는지 분석해 더 직관적인 서비스를 만드는 프로젝트가 잘 맞을 수 있습니다.",
        },
    ],
    image: "/images/results/2_1.png",
  },
  // 협업형 x 개척형
  "2-3": {
    title: "옹기종기 해결사",
    mainType: TYPE.COLLABORATOR,
    subType: TYPE.PIONEER,
    description: 
    "당신은 사람들과 함께 새로운 방향을 만들어가는 데 강한 사람입니다. 혼자 앞서가기보다 주변 사람들을 설득하고 함께 움직이며 변화를 만들어냅니다. 리더십과 추진력이 자연스럽게 나타나는 타입입니다."
    ,keywords: ["분위기메이커", "가보자고", "트렌드"], 
    careers: [
        CAREER.PM,
        CAREER.STARTUPS,
        CAREER.HACKATHON
    ],
    hciDomains: [
        {
            name: HCI_DOMAIN.SOCIAL_COMPUTING,
            reason:
            "사람들을 연결하고 함께 움직이는 것에 흥미가 있나요? 팀워크, 커뮤니티, 협업처럼 여러 사람이 함께 상호작용하는 환경을 설계하는 분야와 잘 맞습니다. 예를 들어 사람들이 더 잘 협업할 수 있는 플랫폼을 만들거나, 온라인 커뮤니티에서 어떻게 참여와 소통이 활발해지는지 연구하는 프로젝트가 여기에 해당합니다.",
        },
        {
            name: HCI_DOMAIN.LEARNING_EDUCATION,
            reason:
            "사람들의 참여를 끌어내고 함께 성장하는 분위기를 만드는 분야도 있습니다. 교육, 코칭, 팀 기반 학습처럼 사람들이 함께 배우고 동기부여를 얻는 경험을 설계합니다. 예를 들어 팀 프로젝트를 더 재미있고 효율적으로 만드는 학습 도구를 만들거나, 사람들이 꾸준히 참여하게 만드는 교육 서비스를 설계하는 프로젝트가 잘 맞을 수 있습니다.",
        },
        ],
    image: "/images/results/2_3.png",
  },

  // 개척형 x 메이커
  "3-0": {
    title: "용감한 탐험가",
    mainType: TYPE.PIONEER,
    subType: TYPE.MAKER,
    description: 
    `당신은 아이디어를 떠올리는 데서 멈추지 않고 바로 움직이는 사람입니다.
    새로운 시도를 두려워하지 않으며, 직접 부딪히며 배우는 스타일입니다.
    빠른 실행과 실험을 통해 자신만의 길을 만들어갑니다.`
    ,keywords: ["가보자고", "맨땅헤딩", "행동대장"], 
    careers: [
        CAREER.STARTUPS,
        CAREER.HACKATHON,
        CAREER.PROJECTS_BUILD,
    ],
    hciDomains: [
        {
            name: HCI_DOMAIN.GAMES_PLAY,
            reason:
            `정답이 딱 정해진 문제보다 직접 부딪히고 실험하면서 몰입할 수 있는 경험에 더 끌리시는가요? 
             게임, 인터랙티브 콘텐츠, 게이미피케이션처럼 사람들이 재미있게 참여하고 도전하게 만드는 분야와 잘 맞습니다. 
             예를 들어 운동을 게임처럼 만들거나, 사람들이 더 즐겁게 참여하는 서비스 경험을 설계하는 프로젝트가 잘 맞을 수 있습니다. `,
        },
        {
            name: HCI_DOMAIN.INTERACTION_ENGINEERING,
            reason:
             `직접 시스템을 구현하고 새로운 인터랙션을 실험하는 분야입니다. 
             버튼, 센서, 음성, 제스처처럼 사람들이 기술을 조작하는 새로운 방식을 직접 만들어보는 영역이에요. 
             새로운 디바이스 인터페이스를 만들거나, 색다른 입력 방식을 가진 프로토타입을 빠르게 구현하는 프로젝트가 여기에 해당합니다. `,
        },
        ],
    image: "/images/results/3_0.png",
  },
   // 개척형 x 탐구형
  "3-1": {
    title: "미스터리 탐험가",
    mainType: TYPE.PIONEER,
    subType: TYPE.EXPLORER,
    description: 
    "당신은 새로운 환경에서도 방향을 빠르게 읽어내는 사람입니다. 무작정 돌진하기보다 정보를 모으고 구조를 이해한 뒤 전략적으로 움직입니다. 도전적이면서도 사고가 깊은 타입입니다."
    ,keywords: ["호기심", "가보자고", "트렌드"], 
    careers: [
        CAREER.HACKATHON,
        CAREER.RESEARCH,
        CAREER.DATA_ANALYSIS,
    ],
    hciDomains: [
        {
            name: HCI_DOMAIN.AI_INTERACTION,
            reason:
            "단순히 AI를 써보는 것보다 ‘이게 사람한테 어떤 영향을 줄까?’, ‘어떻게 설계해야 더 잘 협력할까?’를 고민하는 타입이라면 AI와 인간의 상호작용을 다루는 분야와 잘 맞습니다. 예를 들어 AI 추천이 사람의 선택을 어떻게 바꾸는지, 챗봇은 어떤 방식으로 설명해야 더 신뢰를 얻는지 연구하는 프로젝트가 여기에 해당합니다.",
        },
        {
            name: HCI_DOMAIN.PRIVACY_SECURITY,
            reason:
            "새로운 기술을 좋아하지만 동시에 ‘이거 위험한 부분은 없을까?’까지 생각하시나요? 편리함만 보는 게 아니라 시스템의 구조와 숨은 리스크까지 읽으려는 성향이라면 보안과 프라이버시 분야와 잘 맞습니다. 예를 들어 사람들이 왜 개인정보 경고를 무시하는지, 어떤 보안 인터페이스가 더 이해하기 쉬운지, AI 서비스에서 신뢰와 안전을 어떻게 설계할지 고민하는 프로젝트가 잘 맞을 수 있습니다.",
        },
        ],
    image: "/images/results/3_1.png",
  },
   // 개척형 x 협업
  "3-2": {
    title: "도란도란 탐험가",
    mainType: TYPE.PIONEER,
    subType: TYPE.COLLABORATOR,
    description: 
    "당신은 새로운 시작을 사람들과 함께 만들어가는 사람입니다. 변화를 주도하는 것을 즐기며, 혼자만의 성취보다 함께 성장하는 결과에 더 큰 의미를 둡니다. 주변을 움직이고 분위기를 바꾸는 힘이 있는 타입입니다."
    ,keywords: ["가보자고", "분위기메이커", "행동대장"], 
    careers: [
        CAREER.PM,
        CAREER.USER_RESEARCH,
    ],
    hciDomains: [
        {
            name: HCI_DOMAIN.SOCIAL_COMPUTING,
            reason:
            "사람들을 자연스럽게 모으고 함께 움직이게 만드는 것에 관심이 있나요? 개인 한 명의 경험보다 팀, 커뮤니티, 집단 안에서 어떤 상호작용이 일어나는지에 흥미가 있다면 협업과 소셜 경험을 다루는 분야와 잘 맞습니다. 예를 들어 사람들이 더 활발하게 소통하는 커뮤니티를 만들거나, 여러 사람이 함께 의사결정하고 협력하는 디지털 환경을 설계하는 프로젝트가 여기에 해당합니다.",
        },
        {
            name: HCI_DOMAIN.GAMES_PLAY,
            reason:
            "사람들이 재미를 느끼고 자발적으로 참여하게 만드는 분야입니다. 단순히 기능을 제공하는 것보다 사람들이 몰입하고 계속 참여하고 싶어지는 경험을 만듭니다. 예를 들어 팀원들이 더 적극적으로 참여하게 만드는 게임형 서비스, 함께 미션을 수행하는 인터랙티브 경험, 재미를 활용해 행동 변화를 유도하는 프로젝트 있습니다.",
        },
        ],
    image: "/images/results/3_2.png",
  },

}