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
      const isChosungOnly = /^[ㄱ-ㅎ]+$/.test(input); // 초성만 있는지 검사
      //const inputInitial = state.getInitials(input); // 입력 초성

      const filtered = state.phoneNumberList.filter((person) => {
        const nameInitial = state.getInitials(person.name);

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
