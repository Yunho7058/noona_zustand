import { create } from "zustand";

// create(() => ({}))
const usePhoneStore = create((set) => ({
  // 폰 정보 저장 이름과 폰번호 배열안에 객채로 저장 [{name:윤호,phoneNumber:01056432341}, ...]
  phoneList: [],
  // 폰 번호 저장
  add: (name, phoneNumber) =>
    set((state) => ({
      phoneList: [...state.phoneList, { name: name, phoneNumber: phoneNumber }],
    })),
  // 폰 번호 삭제
  phonNumberDelete: (name) =>
    set((state) => ({
      phoneList: state.phoneList.filter((el) => el.name !== name),
    })),
}));

export default usePhoneStore;
