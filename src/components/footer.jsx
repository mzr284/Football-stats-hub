import { Link } from "react-router-dom";
import '../styles/leagueLI.css'

export default function Footer(){
    return(
        <div className="w-full h-180 translate-y-38 bg-[url('/src/assets/CL.jpg')] bg-cover bg-center flex gap-5 justify-center">
            <p className="text-white mt-14 -translate-x-110 font-medium text-[17px]"><span className="font-serif text-[15px]">Follow Me: </span> mhmdzratpishh632@gmail.com </p>
            <div className="pt-10 flex flex-col gap-4">
                <h4 className="text-white">Leagues</h4>
                <ul className="text-white flex flex-col gap-2">
                    <Link to={`/league/PL`}><li>Premiur Leauge</li></Link>
                    <Link to={`/league/BL1`}><li>Boundes Liga</li></Link>
                    <Link to={`/league/PD`}><li>La Liga</li></Link>
                    <Link to={`/league/SA`}><li>Seri A</li></Link>
                    <Link to={`/league/PPL`}><li>Liga Portugal</li></Link>
                    <Link to={`/league/FL1`}><li>Ligue 1</li></Link>
                </ul>
            </div>
            <div className="flex flex-col mt-10 gap-4 border-l border-blue-800 h-66 pl-5">
                <h4 className="text-white">Favorite Teams</h4>
                <ul className="text-white flex flex-col gap-2">
                    <Link to={'/team/86'}><li>Real Madrid</li></Link>
                    <Link to={'/team/81'}><li>Barcelona</li></Link>
                    <Link to={'/team/5'}><li>Bayern Munic</li></Link>
                    <Link to={'/team/109'}><li>Juventus</li></Link>
                    <Link to={'/team/66'}><li>Man united</li></Link>
                    <Link to={'/team/64'}><li>Liverpool</li></Link>
                    <Link to={'/team/524'}><li>PSG</li></Link>
                </ul>
            </div>
        </div>
    )
}