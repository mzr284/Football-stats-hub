import FullTable from "../components/fullTable";
import TopScorer from "../components/topScorer";

export default function FullTablePage(){
    return(
        <div className="translate-y-25">
            <div className=" flex flex-wrap gap-35 items-start">
                <div className="flex flex-col items-center translate-x-14">
                    <h2 className="font-bold text-center mt-6 text-2xl w-60 bg-gray-100 rounded
                    max-w-xl border-blue-500 border-b-2 p-2 shadow">Standing</h2>
                    <FullTable/>
                </div>
                <div className="flex flex-col items-center gap-10">
                    <h2 className="font-bold text-center mt-6 text-2xl w-60 bg-gray-100 rounded
                    max-w-xl border-blue-500 border-b-2 p-2 shadow">Top Scorers</h2>
                    <TopScorer/>
                </div>
            </div>
        </div>
    )
}