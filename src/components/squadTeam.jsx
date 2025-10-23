export default function SquadTeam({squad}){
    const positions = {
        "Goalkeeper":"GK",
        "Centre-Back": "CB",
        "Right-Back": "RB",
        "Left-Back": "LB",
        "Defensive Midfield": "CDM",
        "Midfield": "CM",
        "Central Midfield": "CM",
        "Attacking Midfield": "CAM",
        "Left Winger": "LW",
        "Right Winger": "RW",
        "Centre-Forward": "CF",
        "Offence": "FW",
    }
    const getAge = (birthDay) => {
        let birth = new Date(birthDay);
        let today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        let month = today.getMonth() - birth.getMonth();
        if(month < 0 || (month === 0 && today.getDate() < birth.getDate())){
            age--;
        }
        return age;
    }
    return(
        <div className="flex items-center flex-col gap-5 mt-2">
            <div className="px-2 py-1 shadow border-b-2 border-b-indigo-950 rounded">
              <h2 className="font-bold text-[20px] text-indigo-950">Players</h2>
            </div>
            <div>
            <div className="flex justify-between gap-25 w-119 bg-indigo-900 text-white
            px-1 py-0.5">
                <span className="font-bold">name</span>
                <div className="flex justify-between gap-19">
                    <span className="translate-x-2">Pos</span>
                    <span className="-translate-x-5">Age</span>
                    <span>Nation</span>
                </div>
            </div>
            <div className="flex flex-col bg-gray-100 gap-1">
                {
                    squad.map((player, index)=>(
                        <div key={index} className="flex gap-10 justify-between py-1 px-2 bg-gray-200 shadow
                        border-b border-gray-600 rounded">
                            <h4 className="font-medium">{player.name}</h4>
                            <div className="flex gap-3 w-60 justify-between">
                                <span className="w-6">{positions[player.position]}</span>
                                <span className="w-5">{getAge(player.dateOfBirth)}</span>
                                <span className="w-21 text-right">{player.nationality}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    )
}