import Atoms from "../atoms";
import search from "../../assets/search1.svg";
import Cache from "../../utils/cache/sessionStorage";

const RecentKeyword = () => {
  const getCacheData = JSON.parse(Cache.get() as string)
  return (
    <Atoms.KeywordWrapper>
      {getCacheData ?
        getCacheData.data.map((keyword:string,index:number)=> <div key={index}>
          <Atoms.SearchSvg1 src={search} />
          <Atoms.KeywordBody>{keyword}</Atoms.KeywordBody>
          </div>) : <Atoms.NoRecentKeyword>최근 검색어가 없습니다.</Atoms.NoRecentKeyword>}
    </Atoms.KeywordWrapper>
  );
};

export default RecentKeyword;
