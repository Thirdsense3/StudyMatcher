export default function HeaderTop() {
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
                    <button value="stCreate">스터디 생성</button>
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
                    <button value="login">로그인</button>
                  </li>
                  <li>
                    <button value="register">회원가입</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
