import Ranking from "../components/ranking";

export default function Home(){
    return(
        <div className="flex flex-col items-center translate-y-23">
            <h2 className="font-bold text-center mt-6 text-2xl bg-gray-100 rounded max-w-xl border-blue-500 border-b-2 p-2 shadow">Leagues Table</h2>
            <div className="flex-wrap flex gap-10 px-15 mt-5 items-center justify-between pb-10">
                <Ranking league={"PL"} ComoleteName={"Primier League"}/>
                <Ranking league={"SA"} ComoleteName={"Seri A"}/>
                <Ranking league={"FL1"} ComoleteName={"Ligue 1"}/>
                <Ranking league={"PD"} ComoleteName={"La Liga"}/>
                <Ranking league={"PPL"} ComoleteName={"Liga Portugal"}/>
                <Ranking league={"BL1"} ComoleteName={"Boundes Liga"}/>
            </div>
        </div>
    )
}