import Atoms from "../atoms";
import search1 from "../../assets/search1.svg";
import search2 from "../../assets/search2.svg";
import React, { useState } from "react";

const Search = () => {
  const [enteredInput, setEnteredInput] = useState<string>("");

  const onKeyPress = (
    ChangeEvent: React.ChangeEvent<HTMLInputElement>,
    KeyEvent: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (KeyEvent.key === "enter") {
      console.log("하이!");
    }
  };

  const handleSearch = () => {};

  return (
    <Atoms.SerchInputContainer>
      <Atoms.SearchSvg1 src={search1} />
      <Atoms.SerachInput
        placeholder="질환명을 입력해 주세요."
        onKeyPress={onKeyPress}
      />
      <Atoms.SearchButton>
        <Atoms.SearchSvg2 src={search2} />
      </Atoms.SearchButton>
    </Atoms.SerchInputContainer>
  );
};

export default Search;
