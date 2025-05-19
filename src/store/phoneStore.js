import { create } from "zustand";

// create(() => ({}))
const usePhoneStore = create((set) => ({
  // 폰 정보 저장 이름과 폰번호 배열안에 객채로 저장 [{name:윤호,phoneNumber:01056432341}, ...]
  phoneNumberList: [
    { name: "문윤호", phoneNumber: "01023237948" },
    { name: "김관영", phoneNumber: "01023237948" },
    { name: "기영학", phoneNumber: "01023237948" },
    { name: "권기웅", phoneNumber: "01023237948" },
    { name: "이규섭", phoneNumber: "01023237948" },
  ],
  // 번호 보이기 아무것도 없으면 폰리스트 보이고 검색창에 같은거 있으면 보이고
  filteredList: [],
  getInitials: (text) => {
    const CHO = [
      "ㄱ",
      "ㄲ",
      "ㄴ",
      "ㄷ",
      "ㄸ",
      "ㄹ",
      "ㅁ",
      "ㅂ",
      "ㅃ",
      "ㅅ",
      "ㅆ",
      "ㅇ",
      "ㅈ",
      "ㅉ",
      "ㅊ",
      "ㅋ",
      "ㅌ",
      "ㅍ",
      "ㅎ",
    ];
    let result = "";
    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i) - 44032;
      if (code >= 0 && code <= 11171) {
        result += CHO[Math.floor(code / 588)];
      } else {
        result += text[i]; // 한글이 아니면 그대로
      }
    }
    return result;
  },
  // 검색 로직
  findNameList: (input) => {
    set((state) => {
      if (input.length === 0) return { filteredList: [] };
      const isChosungOnly = /^[ㄱ-ㅎ]+$/.test(input); // 초성만 있는지 검사
      // const inputInitial = state.getInitials(input); // 입력 초성
      // console.log(inputInitial, isChosungOnly);
      // 내가 하고싶은건 두번째 초성아닐때도 검색 예를들어 문ㅇ 할때 문ㅇ 검색하기
      const filtered = state.phoneNumberList.filter((person) => {
        // 이게 초성 있는지 확인해주는 문구
        // 연락처에 있는 이름 초성으로 다 뽑음
        // 필터 함수이기떄문에 하나하나 검색 문윤호 부터
        const nameInitial = state.getInitials(person.name);
        // 만약 문ㅇ 들어오면
        // 여기서 두가지 경우 둘다 검색하기
        if (isChosungOnly) {
          // 초성 검색 모드
          return nameInitial.includes(input);
        } else {
          // 일반 이름 검색 모드
          return person.name.includes(input);
        }
      });

      return { filteredList: filtered };
    });
  },
  // 폰 번호 저장
  addNumber: (name, phoneNumber) =>
    set((state) => ({
      phoneNumberList: [
        ...state.phoneNumberList,
        { name: name, phoneNumber: phoneNumber },
      ],
    })),
  // 폰 번호 삭제
  phonNumberDelete: (name) =>
    set((state) => ({
      phoneNumberList: state.phoneNumberList.filter((el) => el.name !== name),
    })),
  selectPhonNumberDelete: (names) => {
    // 선택한 배열은 names:[문윤호,기영학]
    // 기존연락처는 phoneNumberList:[{이름,번호},{이룸,번호}]
    const newSet = new Set(names);
    set((state) => ({
      // 여기서 set has 로 구별해서 삭제
      phoneNumberList: state.phoneNumberList.filter(
        (el) => !newSet.has(el.name)
      ),
    }));
  },
}));

export default usePhoneStore;
