import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
export default function Header(){
    let [statusMenu, setStatus] = useState(false)

    return(
        <div className="flex justify-between w-full bg-gray-100 h-24 items-center px-5 shadow fixed z-1000">
            <img className="lg:w-20 w-12 hover:shadow cursor-pointer rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsXbxO0HxR8GKqSaty7zOwHchGiEJvgFRwg&s"/>
            <div className="flex lg:gap-10 gap-6 lg:text-[18px] text-[15px] justify-center lg:mr-20 cursor-pointer">
                <div>
                <a className="text-1xl flex justify-center items-center gap-1" onClick={() => {setStatus(!statusMenu)}}>Leauges<FaChevronDown className="text-xs" /></a>
                { statusMenu &&
                <ul className="mt-3 bg-gray-300 flex flex-col gap-3 px-2 py-2.5 justify-center absolute rounded lg:text-[17px]">
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