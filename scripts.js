

const key = "1e6dc3bb19083c3f24ae661f2d3b922e"

function colocarDadosNaTela(dados){
  console.log(dados)
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C "
  document.querySelector(".text-prevision").innerHTML = dados.weather[0].description
  document.querySelector(".humidity").innerHTML = "Umidade: " + dados.main.humidity + "%"
  document.querySelector(".img-prevision").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

  
  colocarDadosNaTela(dados)
  
}

function cliqueiNoBotao(){
  const cidade = document.querySelector(".input-city").value

  buscarCidade(cidade)
}