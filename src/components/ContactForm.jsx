import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import usePhoneStore from "../store/phoneStore";
import { useInput } from "../hooks/useInputHook";

export const ContactForm = () => {
  const { add } = usePhoneStore();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleAddContact = (name, number) => {
    if (!name.trim() || !number.trim()) {
      alert("공백");
      return;
    } else {
      add(name, number);
      setName("");
      setPhoneNumber("");
      alert("등록완료");
    }
  };

  return (
    <Box display={"flex"} flexDirection="column" alignItems="center" gap={2}>
      <TextField
        id="name"
        label="이름"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="전화번호"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          handleAddContact(name, phoneNumber);
        }}
      >
        추가
      </Button>
    </Box>
  );
};

/*
적용 useInputHook
export const ContactForm = () => {
  const { add } = usePhoneStore();

  // ✅ useInput으로 상태 관리
  const name = useInput("");
  const phoneNumber = useInput("");

  const handleAddContact = () => {
    add(name.value, phoneNumber.value);

    // 입력값 초기화 (옵션)
    name.setValue("");
    phoneNumber.setValue("");
  };

  return (
    <Box display={"flex"} flexDirection="column" alignItems="center" gap={2}>
      <TextField
        id="name"
        label="이름"
        variant="outlined"
        {...name} // ✅ 구조분해로 value + onChange 자동 적용
      />
      <TextField
        id="outlined-basic"
        label="전화번호"
        variant="outlined"
        {...phoneNumber}
      />
      <Button variant="contained" onClick={handleAddContact}>
        추가
      </Button>
    </Box>
  );
};
*/
