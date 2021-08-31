import React, { useState } from 'react';

function RegisterPage() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Location, setLocation] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onLocationHandler = (event) => {
    setLocation(event.currentTarget.value);
  };


  const onSubmitHandler = (event) => {
    event.preventDefault(); // 버튼 클릭마다 페이지 refresh 방지.
    console.log('Name:', Name);
    console.log('Email:', Email);
    console.log('Password:', Password);
    console.log('Location:', Location);

    if (!Name || !Email || !Password || !ConfirmPassword || !Location) {
      return alert('빠진 부분이 존재합니다.');
    }

    if (Password !== ConfirmPassword) {
      return alert('비밀번호가 다릅니다.');
    }

    // 이후 서버에 보내야함.
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
        <label>이름</label>
        <input type="text" value={Name} onChange={onNameHandler} />
        <label>E-mail</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>비밀번호</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <label>비밀번호 확인</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
        <label>주소</label>
        <input type="text" value={Location} onChange={onLocationHandler} />
        <br />
        <button>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
