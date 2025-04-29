import React from "react";
import usePhoneStore from "../store/phoneStore";

export const ContacList = () => {
  const { phoneList } = usePhoneStore();
  return (
    <div>
      연락처 리스트
      {phoneList?.map((el, idx) => (
        <div key={idx}>
          <div>{el.name}</div>
          <div>{el.phoneNumber}</div>
        </div>
      ))}
    </div>
  );
};
