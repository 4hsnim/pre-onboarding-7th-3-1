import Atoms from "../atoms";
import Molecules from "../molecules";
import research1 from "../../assets/research1.svg";
import research2 from "../../assets/research2.svg";
import research3 from "../../assets/research3.svg";
import search from "../../assets/search1.svg";

const Main = () => {
  return (
    <Atoms.SearchContainer>
      <Atoms.SearchTitle>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Atoms.SearchTitle>
      <Atoms.SearchBottomContainer>
        <Atoms.ResearchSvg1 src={research1} />
        <div>
          <Molecules.Search />
          <Atoms.SearchForm>
            <Atoms.SearchFormTitle>최근검색어</Atoms.SearchFormTitle>
            <Molecules.RecentKeyword />

            <Atoms.SuggestWordContainer>
              <Atoms.SearchFormTitle>
                추천 검색어로 검색하세요.
              </Atoms.SearchFormTitle>
              <Molecules.SuggestWord />
            </Atoms.SuggestWordContainer>
          </Atoms.SearchForm>
        </div>

        <Atoms.ResearchSvg2 src={research2} />
        <Atoms.ResearchSvg3 src={research3} />
      </Atoms.SearchBottomContainer>
    </Atoms.SearchContainer>
  );
};

export default Main;
