import axios from "axios";
import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom"
import TeamData from "../components/teamData";

export default function TeamInfo(){
    const { teamId } = useParams();
    let [team, setTeam] = useState({});
    let [loadStatus, setLoad] = useState(true);
    let [errorStatus, setError] = useState(false);
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`http://localhost:5000/api/team/${teamId}`)
                const dataT = res.data;
                setTeam(dataT)
            } catch (er){
                setError(true)
            } finally {
                setLoad(false);
            }
        }
        fetchData();
    }, [])
    console.log(team)
    return(
        <div className="translate-y-25">
        { !errorStatus ? !loadStatus ?
        <TeamData team={team}/>
        : 
        <div>
            <div className="flex items-center text-center font-bold text-xl text-blue-900 p-5"><h3 className="text">Data is Loading ...</h3></div>
        </div>
        :
        <div>
            <div className="flex flex-col gap-10 items-center text-center">
                <h3 className="font-bold text-xl text-blue-900">Oops! Something went wrong, Please check your connection</h3>
                <p className="font-medium"><span className="font-bold">Warnnig:</span> Due to API limits, the data not updata instantly. Please refresh every 1 minut to get results.</p>
            </div>
        </div>
        }
        </div>
    )
}