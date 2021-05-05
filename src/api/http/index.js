const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');
const { isDate } = require('moment');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
/*
// app.get("/", function (req, res) {
//     return res.send('Date.now', isDate);
// }

// )*/


require('../controller/controller.js')(app);

app.listen(5000, () => console.log('server ta on'));




// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': '*',
//         'Access-Control-Allow-Headers': '*'
//     })

//     const { name, url, del } = URL.parse(req.url, true).query

//     // all resources
//     if (!name || !url)
//         return res.end(JSON.stringify(data))

//     //  return res.end("show all")
//     if (del) {

//         data.urls = data.urls.filter(item => String(item.url) !== String(url))
//         return writeFile((message =>
//             res.end(message)
//         ))

//     }


//     data.urls.push({ name, url })

//     return writeFile((message) => res.end(message))


// }).listen(5001, () => console.log('server 3000 ta on'))


// function writeFile(cb) {
//     return fs.writeFile(
//         path.join(__dirname, "urls.json"),
//         JSON.stringify(data, null, 2),
//         err => {
//             if (err) throw err
//             cb(JSON.stringify({ message: "ok" }))
//         }
//     )
// }