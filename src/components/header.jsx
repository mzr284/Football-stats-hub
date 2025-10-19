import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
export default function Header(){
    let [statusMenu, setStatus] = useState(false)

    return(
        <div className="flex justify-between w-full bg-gray-100 h-24 items-center px-5 shadow">
            <img className="w-20 hover:shadow cursor-pointer rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsXbxO0HxR8GKqSaty7zOwHchGiEJvgFRwg&s"/>
            <div className="flex gap-10 justify-center mr-20 cursor-pointer">
                <div>
                <a className="text-1xl flex justify-center items-center gap-1" onClick={() => {setStatus(!statusMenu)}}>Leauges<FaChevronDown className="text-xs" /></a>
                { statusMenu &&
                <ul className="mt-3 bg-gray-300 flex flex-col gap-3 px-2 py-2.5 justify-center absolute rounded ">
                    <li>Premiur Leauge</li>
                    <li>Bondes Liga</li>
                    <li>Laliga</li>
                </ul>
                }
                </div>
                <a className="text-1xl">Favorite Clubs</a>
                <a className="text-1xl">Transfers</a>
                <a className="text-1xl">Live Results</a>
            </div>
        </div>
    )
}