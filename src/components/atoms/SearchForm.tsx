import styled from "styled-components";

const SearchForm = styled.div`
  width: 490px;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 1rem;

  /* 모달창 크기 */

  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: relative;
  left: 20%;
  top: 3%;
  /* 모달창 디자인 */
  border: none;
  border-radius: 1rem;
`;

export default SearchForm;
