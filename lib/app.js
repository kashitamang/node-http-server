import cats from './routes/cats.js';
import candies from './routes/candies.js';
import sauces from './routes/sauces.js';
import notFound from './not-found.js';
import bodyParser from './bodyParser.js'

const log = (...args) => console.log('[server]', ...args);

const routes = {
  cats,
  candies,
  sauces
};

export default async function (req, res) {

  const parts = req.url.split('/');
  log(parts);
  if (parts.length && parts[1] === 'api') {
    const httpMethod = req.method.toLowerCase();
    if (httpMethod === ('post' || 'put' || 'delete')){
      req.body = await bodyParser(req);
      log(req.body);
    } 
    
    const resource = routes[parts[parts.length - 1]];
    if (resource == null) {
      notFound(req, res);
      return;
    }

    const route = resource[req.method.toLowerCase()];
    if (route == null) {
      notFound(req, res);
      return;
    }

    route(req, res);
    return;
  } 

  notFound(req, res);
}
