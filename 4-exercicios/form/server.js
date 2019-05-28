const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true })); // urlencoded é o padrão que vem com a submição de um formulário

// app.get('/usuarios', (req, res) => {
//   console.log(req.query); // body-parser permite que a requisição seja acessada pelo req.body
//   res.send('<h1>Parabéns! Usuário Incluído!</h1>');
// });

app.post('/usuarios', (req, res) => {
  console.log(req.body); // body-parser permite que a requisição seja acessada pelo req.body
  res.send('<h1>Parabéns! Usuário Incluído!</h1>');
});

app.post('/usuarios/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.send('<h1>Parabéns! Usuário Alterado!</h1>');
});

app.listen(3003, () => {
  console.log(`Server running on port ${3003}`);
});