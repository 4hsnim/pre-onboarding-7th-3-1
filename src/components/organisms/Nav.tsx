import Atoms from "../atoms";
import Molecules from "../molecules";
import logo from "../../assets/logo.svg";

const Nav = () => {
  return (
    <Atoms.NavWrapper>
      <Atoms.NavLogoWrapper>
        <Atoms.Logo src={logo} />
      </Atoms.NavLogoWrapper>

      <Molecules.NavMeunu />
    </Atoms.NavWrapper>
  );
};

export default Nav;
