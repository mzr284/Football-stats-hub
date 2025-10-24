import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import "../styles/leagueLI.css"
import { Link } from "react-router-dom"
export default function Header(){
    let [statusMenu, setStatus] = useState(false)

    return(
        <div className="flex justify-between w-full bg-gray-100 h-24 items-center px-5 shadow fixed z-1000">
            <img className="lg:w-20 w-12 hover:shadow cursor-pointer rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsXbxO0HxR8GKqSaty7zOwHchGiEJvgFRwg&s"/>
            <div className="flex lg:gap-10 gap-6 lg:text-[18px] text-[15px] justify-center lg:mr-20 cursor-pointer">
                <div>
                <a className="text-1xl flex justify-center items-center gap-1 hover:text-blue-700 transition" onClick={() => {setStatus(!statusMenu)}}>Leauges<FaChevronDown className="text-xs" /></a>
                { statusMenu &&
                <ul className="li-container mt-3 bg-gray-200 flex flex-col gap-3 px-2 py-2.5 justify-center font-serif absolute rounded lg:text-[16px]">
                    <Link to={`/league/PL`}><li>Premiur Leauge</li></Link>
                    <Link to={`/league/BL1`}><li>Boundes Liga</li></Link>
                    <Link to={`/league/PD`}><li>La Liga</li></Link>
                    <Link to={`/league/SA`}><li>Seri A</li></Link>
                    <Link to={`/league/PPL`}><li>Liga Portugal</li></Link>
                    <Link to={`/league/FL1`}><li>Ligue 1</li></Link>
                </ul>
                }
                </div>
                <Link className="text-1xl hover:text-blue-700 transition">Favorite Clubs</Link>
                <Link className="text-1xl hover:text-blue-700 transition">News</Link>
                <Link className="text-1xl hover:text-blue-700 transition" to={'/'}>Home</Link>
            </div>
        </div>
    )
}