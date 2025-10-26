import "../styles/newsResponsive.css"

export default function NewsPage(){
    return(
        <div className="news flex translate-y-25 flex-col gap-14 pt-15 px-15">
            <div className="news-container flex gap-10 bg-blue-50 py-10 px-7 rounded border items-center border-blue-400">
                <img src="https://editorial.uefa.com/resources/029d-1ec96c30aa3e-9f541a4aac69-1000/format/wide1/fbl-award-ballon_d_or-2025.jpeg?imwidth=2048"
                className="w-125 h-80 rounded-[15px]"/>
                <div className="text-container flex flex-col gap-3">
                    <h2 className="font-bold text-[25px]">Ousmane Dembélé wins 2025 Men's Ballon d'Or</h2>
                    <p className="text-news text-blue-950 text-[19px]">Paris Saint-Germain and France forward Ousmane Dembélé has won the 2025 Men's Ballon d'Or.
                       The 28-year-old was named ahead of Lamine Yamal and Paris club-mate Vitinha to complete a memorable campaign. 
                       Dembélé was named UEFA Champions League Player of the Season as Paris claimed the title for the first time. He also played a key role in a domestic double, 
                       ending 2024/25 with an incredible haul of 37 goals and 15 assists.
                       <br/>
                       <br/>
                       Other men's prizes awarded in Paris included the Men's Kopa Trophy (best young player), Men's Yashin Trophy (best goalkeeper), Men's Johan Cruyff Trophy (best coach in club/national team)
                       , Men's Gerd Müller Trophy (top scorer in club/national team) and the Men's Club of the Year.
                    </p>
                </div>
            </div>
            <div className="news-container flex gap-10 bg-blue-50 py-10 px-7 rounded border items-center border-blue-400">
                <img src="https://editorial.uefa.com/resources/029e-1f0733f327eb-378c7b99dccb-1000/format/wide1/ucl_24x27_-_label_frame_-_email.jpeg?imwidth=2048"
                className="w-125 h-80 rounded-[15px]"/>
                <div className="text-container flex flex-col gap-3">
                    <h2 className="font-bold text-[25px]">In The Zone: Madrid's individual magic proves decisive</h2>
                    <p className="text-news text-blue-950 text-[19px]">UEFA Technical Observer Rafa Benítez analyses how the likes of Vinícius Júnior,
                         Jude Bellingham, Kylian Mbappé and Arda Güler punctured Juventus' resistance.
                       <br/>
                       <br/>
                       "The way to attack a line of five is with individual ability." That was the view of UEFA Technical Observer Rafa Benítez following Real Madrid's 1-0 victory over Juventus on Wednesday.
                        On a night when Juventus defended deep with three centre-backs and shut down space well, Madrid needed sparks of individual brilliance to open them up
                         – as we explore in the following analysis, brought to you by FedEx.
                    </p>
                </div>
            </div>
            <div className="news-container flex gap-10 bg-blue-50 py-10 px-7 rounded border items-center border-blue-400">
                <img src="https://editorial.uefa.com/resources/029e-1f071ce57ee8-e90d27bdd116-1000/format/wide1/fc_barcelona_v_olympiacos_fc_-_uefa_champions_league_2025_26_league_phase_md3.jpeg?imwidth=2048"
                className="w-125 h-80 rounded-[15px]"/>
                <div className="text-container flex flex-col gap-3">
                    <h2 className="font-bold text-[25px]">Every UEFA Champions League Player of the Week</h2>
                    <p className="text-news text-blue-950 text-[19px]">Keep track of every UEFA Champions League Player of the Week in 2025/26
                       <br/>
                       <br/>
                       Player of the Week, presented by PlayStation, is voted for by you every UEFA Champions League matchday
                       – check out which players have taken home every award in the 2025/26 season.
                    </p>
                </div>
            </div>
        </div>
    )
}