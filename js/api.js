function pegarProdutos() {
  fetch("http://localhost:3000/produtos")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

pegarProdutos();
