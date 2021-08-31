import React, { useState } from 'react';

function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); // 버튼 클릭마다 페이지 refresh 방지.
    console.log('Email:', Email);
    console.log('Password:', Password);

    // 이후 서버에 보내야함.
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
        <label>E-mail</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>비밀번호</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
