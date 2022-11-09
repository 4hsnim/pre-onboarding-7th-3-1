import styled from "styled-components";

const SerachInput = styled.input`
  width: 370px;
  height: 74px;
  border: none;
  border-radius: 42px;
  margin-left: 10px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #a7afb7;
    font-weight: 700;
    font-size: 1.05rem;
  }
`;
export default SerachInput;
