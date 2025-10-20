import DataTable from "./dataTables";
import TableRank from "./tableRank";

export default function Ranking(){
    return(
        <div>
            <div>
                <DataTable league={"PR"} api={"/v4/competitions/PL"}/>
            </div>
        </div>
    )
}