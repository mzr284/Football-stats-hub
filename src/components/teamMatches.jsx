import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    }, [teamId])
    console.log(matches)
    let signedMatches = [];
    let pointer = 0;
    for(let i=0; i<matches.length-5; ++i){
        if(pointer){
            signedMatches.push(matches[i])
            pointer += 1;
            if(pointer >= 11){
                break;
            }
        }else if(matches[i+6].status == "TIMED"){
            pointer +=1 ;
        }
    }
    const getDate = (date) => {
        const newDate = new Date(date)
        const month = newDate.getMonth() + 1
        const year = newDate.getFullYear()
        const day = newDate.getDate();
        const hour = newDate.getUTCHours();
        const minute = newDate.getUTCMinutes();
        return {"year": year, "month": month, "day": day, "hour": hour, "minute": minute}
    }
    return(
        <div className="lg:ml-0 md:ml-30">
        <div className="flex flex-col items-center gap-3">
            <h2 className="translate-y-3 font-bold text-[20px] text-indigo-950 px-2 py-1 shadow border-b-2 border-b-indigo-950 rounded">Current Matches</h2>
            <div className="flex justify-between w-3/4 font-serif translate-y-2 text-[18px]">
                <h3>Home</h3>
                <h3>Away</h3>
            </div>
            {
                signedMatches.map((match, index)=>(
                    <div key={index} className={`flex gap-9 justify-between lg:w-150
                    border-b border-gray-500 py-2 shadow px-2 font-medium -translate-y-1`}>
                        <div className={`flex items-center justify-between lg:w-60  w-20`}>
                            <Link to={`/team/${match.homeTeam.id}`}><img className="w-12" src={match.homeTeam.crest}/></Link>
                            <div className="flex gap-10 justify-between">
                                <span className="lg:block hidden hover:text-blue-700 transition"><Link to={`/team/${match.homeTeam.id}`}>{match.homeTeam.shortName}</Link></span>
                                <span className={`${match.score.fullTime.home > match.score.fullTime.away ? 
                                    'rounded font-black text-blue-800': ''}`}>
                                    {match.score.fullTime.home}</span>
                            </div>
                        </div>
                        <div className="-translate-y-2 flex flex-col items-center gap-1 font-normal">
                            {getDate(match.utcDate)["year"]}-{getDate(match.utcDate)["month"]}-{getDate(match.utcDate)["day"]}
                            {
                            <div className="w-14 text-center">{match.status === "TIMED" ? `${getDate(match.utcDate)["hour"]} : ${getDate(match.utcDate)["minute"]}` : ""}</div>
                            }
                        </div>
                        
                        <div className={`flex items-center justify-between lg:w-60 w-20`}>
                            <div className="flex gap-10 justify-between">
                                <sapn className={`${match.score.fullTime.away > match.score.fullTime.home ? 
                                    'rounded font-black text-blue-800' : ''}`}>
                                    {match.score.fullTime.away}</sapn>
                                <span className="lg:block hidden  hover:text-blue-700 transition"><Link to={`/team/${match.awayTeam.id}`}>{match.awayTeam.shortName}</Link></span>
                            </div>
                            <Link to={`/team/${match.awayTeam.id}`}><img className="w-12" src={match.awayTeam.crest}/></Link>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )
}