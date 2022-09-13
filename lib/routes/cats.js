const cats = [
  { 
    name: 'serious', 
    chonk: 'true' 
  },
  { 
    name: 'richard', 
    chonk: 'false' 
  },
  { 
    name: 'angelica', 
    chonk: 'true' 
  }
];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.statusCode = 200;
    res.end();
  },
  post(req, res) {
    cats.push(req.body);
    console.log('req.body', req.body)
    res.statusCode = 200;
    res.end();
  },
  put(req, res) {
  },
  delete(req, res) {
  },
};
