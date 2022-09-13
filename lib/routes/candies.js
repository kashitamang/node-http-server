const candies = [
  { 
    name: 'big hunk', 
    flavor: 'nougat' 
  },
  { 
    name: 'pay day', 
    flavor: 'peanut caramel' 
  },
  { 
    name: 'hersheys', 
    flavor: 'chocolate' 
  }
];

export default {
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.statusCode = 200;
    res.end();
  },
  post(req, res) {},
  put(req, res) {},
  delete(req, res) {},
};
