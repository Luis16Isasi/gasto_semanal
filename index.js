const express = require('express');
const path = require('path');


const app = express()

const PORT = process.env.PORT || 3000;


app.use('/css', express.static(path.join(__dirname, './css')))
app.use('/js', express.static(path.join(__dirname, './js')))
app.use('/img', express.static(path.join(__dirname, './img')))

app.get('*', (req, res) => {
    const indexPath = path.resolve(__dirname, './index.html');

    res.sendFile(indexPath);
});

app.listen(PORT, () => {
    console.log('> Application is running in the port: 3000');
})
