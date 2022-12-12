import React, { useState } from "react";

import { AUTH } from "./constants";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

type LoginOrSignup = keyof typeof AUTH;

// type Codes = typeof CODE; // 해당하는 변수의 key, value 추론
// type Codes = keyof typeof CODE; // 해당 변수의 key 추론
// type Codes = typeof CODE[keyof typeof CODE]; // 해당 변수의 타입 추론

const AuthPage = () => {
  const [loginOrSignup, setLoginOrSignup] = useState<LoginOrSignup>(AUTH.login);

  const onChangeLoginOrSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoginOrSignup(loginOrSignup === AUTH.login ? AUTH.signup : AUTH.login);
  };

  const changingButtonName = () => {
    return loginOrSignup === AUTH.login ? AUTH.signup : AUTH.login;
  };

  return (
    <div>
      <h1>{loginOrSignup}</h1>
      {loginOrSignup === AUTH.login ? <LoginPage /> : <SignupPage />}
      <button onClick={onChangeLoginOrSignup}>
        {changingButtonName()} 하러 가기
      </button>
    </div>
  );
};

export default AuthPage;
