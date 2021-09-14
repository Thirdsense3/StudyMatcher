import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [Nickname, setNickname] = useState('');
  const [Password, setPassword] = useState('');

  const onNicknameHandler = (event) => {
    setNickname(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); // 버튼 클릭마다 페이지 refresh 방지.

    console.log('Nickname:', Nickname);
    console.log('Password:', Password);

    dispatch(loginUser(Nickname, Password)
    ).then(response => {
      if (response.payload.error === null) {
        props.history.push('/');
      } else {
        alert(response.payload.error);
      }
    });
  };

  return (
    <Fragment>
      <Header></Header>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '50vh'
      }}>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
          <label>ID</label>
          <input type='text' value={Nickname} onChange={onNicknameHandler} />
          <label>비밀번호</label>
          <input type='password' value={Password} onChange={onPasswordHandler} />
          <br />
          <button>
            로그인
          </button>
        </form>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default LoginPage;
