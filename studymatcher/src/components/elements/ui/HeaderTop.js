import { Link } from "react-router-dom";
import { useDispatch, useStore } from 'react-redux';
import { logoutUser } from '../../../_actions/user_action';

export default function HeaderTop() {
  const dispatch = useDispatch();
  const store = useStore();

  const onClickLogoutHandler = () => {
    dispatch(logoutUser());
    alert('로그아웃 되셨습니다.');
  }

  const onClickEditHandler = () => {
    // dispatch(editUser());
    console.log('회원정보수정 버튼 클릭');
  }

  const onClickCheckLoggedHandler = () => {
    if (store.getState().user.logged === true) {
      console.log(store.getState().user.loggedInfo);
    } else {
      console.log(store.getState());
    }
  }

  const LoginState = () => {
    if (store.getState().user.logged === true) {
      return(
        <div className="same-language-currency language-style">
          <span>
            {store.getState().user.loggedInfo.id}
          </span>
          <div className="lang-car-dropdown">
            <ul>
              <li>
                <Link to="./">
                  <button value="logout" onClick={onClickLogoutHandler}>로그아웃</button>
                </Link>
              </li>
              <li>
                <button value="editUser" onClick={onClickEditHandler}>회원정보수정</button>
              </li>
              <li>
                <button value="checkLogged" onClick={onClickCheckLoggedHandler}>로그인 체크</button>
              </li>
            </ul>
          </div>
        </div>
      )
    } else {
      return(
        <div className="same-language-currency language-style">
          <span>
            회원 <i className="fa fa-angle-down"></i>
          </span>
          <div className="lang-car-dropdown">
            <ul>
              <li>
                <Link to="./login">
                  <button value="login">로그인</button>
                </Link>
              </li>
              <li>
                <Link to="./register">
                  <button value="register">회원가입</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="header-padding-1 d-none d-lg-block header-top-area">
      <div className="container-fluid">
        <div className="header-top-wap">
          <div className="language-currency-wrap">
            <div className="same-language-currency language-style">
              <span>
                메뉴 <i className="fa fa-angle-down"></i>
              </span>
              <div className="lang-car-dropdown">
                <ul>
                  <li>
                    <button value="lvTest">레벨테스트</button>
                  </li>
                  <li>
                    <Link to="./createstudy">
                      <button value="createstudy">스터디 생성</button>
                    </Link>
                  </li>
                  <li>
                    <button value="stList">스터디 목록</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="same-language-currency use-style">
              <span>
                회원 <i className="fa fa-angle-down"></i>
              </span>
              <div className="lang-car-dropdown">
                <ul>
                  <li>
                    <Link to="./login">
                      <button value="login">로그인</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="./register">
                      <button value="register">회원가입</button>
                    </Link>
                  </li>
                  <li>
                    <button value="logout" onClick={onClickLogoutHandler}>로그아웃</button>
                  </li>
                  <li>
                    <button value="checkLogged" onClick={onClickCheckLoggedHandler}>로그인 체크</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="same-language-currency language-style">
              <span>
                <Link to="./">
                  홈
                </Link>
              </span>
            </div>
            <div className="same-language-currency language-style">
              <span>
                <Link to="./Search">
                  검색
                </Link>
              </span>
            </div>
            <LoginState />
          </div>
        </div>
      </div>
    </div>
  );
}
