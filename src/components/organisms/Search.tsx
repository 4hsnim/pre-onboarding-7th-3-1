import Atoms from "../atoms";
import research1 from "../../assets/research1.svg";
import research2 from "../../assets/research2.svg";
import research3 from "../../assets/research3.svg";
import search1 from "../../assets/search1.svg";
import search2 from "../../assets/search2.svg";

const Search = () => {
  return (
    <Atoms.SearchContainer>
      <Atoms.SearchTitle>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Atoms.SearchTitle>
      <Atoms.SearchBottomContainer>
        <Atoms.ResearchSvg1 src={research1} />
        <Atoms.SerchInputContainer>
          <Atoms.SearchSvg1 src={search1} />
          <Atoms.SerachInput placeholder="질환명을 입력해 주세요." />
          <Atoms.SearchButton>
            <Atoms.SearchSvg2 src={search2} />
          </Atoms.SearchButton>
        </Atoms.SerchInputContainer>
        <Atoms.ResearchSvg2 src={research2} />
        <Atoms.ResearchSvg3 src={research3} />
      </Atoms.SearchBottomContainer>
    </Atoms.SearchContainer>
  );
};

export default Search;
