import React from "react";
import Input from "../../../components/Input";

const Form = () => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const emailInputProps = {
    inputId: "email",
    labelName: "email",
    placeholder: "이메일을 입력해주세요",
    handleChange: handleEmailChange,
  };
  const passwordInputProps = {
    inputId: "password",
    labelName: "password",
    placeholder: "비밀번호를 입력해주세요",
    handleChange: handlePasswordChange,
  };

  const onLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onLoginSubmit}>
      <Input {...emailInputProps} />
      <Input {...passwordInputProps} />
      <button>제출하기</button>
    </form>
  );
};

export default Form;
