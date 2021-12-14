import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchStudy } from '../../../_actions/user_action';
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import searchList from "../../../db/searchTest.json";


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

    console.log(searchList, searchList.data[1]);
    console.log(items);
    console.log('SearchName:', SearchName);
    console.log('SearchCategory:', SearchCategory);
    console.log('SearchLeader:', SearchLeader);

    // dispatch(searchStudy(SearchName, SearchCategory, SearchLeader)
    // ).then(response => {
    //   console.log('searchStudyRes:', response);
    //   // if (response.payload.error === null) {
    //   //   alert(response.payload);
    //   // } else {
    //   //   alert(response.payload.error);
    //   // }
    // });
  };

  const spanStyle = {
    paddingRight: '20px',
    fontSize: '20px'
  };

  const items = searchList.data.map(data => {
    return(
      <div>
        <ul style={{margin: '2vh'}}>
          <li style={{position: 'relative', left: '5vh', listStyleType: 'disc'}}>
            <span style={spanStyle}>스터디명: {data.name}</span>
            <span style={spanStyle}>카테고리: {data.category}</span>
            <span style={spanStyle}>레벨: {data.level}</span>
            <span style={spanStyle}>장소: {data.location.city} {data.location.gu}</span>
            <span style={spanStyle}>스터디장: {data.leader}</span>
          </li>
        </ul>
      </div>
    )
  })

  return (
    <Fragment>
      <Header></Header>
        <div>
          <table>
            <tr>
              <td>
                스터디명
              </td>
              <td>
                <input type='text' value={SearchName} onChange={onSearchNameHandler} />
              </td>
              <td>
                카테고리
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
                스터디장
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
        {items}
      <Footer />
    </Fragment>
  )
}

export default SearchPage;
