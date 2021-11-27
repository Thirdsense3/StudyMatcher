import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { apiUrl, registerUser } from '../../../_actions/user_action';
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [Name, setName] = useState('');
  const [Nickname, setNickname] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [City, setCity] = useState('');
  const [Gu, setGu] = useState('');
  // const [Location, setLocation] = useState('');

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onNicknameHandler = (event) => {
    setNickname(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onCityHandler = (event) => {
    setCity(event.currentTarget.value);
  };

  const onGuHandler = (event) => {
    setGu(event.currentTarget.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // 버튼 클릭마다 페이지 refresh 방지.
    console.log('Name:', Name);
    console.log('Nickname:', Nickname);
    console.log('Password:', Password);
    console.log('City:', City);

    if (!Name || !Nickname || !Password || !ConfirmPassword || !City) {
      return alert('빠진 부분이 존재합니다.');
    }

    if (Password !== ConfirmPassword) {
      return alert('비밀번호가 다릅니다.');
    }

    const res1 = await duplicateCheck(Nickname);

    if (res1 !== 'possible id') {
      return alert('이미 등록된 ID 입니다.');
    }

    dispatch(registerUser(Name, Nickname, Password, City, Gu)
    ).then(response => {
      if (response.payload.error === null || response.payload.error === undefined) {
        alert('회원가입이 완료되었습니다.');
        props.history.push('/login');
      } else {
        console.log(response.payload);
        alert('회원가입에 실패하셨습니다. 새로고침 후 다시 시도해주세요.');
      }
    });
  }

  return (
    <Fragment>
      <Header></Header>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '60vh'
      }}>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
          <label>이름</label>
          <input type='text' value={Name} onChange={onNameHandler} />
          <label>ID</label>
          <input type='text' value={Nickname} onChange={onNicknameHandler} />
          <label>비밀번호</label>
          <input type='password' value={Password} onChange={onPasswordHandler} />
          <label>비밀번호 확인</label>
          <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
          <label>도시</label>
          <input type='text' value={City} onChange={onCityHandler} />
          <label>구</label>
          <input type='text' value={Gu} onChange={onGuHandler} />
          <br />
          <button>
            회원가입
          </button>
        </form>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export async function duplicateCheck(Nickname) {
  // axios({
  //   method: 'GET',
  //   url: '/members/duplicate-check' + Nickname,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   }
  //   // responseType: 'type'
  // }).then(response => {
  //   console.log(response);
  // }).catch(error => {
  //   console.log(error);
  // });
  try {
    const response = await axios.get(apiUrl + '/members/duplicate-check/' + Nickname);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// function DuplicateCheck(Nickname) {
//   // axios({
//   //   method: 'GET',
//   //   url: '/members/duplicate-check' + Nickname,
//   //   headers: {
//   //     'Access-Control-Allow-Origin': '*'
//   //   }
//   //   // responseType: 'type'
//   // }).then(response => {
//   //   console.log(response);
//   // }).catch(error => {
//   //   console.log(error);
//   // });
//   axios.get('/members/duplicate-check/' + Nickname
//   ).then(response => {
//     console.log(response.data);
//     return response.data;
//   }).catch(error => {
//     console.log(error);
//     return error;
//   });
// }



// async function JoinMember(Name, Nickname, Password, City, Gu) {
  
//   axios.post('http://localhost:8080/members/join', {
//     name: Name,
//     nickname: Nickname,
//     password: Password,
//     location: {city: City, gu: Gu}
//   }).then(response => {
//     console.log(response.data);
//   }).catch(error => {
//     console.log(error);
//   });
// }

export default RegisterPage;
