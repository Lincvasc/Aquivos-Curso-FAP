/* Implemente e trate uma conexão com o seu banco de dados, usando JavaScript. Caso a conexão com o banco tenha sucesso, ele deve retornar uma frase positiva. Se isso não ocorrer, retorne uma frase informando o erro.
 */

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "seu_host",
  user: "seu_usuario",
  password: "sua_senha",
  database: "seu_banco_de_dados",
});

con.connect(function (err) {
  if (err) {
    console.error("Erro na conexão: " + err.stack);
    return;
  }
  console.log("Conexão bem-sucedida!");
});
