import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function TopScorer(){
    const { leagueName } = useParams();
    let [scorers, setScorers] = useState([]);
    let [loadStatus, setLoad] = useState(true);
    let[errorStatus, setError] = useState(false);
    useEffect(()=>{
        const featchData = async ()=>{
            try {
                const res = await axios.get(`http://localhost:5000/api/scorers/${leagueName}`)
                const data = res.data;
                setScorers(data.scorers);
            } catch (er){
                setError(true);
            } finally {
                setLoad(false);
            }
        }
        featchData();
    }, [])
    return(
        <div className="w-130 mb-15 bg-gray-100 px-3 py-2 translate-y-15">
            <div>
                <div className="flex justify-between bg-gray-700 text-white mb-4 px-2 py-0.5 mt-5">
                    <div>
                        <span>Name</span>
                    </div>
                    <div className="flex w-30 justify-center absolute translate-x-51"><span className="text-center">Team</span></div>
                    <div className="flex gap-4">
                        <span>Goals (P)</span>
                        <span>Assits</span>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    {
                        scorers.map((scorer, index)=>(
                            <div key={index} className="flex justify-between bg-gray-200 shadow py-1 px-0.5 pl-1.5 rounded
                            border-b-1 border-b-blue-950 text-blue-950 font-semibold">
                                <div>
                                    <span>{scorer.player.name}</span>
                                </div>
                                <div className="flex w-30 justify-center absolute translate-x-51"><span className="text-center">{scorer.team.shortName}</span></div>
                                <div className="flex gap-10">
                                    <span className="flex items-center justify-center">{scorer.goals} ({scorer.penalties ? scorer.penalties : 0})</span>
                                    <div className="flex justify-center mr-4.5"><span>{scorer.assists ? scorer.assists : 0}</span></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}