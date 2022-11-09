import Atoms from "../atoms";
import search from "../../assets/search1.svg";

const RecentKeyword = () => {
  return (
    <Atoms.KeywordWrapper>
      <Atoms.NoRecentKeyword>최근 검색어가 없습니다.</Atoms.NoRecentKeyword>
      {/* <Atoms.SearchSvg1 src={search} />
      <Atoms.KeywordBody>한숨</Atoms.KeywordBody> */}
    </Atoms.KeywordWrapper>
  );
};

export default RecentKeyword;
