import { useState } from "react";

const useInput = (initiaValue = "") => {
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
*/
