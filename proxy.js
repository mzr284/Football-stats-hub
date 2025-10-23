import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors())
app.get(`/api/:type/:id`, async (req, res) => {
    const type = req.params.type;
    const id = req.params.id;
    let url = "";
    if(type == "league"){
        url = `competitions/${id}/standings`;
    }
    if(type == "scorers"){
        url = `competitions/${id}/scorers`;
    }
    if(type == "team"){
        url = `teams/${id}`;
    }
    try{
        const response = await axios.get(`https://api.football-data.org/v4/${url}`,
            {headers: {"X-Auth-Token": "0d8978b04dbd4649b1463cb1667783f7"}})
            res.json(response.data)
        
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
})
app.listen(5000, ()=> console.log("Yes"))