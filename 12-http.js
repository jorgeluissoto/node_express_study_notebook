const http = require('http');

const server = http.createServer((req,res) =>{
  if(req.url === '/'){
    res.write('Welcome to our home page');
    res.end();
  }
  else if(req.url === '/about'){
    res.write('Here is our short history');
    res.end();
  } else {
    res.setHeader('Content-type','text/html')
    res.end(`
    <h1>Oops!</h1>
    <p>We cant seem to find the page!</p>
    <a href="/">back home</a>`
  );
  }
})

server.listen(5000);