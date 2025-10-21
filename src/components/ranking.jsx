import { Link } from "react-router-dom";
import DataTable from "./dataTables";

export default function Ranking({league, ComoleteName}){

    return(
        <div className="flex items-center flex-col w-80 h-137 bg-gray-200 px-3 py-2 mt-3.5 mb-4 text-center">
            <div className="py-1">
                  <h4 className="text-[22px] text-violet-950 font-semibold">{ComoleteName}</h4>
                  <span>2025-2026</span>
            </div>
            <div>
                <DataTable league={league}/>
            </div>
            
        </div>
    )
}

