import { useEffect, useState } from "react"
import axios from "axios"
import "../styles/league-table.css"
import { Link } from "react-router-dom"

export default function DataTable({league}){
    let [clubs, setClubs] = useState([])
    let [loadStatus, setLoad] = useState(true)
    let [errorStatus, setError] = useState(false)
    useEffect(()=>{
        const featchClubs = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/${league}`)
                const data = res.data
                setClubs(data.standings[0].table)         
            } catch {
                setError(true)
            } finally {
                setLoad(false)
            }
        };
        featchClubs()
    }, [league])
    return(
    <div>
        {!loadStatus ? !errorStatus ?
        <div>
        <div className="bg-gray-400 text-[14px] rounded-xl">
            <div className="flex justify-between pr-4 pl-2 py-1 border-b border-gray-400">
                <div className="flex gap-1.5 font-serif">
                    <p>Pos</p>
                    <p>team</p>
                </div>
                <div>
                    <p className="font-semibold">Pts</p>
                </div>
            </div>
        <div className="league-table overflow-y-auto h-97 w-73">{
            clubs.map((team, index)=>(
                <div key={index} className="flex justify-between shadow p-3 px-1.5 bg-gray-100 border-b border-gray-200">
                    <div className="flex justify-start items-center gap-1">
                        <span>{team.position}.</span>
                        <img className="w-1/8" src={team.team.crest}/>
                        <span key={index} className="text-[13px] font-medium">{team.team.name}</span>
                    </div>
                    <div>
                        <span className="font-semibold">{team.points}</span>
                    </div>
                </div>
            ))}
        </div>
        
        </div>
            <div className="flex items-center justify-center p-4">
                <Link className="cursor-pointer text-[14px] font-black text-violet-800" to={`/league/${league}`}> Show More Info </Link>
            </div>
        </div>
        :
        <div>
            <div className="flex flex-col gap-20 items-center text-center translate-y-30">
                <h3 className="font-bold text-xl text-blue-900">Oops! Something went wrong Please check your connection</h3>
                <p className="font-medium"><span className="font-bold">Warnnig:</span> Due to API limits, the data not updata instantly. Please refresh every 1 minut to get results.</p>
            </div>
        </div>
        :
        <div>
            <div className="flex items-center text-center font-bold text-xl text-blue-900 translate-y-40"><h3 className="text">Data is Loading ...</h3></div>
        </div>
        }
    </div>
    )
}