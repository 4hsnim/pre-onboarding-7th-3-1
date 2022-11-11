import Atoms from "../atoms";
import search1 from "../../assets/search1.svg";
import search2 from "../../assets/search2.svg";
import React, { useState,useRef,useEffect } from "react";
import Cache from "../../utils/cache/sessionStorage";


let timer: NodeJS.Timeout | null = null;

const Search = () => {
  
  const [enteredInput, setEnteredInput] = useState<string>("");
  const inputRef= useRef() as React.MutableRefObject<HTMLInputElement>;
  const getCacheData = JSON.parse(Cache.get() as string)

  const onKeyPress = (

    KeyEvent: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (KeyEvent.key == "Enter") {
      if(getCacheData) {
        Cache.set({data:[...getCacheData?.data,enteredInput]})
      } else {
        Cache.set({data:[enteredInput]})
      }

    }
  };

  const inputChangeHandler = (ChangeEvent: React.ChangeEvent<HTMLInputElement>,) => {
    setEnteredInput(ChangeEvent.target.value)
  }

  const searchHandler = () => {
    if(getCacheData) {
      Cache.set({data:[...getCacheData?.data,enteredInput]})
    } else {
      Cache.set({data:[enteredInput]})
    }

  };

  useEffect(() => {
    if(timer) {
      clearTimeout(timer);
    }

     timer = setTimeout(() => {
      if (enteredInput === inputRef.current.value) {
        const query =
        enteredInput.length === 0
            ? ""
            : `?q=${enteredInput}`;
        fetch(
          "http://localhost:4000/sick" + query
        )
          .then((response) => response.json())
          .then((responseData) => {

          });
      }
    }, 500);

  }, [enteredInput,  inputRef]);

  

  return (
    <Atoms.SerchInputContainer>
      <Atoms.SearchSvg1 src={search1} />
      <Atoms.SerachInput
        placeholder="질환명을 입력해 주세요."
        onChange={inputChangeHandler}
        onKeyPress={onKeyPress}
        ref={inputRef}
      />
      <Atoms.SearchButton onClick={searchHandler}>
        <Atoms.SearchSvg2 src={search2} />
      </Atoms.SearchButton>
    </Atoms.SerchInputContainer>
  );
};

export default Search;
