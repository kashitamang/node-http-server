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

  },
  put(req, res) {
  },
  delete(req, res) {
  },
};
