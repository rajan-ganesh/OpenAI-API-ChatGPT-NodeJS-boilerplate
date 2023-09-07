//backend server
const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())

//Whitelisting URLs that can access the backend server
const allowedOrigins = process.env.REACT_APP_ALLOWED_ORIGIN_URLS.split(",");
app.use(cors({ origin: allowedOrigins }))

app.post('/completions', async (req, res) => {
    console.log("Backend Completions API called with request: ", req.body.message);
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_OPEN_AI_SECRET_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role : "assistant", content: req.body.message}],
            max_tokens: 100,
        })
    }
    try{
        console.log("options sent to chatgpt: ", options)
        const response = await fetch('https://api.openai.com/v1/chat/completions' ,options);
        const data = await response.json();
        console.log("sending from back end:",data);
        res.send(data);
    } catch (error){
        console.log(error);
    }
})
app.get('/', (req, res) => {
    res.send('Hello World from Back End!')

}) 

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
