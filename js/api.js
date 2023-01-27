
async function pegarProdutos() {
  const response = await fetch("http://localhost:3000/produtos");

  const data = await response.json();

  const postContainer = document.querySelector(".container-teste");


  data.map((post) => {
    const div = document.createElement("div");
    const nome = document.createElement("span");

    nome.innerText = post.productName;

    div.appendChild(nome)

    postContainer.appendChild(div);
    
  })
}

pegarProdutos();

