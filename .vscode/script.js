function toggleMode(){
  const html = document.documentElement // documentElement seria o HTML do codigo
  html.classList.toggle('light')
  //if(html.classList.contains("light")){
  //  html.classList.remove("light")
  //} 
  //else{
  //  html.classList.add("light")
  //}
  
  // pegar a tag img
  const img = document.querySelector("#profile img")

  if(html.classList.contains("light")){ // Se estiver no modo light
    // Adiciona imagem do modo light
    img.setAttribute('src', './assets/parque-mirante.jfif')
  }
  else { // Else se nao estiver no modo light
    img.setAttribute('src', './assets/parque-mirante2.png')
  }
}

