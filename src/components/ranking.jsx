import { Link } from "react-router-dom";
import DataTable from "./dataTables";

export default function Ranking(){
    return(
        <div className="w-80 h-130 bg-gray-200 px-3 py-2 mt-3.5 ml-3">
            <div className="py-1 pl-5">
                  <h4>Premier League</h4>
                  <span>2025-2026</span>
            </div>
            <div >
                <DataTable league={"PL"} api={"/v4/competitions/PL"}/>
            </div>
            <p className="cursor-pointer mt-3 ml-4 text-[14px] bg-gray-100"> Show More Info </p>
        </div>
    )
}

