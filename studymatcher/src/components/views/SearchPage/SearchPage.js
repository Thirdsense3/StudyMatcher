import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchStudy } from '../../../_actions/user_action';
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

function SearchPage() {
  const dispatch = useDispatch();
  const [SearchName, setSearchName] = useState('');
  const [SearchCategory, setSearchCategory] = useState('');
  const [SearchLeader, setSearchLeader] = useState('');

  const categoryList = ['-', 'ReactJS', 'Spring', 'Android', 'iOS'];

  const onSearchNameHandler = (event) => {
    setSearchName(event.currentTarget.value);
  };

  const onSearchCategoryHandler = (event) => {
    setSearchCategory(event.currentTarget.value);
  };

  const onSearchLeaderHandler = (event) => {
    setSearchLeader(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); // 버튼 클릭마다 페이지 refresh 방지.

    console.log('SearchName:', SearchName);
    console.log('SearchCategory:', SearchCategory);
    console.log('SearchLeader:', SearchLeader);

    dispatch(searchStudy(SearchName, SearchCategory, SearchLeader)
    ).then(response => {
      console.log('searchStudyRes:', response);
      // if (response.payload.error === null) {
      //   alert(response.payload);
      // } else {
      //   alert(response.payload.error);
      // }
    });
  };

  return (
    <Fragment>
      <Header></Header>
        <div>
          <table>
            <tr>
              <td>
                Name
              </td>
              <td>
                <input type='text' value={SearchName} onChange={onSearchNameHandler} />
              </td>
              <td>
                Category
              </td>
              <td>
                <select value={SearchCategory} onChange={onSearchCategoryHandler}>
                  {categoryList.map((item, index) => (
                    <option value={index} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                Leader
              </td>
              <td>
                <input type='text' value={SearchLeader} onChange={onSearchLeaderHandler} />
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
