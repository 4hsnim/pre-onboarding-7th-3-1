import styled from "styled-components";

interface Props {
  logoTitle?: boolean;
}

const NavTitle = styled.span<Props>`
  font-size: ${(props) => (props.logoTitle ? "1.3rem" : "1rem")};
  font-weight: 500;
  line-height: 1.6;
  color: #1e2025;
  margin: 0 25px;
`;

export default NavTitle;
