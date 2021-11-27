import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchStudy } from '../../../_actions/user_action';
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

function SearchPage() {
  const dispatch = useDispatch();
  const [SearchText, setSearchText] = useState('');

  const onSearchTextHandler = (event) => {
    setSearchText(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); // 버튼 클릭마다 페이지 refresh 방지.

    console.log('SearchText:', SearchText);

    dispatch(searchStudy(SearchText, '', '')
    ).then(response => {
      if (response.payload.error === null) {
        // props.history.push('/');
        alert(response.payload);
      } else {
        alert(response.payload.error);
      }
    });
  };

  return (
    <Fragment>
      <Header></Header>
        <div>
          <table>
            <tr>
              <td>
                <input type='text' value={SearchText} onChange={onSearchTextHandler} />
              </td>
              <td>
                <form onSubmit={onSubmitHandler}>
                  <button>
                    검색
                  </button>
                </form>
              </td>
            </tr>
          </table>
        </div>
      <Footer />
    </Fragment>
  )
}

export default SearchPage;
