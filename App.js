const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use('/public', express.static('public'));

app.get("/", async function(req, res) {
    res.sendFile(__dirname + '/home.html');
});

const PORT = 5000;
app.listen(process.env.PORT || PORT, function() {
    console.log(`EC Web App listening at http://localhost:${PORT}`);
});