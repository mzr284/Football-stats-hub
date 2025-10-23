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
    return(
        <div className="flex flex-wrap">
        </div>
    )
}