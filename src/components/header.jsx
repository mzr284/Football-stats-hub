import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import "../styles/leagueLI.css"
import { Link } from "react-router-dom"
export default function Header(){
    let [statusMenu, setStatus] = useState(false)

    return(
        <div className="flex justify-between w-full bg-gradient-to-r from-blue-600 to-blue-950 h-24 items-center px-5 shadow fixed z-1000">
            <Link className="text-1xl hover:text-blue-500 transition" to={'/'}><img className="lg:w-25 w-12 cursor-pointer rounded-full transition p-0" 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAS1BMVEVHcEwBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFYBAFbquPT/AAAAGHRSTlMASRHSr2cKKRqiNHGJBX7iW5i+PchU9u2XKnODAAAAAWJLR0QAiAUdSAAAAelJREFUWIXtVcmOpTAMNNmclSxs/v8vHYeeQ5+eSGakVkuUIAuSK45dNgAvXrz4BfDLoZT9B4JIRDng7PFCq0wJIEklJ+wNlQS43+tGdZxAxj7qe30SraP2SOY23QCWVW9UzSDB4u+JLnW7H8qoB9B9Rsdp+ArDMkxwulYy21O4t3rUXhFx/lNnOLoDTgwSeFJ9una2PTzKczQNVt7iaV3IpvsxaM8uQHf979WJ4jBBd8LIrwiueR3PAogt34HkbPqJ4xlaci32k8lvcwxgaRHHRfmYtGcg4HQ/+B+wa2Sss01NuLBxFWsdhnV8Y6sFtLLpZDG5mTSIYFRSCyJogqlb+OYwchSWZZ8xZ6R496ESJ5XYVfB9eoSqloXvzg3FQtD9cYpfm1RDDiUWo9SnunIroFaGAHMFR0AOeOC93ATBThii+hhQyew6RwIXCFRtsQHVnUlOBEpOXwHqx1/EQeUI/VSJJ+6WbIbeiigFWSTskEPZVvUpBrYkiwYFF5HFZIVPyH8Ufv3Rm1QS6XjSWoSBZCzrt0vYezCCV8IKeCrp3kZIR27NFvJa7epAAoUIT+tqZ+mT47yFiBkMhAqKPzzXk+wEnK7LXZzCVpig9Q/pKUFVzexObQV2EaTzRu4FmmuPPXjx4sUP4A9eNhYD8q4GggAAAABJRU5ErkJggg=="/>
            </Link>
            <div className="flex lg:gap-10 gap-6 lg:text-[18px] text-[15px] justify-center lg:mr-20 cursor-pointer text-white">
                <div>
                <a className="text-1xl flex justify-center items-center gap-1 hover:text-blue-500 transition" onClick={() => {setStatus(!statusMenu)}}>Leauges<FaChevronDown className="text-xs" /></a>
                { statusMenu &&
                <ul className="li-container mt-3 bg-gradient-to-r from-blue-700 to-blue-900 flex flex-col gap-3 px-2 py-2.5 justify-center font-serif absolute rounded lg:text-[16px]">
                    <Link to={`/league/PL`}><li>Premiur Leauge</li></Link>
                    <Link to={`/league/BL1`}><li>Boundes Liga</li></Link>
                    <Link to={`/league/PD`}><li>La Liga</li></Link>
                    <Link to={`/league/SA`}><li>Seri A</li></Link>
                    <Link to={`/league/PPL`}><li>Liga Portugal</li></Link>
                    <Link to={`/league/FL1`}><li>Ligue 1</li></Link>
                </ul>
                }
                </div>
                <Link className="text-1xl hover:text-blue-500 transition">Favorite Clubs</Link>
                <Link className="text-1xl hover:text-blue-500 transition" to={'/news'}>News</Link>
                <Link className="text-1xl hover:text-blue-500 transition" to={'/'}>Home</Link>
            </div>
        </div>
    )
}