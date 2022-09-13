const sauces = [
    { 
      name: 'hot', 
      flavor: 'spicy' 
    },
    { 
      name: 'ranch', 
      flavor: 'cool' 
    },
    { 
      name: 'bbq', 
      flavor: 'smokey' 
    }
  ];
  
  export default {
    get(req, res) {
      res.write(JSON.stringify(sauces));
      res.statusCode = 200;
      res.end();
    },
    post(req, res) {
      sauces.push(req.body);
      console.log('req.body', req.body)
      res.statusCode = 200;
      res.end();
    },
    put(req, res) {},
    delete(req, res) {},
  };