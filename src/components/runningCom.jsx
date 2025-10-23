export default function RunningCom({team}){
    const competitions = team.runningCompetitions
    return(
        <div className="flex flex-col items-center py-3 text-center">
            <div>
                <h2 className="font-bold text-xl text-blue-950 mb-3">Running Copetitions</h2>
            </div>
            <div className="flex gap-4">
                {
                    competitions.map((comp, index)=>(
                        <div key={index} className="flex flex-col items-center justify-center gap-3 w-27">
                            <img src={comp.emblem}/>
                            <h3 className="font-medium">{comp.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}