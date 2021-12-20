import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createStudyPage } from '../../../_actions/study_action';
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

function CreateStudyPage(props) {
  const dispatch = useDispatch();

  const [StudyName, setName] = useState('');
  const [Text, setText] = useState('');
  const [Level, setLevel] = useState('');
  const [Type, setType] = useState('');

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onTextHandler = (event) => {
    setText(event.currentTarget.value);
  };

  const onLevelHandler = (event) => {
    setLevel(event.currentTarget.value);
  };

  const LevelSelect = (event) => {
    return(
      <select value={Level} onChange={onLevelHandler}>
        <option key='Bronze' value='Bronze'>Bronze</option>
        <option key='Silver' value='Silver'>Silver</option>
        <option key='Gold' value='Gold'>Gold</option>
        <option key='Platinum' value='Platinum'>Platinum</option>
        <option key='Diamond' value='Diamond'>Diamond</option>
      </select>
    )
  }

  const onTypeHandler = (event) => {
    let result = '';
    if(event.target.checked)  {
      result = 'UNTACT';
    }else {
      result = 'CONTACT';
    }
    setType(result);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // 버튼 클릭마다 페이지 refresh 방지.
    console.log('StudyName:', StudyName);
    console.log('Text:', Text);
    console.log('Level:', Level);
    console.log('Type:', Type);
    // LeaderId는 새로고침 유지 성공후 추가할 예정 임시로 1로 고정

    if (!StudyName || !Text) {
      return alert('스터디명 혹은 스터디 소개 부분이 공란입니다.');
    }

    dispatch(createStudyPage(StudyName, Text, '1',Level, Type)
    ).then(response => {
      if (response.payload.error === null || response.payload.error === undefined) {
        alert('스터디 생성이 완료되었습니다.');
        props.history.push('/');
      } else {
        console.log(response.payload);
        alert('스터디 생성에 실패하셨습니다. 새로고침 후 다시 시도해주세요.');
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
          <label>스터디 이름</label>
          <input type='text' value={StudyName} onChange={onNameHandler} />
          <label>스터디 소개</label>
          <input type='text' value={Text} onChange={onTextHandler} />
          <label>스터디 레벨</label>
          <LevelSelect/>
          <label>모임시 온라인</label>
          <input type='checkbox' value={Type} onChange={onTypeHandler} />
          <br />
          <button>
            스터디 생성
          </button>
        </form>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default CreateStudyPage;
