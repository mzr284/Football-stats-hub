import { useEffect, useState } from "react"
import axios from "axios"

export default function DataTable({league, api}){
    let [clubs, setClubs] = useState([])
    let [loadStatus, setLoad] = useState(true)
    useEffect(()=>{
        const featchClubs = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/standings")
                const data = res.data
                setClubs(data.standings[0].table)         
            } catch (er) {
                console.error(er)
            } finally {
                setLoad(false)
            }
        };
        featchClubs()
    }, [])
    console.log(clubs)
    return(
    <div>
        <table className="bg-gray-100 text-[14px] rounded-xl">
            <div className="flex justify-between pr-2 pl-1 py-1 border-b border-gray-400 ">
                <div className="flex gap-1.5 font-serif">
                    <tr>Pos</tr>
                    <tr>team</tr>
                </div>
                <div>
                    <tr className="font-semibold">Pts</tr>
                </div>
            </div>
        <div className="overflow-y-auto h-93 rounded-xl">{
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
    </div>
    )
}




// import axios from 'axios';

// export default function TableRank({league, api}){
//     console.log(league, api)
//     const Leaguetable = ([leage, api]) =>{
//         let [clubs, setClubs] = useState([])
//         let [loadStatus, setLoad] = useState(true)
//         useEffect(()=>{
//             const fetchData = async () => {
//                 try {
//                     const res = await axios.get(`https://thingproxy.freeboard.io/fetch/${api}`,
//                         {headers: { 'X-Auth-Token': '0d8978b04dbd4649b1463cb1667783f7'}})
//                     const standings = res.data.standings[0].table;
//                     const formatClubs = standings.map((team) => ({
//                         name: team.team.name,
                        
//                     }))
//                     setClubs(formatClubs)
//                 } catch(er) {
//                     console.error("Error: ", er)
//                 } finally {
//                     setLoad(false)
//                 }
//             };
//             fetchData();
//         }, [api])
//         return(
//         <div className="w-1/4 ml-10 mt-15 rounded shadow py-4 px-3 text-center lg:text-[15px]">
//             ${leage}
//             {
//                 loadStatus ? (
//                     <div> Please Wait </div>
//                 ) : (
//                     <table>
//                         <tbody>
//                             {
//                                 clubs.map((club, index)=>{
//                                     <tr key={index}>
//                                         {club.logo && (
//                                             <img src={club.logo}/>
//                                         )}
//                                         <span>{club.name}</span>
//                                     </tr>

//                                 })
//                             }
//                         </tbody>
//                     </table>
//                 )
//             }
//         </div>
//     )
//     }
// }
