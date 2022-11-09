import Atoms from "../atoms";
import Organisms from "../organisms";

const Template = () => {
  return (
    <Atoms.Container>
      <Organisms.Nav />
      <Organisms.Search />
      <Organisms.Test />
    </Atoms.Container>
  );
};

export default Template;
