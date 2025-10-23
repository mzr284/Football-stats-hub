import axios from "axios";
import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom"

export default function TeamInfo(){
    const { teamId } = useParams();
    let [team, setTeam] = useState({});
    let [loadStatus, setLoad] = useState(true);
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`http://localhost:5000/api/team/${teamId}`)
                const dataT = res.data;
                setTeam(dataT)
            } catch (er){
                console.log(er)
            } finally {
                setLoad(false);
            }
        }
        fetchData();
    }, [team])
    return(
        <div className="translate-y-25">
            {!loadStatus ? <div>
            <div>
                <img className="w-20" src={team.area.flag}/>
                <h3>{team.area.name}</h3>
            </div>
            <div>
                <img src={team.crest} className="w-20"/>
                <h2>{team.name}</h2>
            </div>
            <div className="">
                <h4>{team.coach.name}</h4>
                <span>{team.coach.nationality}</span>
                <div>
                    <h4>Contract</h4>
                    <span>Start: <span>{team.coach.contract.start}</span></span>
                    <span>Until: <span>{team.coach.contract.until}</span></span>
                </div>
            </div></div> : 
            <div>
                <div className="flex items-center text-center font-bold text-xl text-blue-900 p-5"><h3 className="text">Data is Loading ...</h3></div>
            </div>
            }
        </div>
    )
}