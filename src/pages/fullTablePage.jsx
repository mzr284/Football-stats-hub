import FullTable from "../components/fullTable";
import TopScorer from "../components/topScorer";

export default function FullTablePage(){
    return(
        <div className="translate-y-25 flex flex-wrap gap-35 items-start">
            <FullTable/>
            <TopScorer/>
        </div>
    )
}