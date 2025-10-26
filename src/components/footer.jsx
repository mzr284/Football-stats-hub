import { Link } from "react-router-dom";
import '../styles/leagueLI.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    return(
        <div className="w-full h-170 translate-y-38 bg-[url('/src/assets/CL.jpg')] bg-cover bg-top flex gap-5 justify-center">
            <div className="text-white mt-14 -translate-x-78 font-medium text-[16px] flex gap-3">
                <span className="font-serif text-[15px]">Contact Me: </span>
                <div className="border-l border-blue-500 h-20 pl-2 flex flex-col gap-3">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="bg-blue-600 rounded-full p-1 mr-1"/>
                        <span className="mr-2">Email: </span>
                        <a href="mailto:mhmdzratpishh632@gmail.com" className=" font-normal">mhmdzratpishh632@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faTelegram} className="bg-blue-600 rounded-full p-1 mr-1"/>
                        <span className="mr-2">Telegram: </span>
                        <a href="https://t.me/Mmdamin848413" target="_blank" rel="noreferrer" className=" font-normal">https://t.me/Mmdamin848413</a>
                    </div>
                </div>
            </div>
            <div className="-translate-x-30  flex gap-5 justify-center">
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
               <div>
                   <ul className="flex mt-10 gap-4 pl-5 text-white">
                      <Link to={'/'}><li className="hover:text-blue-700">Home</li></Link>
                      <Link to={'/news'}><li className="hover:text-blue-700">News</li></Link>
                   </ul>
               </div>
            </div>
        </div>
    )
}