import axios from "axios";
import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom"

export default function TeamData({team}){
    console.log(team)
    return(
        <div className="flex flex-col bg-gray-100 px-3 py-5 gap-3 w-60">
            <div className="mb-6 flex flex-col gap-1">
                <h2 className="font-bold text-blue-950 text-[18px]">Team:</h2>
                <img src={team.crest} className="w-20"/>
                <h2 className="font-medium">{team.name}</h2>
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <h2 className="font-bold text-blue-950 text-[18px]">National:</h2>
                <img className="w-20" src={team.area.flag}/>
                <h3 className="font-medium">{team.area.name}</h3>
            </div>
            <div className="">
                <h2 className="font-bold text-[18px] text-blue-950">Coach:</h2>
                <h4 className="font-medium mb-3">Mr. {team.coach.name}</h4>
                <h4 className="font-medium">Natioal: </h4>
                <h4 className="font-medium">{team.coach.nationality}</h4>
                <div className="mt-4">
                    <h4 className="font-bold mb-1">Contract: </h4>
                    <div className="flex flex-col">
                    <span>Start:  <span className="font-medium">{team.coach.contract.start}</span></span>
                    <span>Until:  <span className="font-medium">{team.coach.contract.until}</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}