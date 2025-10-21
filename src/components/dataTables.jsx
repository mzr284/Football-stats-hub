import { useEffect, useState } from "react"
import axios from "axios"
import "../styles/league-table.css"

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
        <table className="bg-gray-400 text-[14px] rounded-xl">
            <div className="flex justify-between pr-4 pl-2 py-1 border-b border-gray-400">
                <div className="flex gap-1.5 font-serif">
                    <tr>Pos</tr>
                    <tr>team</tr>
                </div>
                <div>
                    <tr className="font-semibold">Pts</tr>
                </div>
            </div>
        <div className="league-table overflow-y-auto h-97 w-73">{
            clubs.map((team, index)=>(
                <div className="flex justify-between shadow p-3 px-1.5 bg-gray-100 border-b border-gray-200">
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
        
        </table>
        <button className="cursor-pointer mt-3 text-[14px] font-black text-violet-800"> Show More Info </button>
        </div>
        :
        <div>
            <div className="flex flex-col gap-20 items-center text-center translate-y-30">
                <h3 className="font-bold text-xl text-blue-900">Oops! Something wnet wrong</h3>
                <p className="font-medium"><span className="font-bold">Warnnig:</span> Due to API limits, the data not uopdata instantly. Please refresh every 1 minut to get results.</p>
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