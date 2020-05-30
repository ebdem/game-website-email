const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const PORT = 3000;

const sendEmail = require('./utils/sendEmail');

app.use(express.json())

app.post('/send_email', async function(req, res) {

    const {email, name, surname, message} = req.body;

    if (!email || !name || !surname || !message){
        return res.json({
            ok: false,
            desc: "Fields must be filled."
        })
    }

    await sendEmail(email, name, surname, message)

    return res.json({
        ok: true,
        desc: "Email sent!"
    })

})


app.listen(PORT, function () {
    console.log("Server is listening at 3000");
})