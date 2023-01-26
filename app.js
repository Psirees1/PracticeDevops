
const fs = require('fs');
const http = require("http");
const PORT = 8080;
const host = "localhost";
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', "text/html");
    let path = './views/'
    if (req.url === '/') {
        path = path + 'index.html';
    } else if (req.url === '/contact') {
        path = path + 'contact.html';
    } else if (req.url === "/about") {
        path = path + 'about.html';
    } else {
        res.statusCode = 404;
        path = path + '404.html'
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data);
            res.end;
        }
    })
}
)

//adding a comment to check the second commit

server.listen(PORT, host, () => {
    console.log("The server is running On PORT:", PORT)
})
