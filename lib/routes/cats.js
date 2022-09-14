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
    cats.forEach((cat) => {
      cat['species'] = 'cat';
    });
    cats.push(req.body);
    console.log('req.body', req.body)

    res.statusCode = 200;
    res.end();
  },
  delete(req, res) {
    cats.pop();
    res.statusCode = 204;
    res.end();
  },
};


    // put(req, res) {
    //   //deletes last item 
    //   cats.pop();
    //   //pushes new item
    //   cats.push(req.body)
    //   console.log('req.body', req.body)
    //   res.statusCode = 200;
    //   res.end();
    // },