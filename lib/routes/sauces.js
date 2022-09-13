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
    post(req, res) {},
    put(req, res) {},
    delete(req, res) {},
  };