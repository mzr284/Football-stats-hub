import axios from "axios";
import { useEffect, useState } from "react";

export default function TeamMatches({teamId}){
    let [matches, setMatches] = useState([]);
    let [loadStatus, setLoad] = useState(true);
    let [errorStatus, setError] = useState(false);
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await axios.get(`http://localhost:5000/api/matches/${teamId}`)
                const data = res.data
                setMatches(data.matches)
            } catch (er){
                console.log(er)
                setError(true)
            } finally {
                setLoad(false)
            }
        }
        fetchData();
    }, [])
    let signedMatches = [];
    let pointer = 0;
    for(let i=0; i<matches.length-5; ++i){
        if(matches[i+5].status == "TIMED"){
            signedMatches.push(matches[i])
            pointer +=1 ;
            if(pointer == 8){
                break
            }
        }
    }
    console.log(signedMatches)
    return(
        <div className="flex flex-col items-center gap-3">
            <div className="flex justify-between w-1/3 font-serif translate-y-2 text-[18px]">
                <h3>Home</h3>
                <h3>Away</h3>
            </div>
            {
                signedMatches.map((match, index)=>(
                    <div key={index} className={`flex gap-9 justify-between w-130 font-sans
                    border-b border-gray-500 py-2 shadow px-2`}>
                        <div className={`flex items-center justify-between w-60`}>
                            <img className="w-12" src={match.homeTeam.crest}/>
                            <div className="flex gap-7">
                                <span>{match.homeTeam.shortName}</span>
                                <sapn className={`${match.score.fullTime.home > match.score.fullTime.away ? 'font-bold border-b-2 border-blue-800': ''}`}>
                                    {match.score.fullTime.home}</sapn>
                            </div>
                        </div>
                        <div className={`flex items-center justify-between w-60`}>
                            <div className="flex gap-7">
                                <sapn className={`${match.score.fullTime.away > match.score.fullTime.home ? 'font-bold border-b-2 border-blue-800' : ''}`}>
                                    {match.score.fullTime.away}</sapn>
                                <span>{match.awayTeam.shortName}</span>
                            </div>
                            <img className="w-12" src={match.awayTeam.crest}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}