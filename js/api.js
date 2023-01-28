async function pegarProdutos() {
  const response = await fetch("http://localhost:3000/produtos");

  const data = await response.json();

  const stars = (numberStars) => {
    let star = '';

      for (let i = 0; i < 5; i++){
        if (i < numberStars) {
          star += '<i class="fa-solid fa-star" style="color: rgb(237, 85, 85);"></i>'
        }
        else {
          star+= '<i class="fa-regular fa-star" id="primeira-estrela" style="color: rgb(237, 85, 85);"></i>'
        }
      }
      return star
    
    
  }

  const convertMoney = (price) => {
    const formater = new Intl.NumberFormat('pt-BR', {style:'currency',currency:'BRL',});
    return formater.format(price);
  }

  const produtos = data.map((produto) => {
    return `<div class="box">
    <img src="${produto.imageUrl}" alt="" id="img-produto">
    <span id="nome-produto">${produto.productName}</span>
    <div class="estrelas" id="avaliacao-produto">${stars(produto.stars)} </div>
    <span id="preco-produto">por ${convertMoney(produto.price)}</span>
    <span id="parcela-produto">ou em ${produto.installments[0].quantity} de ${produto.installments[0].value}</span>
    <button class="botao-comprar">COMPRAR</button>
  </div>`;
  });

  document.querySelector(".container-produtos").innerHTML = produtos
}

pegarProdutos();

