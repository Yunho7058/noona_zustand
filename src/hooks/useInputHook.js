import { useState } from "react";

export const useInput = (initiaValue = "") => {
  const [value, setValue] = useState(initiaValue);
  const onChange = (e) => setValue(e.target.value);
  return { value, setValue, onChange };
};

/*
import { useForm } from 'react-hook-form';

function SignupForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('회원가입 정보:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="이름" />
      <input {...register('email')} placeholder="이메일" />
      <input {...register('password')} type="password" placeholder="비밀번호" />
      <button type="submit">가입하기</button>
    </form>
  );
}
---
적용
import { useState } from "react";

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
