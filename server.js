


const next = require('next')
const express = require('express');
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)


app.prepare().then(() => {

  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res)
  })




  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})
.catch((ex)=> {
    console.error(ex.stack);
    process.exit(1)
})







