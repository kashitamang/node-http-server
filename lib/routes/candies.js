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
  post(req, res) {
    candies.push(req.body);
    // console.log('req.body', req.body)
    res.statusCode = 200;
    res.end();
  },
  put(req, res) {
    candies.forEach((candy) => {
      candy['sweet'] = 'true';
    });
    candies.push(req.body);
    // console.log('req.body', req.body)

    res.statusCode = 200;
    res.end();
  },
  delete(req, res) {
    candies.pop();
    res.statusCode = 204;
    res.end();
  },
};
