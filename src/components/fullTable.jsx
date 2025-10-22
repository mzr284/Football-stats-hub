import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "../styles/attrsTable.css"

export default function FullTable(){
    const { leagueName } = useParams();
    let [clubs, setClubs] = useState([]);
    let [loadStatus, setLoad] = useState(true);
    let[errorStatus, setError] = useState(false);
    useEffect(()=>{
        const featchClubs = async ()=>{
            try{
                const res = await axios.get(`http://localhost:5000/api/league/${leagueName}`)
                const data = res.data
                setClubs(data.standings[0].table)
            } catch {
                setError(true)
            } finally {
                setLoad(false)
            }
        }
        featchClubs();
    }, [clubs])
    return(
        <div className="flex flex-col py-8 px-5 bg-gray-100 gap-4 translate-y-10 w-200 translate-x-14">
            <div className="bg-gray-700 text-white px-2 py-1 flex justify-between">
                <div className="flex gap-3">
                    <span>Pos</span>
                    <span>Team</span>
                </div>
                <div className="header-table flex gap-[2rem] pr-1">
                    <span>P</span>
                    <span>W</span>
                    <span>D</span>
                    <span>L</span>
                    <span>GF</span>
                    <span>GA</span>
                    <span>GD</span>
                    <span className="font-bold mr-1">Pts</span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {
                    clubs.map((team, index)=>(
                        <div key={index} className={`flex justify-between border-b border-b-gray-500 shadow
                         bg-gray-200 px-0.5 py-[3px] ${team.position > 17 ? 'border-l-4 border-l-red-600' : ''}
                         ${team.position < 5 ? 'border-l-4 border-l-blue-500' : ''}
                         ${team.position === 5 || team.position === 6 ? 'border-l-4 border-l-orange-500' : ''}`}>
                            <div className="flex items-center gap-3">
                                <span className="w-4 text-center">{team.position}. </span>
                                <img className="w-9" src={team.team.crest}/>
                                <span>{team.team.name}</span>
                            </div>
                            <div className="attrs flex gap-3 justify-center items-center">
                                <span>{team.playedGames}</span>
                                <span>{team.won}</span>
                                <span>{team.draw}</span>
                                <span>{team.lost}</span>
                                <span>{team.goalsFor}</span>
                                <span>{team.goalsAgainst}</span>
                                <span>{team.goalDifference}</span>
                                <span className="font-black">{team.points}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}