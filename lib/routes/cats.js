const cats = [
  { name: 'serious', type: 'cute' }
];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {},
};
