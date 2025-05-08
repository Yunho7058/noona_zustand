import { create } from "zustand";

// create(() => ({}))
const usePhoneStore = create((set) => ({
  // 폰 정보 저장 이름과 폰번호 배열안에 객채로 저장 [{name:윤호,phoneNumber:01056432341}, ...]
  phoneList: [
    { name: "문윤호", phoneNumber: "01023237948" },
    { name: "김관영", phoneNumber: "01023237948" },
    { name: "기영학", phoneNumber: "01023237948" },
    { name: "권기웅", phoneNumber: "01023237948" },
    { name: "이규섭", phoneNumber: "01023237948" },
  ],
  // 폰 번호 저장
  addNumber: (name, phoneNumber) =>
    set((state) => ({
      phoneList: [...state.phoneList, { name: name, phoneNumber: phoneNumber }],
    })),
  // 폰 번호 삭제
  phonNumberDelete: (name) =>
    set((state) => ({
      phoneList: state.phoneList.filter((el) => el.name !== name),
    })),
  selectPhonNumberDelete: (names) => {
    // 선택한 배열은 names:[문윤호,기영학]
    // 기존연락처는 phoneList:[{이름,번호},{이룸,번호}]
    const newSet = new Set(names);
    set((state) => ({
      // 여기서 set has 로 구별해서 삭제
      phoneList: state.phoneList.filter((el) => !newSet.has(el.name)),
    }));
  },
}));

export default usePhoneStore;
