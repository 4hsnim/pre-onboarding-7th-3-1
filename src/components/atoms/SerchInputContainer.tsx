import styled from "styled-components";

const SerchInputContainer = styled.div`
  width: 490px;
  height: 74px;
  border-radius: 42px;
  background-color: white;
  margin-top: 45px;
  margin-left: 8rem;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  :focus-within {
    outline: rgb(25, 118, 210) 2px solid;
  }
`;

export default SerchInputContainer;
