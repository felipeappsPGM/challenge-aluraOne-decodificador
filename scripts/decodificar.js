let btn_criptografar = document.getElementById("criptografar");
let texto_entrada = document.getElementById("texto_entrada");
let btn_descriptografar = document.getElementById("descriptografar");
let texto_resultado = document.getElementById("text_resultado");
let container_decod = document.getElementById("id_section__decodificacao");
let container_res = document.getElementById("id_section__resultado");
let btn_copiar = document.getElementById("btn_copiar");
let container_saida = document.getElementById("id_saida");

btn_criptografar.addEventListener("click", function (e) {
  e.preventDefault();
  texto = texto_entrada.value;
  console.log(texto);

  // Define uma função de substituição
  function substituicao(match) {
    switch (match) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return match;
    }
  }

  var textoSubstituido = texto.replace(/a|e|i|o|u/g, substituicao);
  console.log(textoSubstituido);

  container_decod.style.display = "none";
  container_res.style.justifyContent = "space-between";
  container_res.style.display = "flex";

  texto_entrada.value = "";
  texto_resultado.textContent = textoSubstituido;
});

btn_descriptografar.addEventListener("click", function (e) {
  e.preventDefault();
  texto = texto_entrada.value;
  console.log(texto);

  function substituicao(match) {
    switch (match) {
      case "ufat":
        return "u";
      case "ober":
        return "o";
      case "imes":
        return "i";
      case "ai":
        return "a";
      case "enter":
        return "e";
      default:
        return match;
    }
  }

  var textoSubstituido = texto.replace(
    /ufat|ober|imes|ai|enter/g,
    substituicao
  );
  console.log(textoSubstituido);

  container_decod.style.display = "none";
  container_res.style.display = "flex";

  texto_entrada.value = "";
  texto_resultado.textContent = textoSubstituido;
});

btn_copiar.addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard
    .writeText(texto_resultado.textContent)
    .then(function () {
      console.log("Texto copiado para a área de transferência");
    })
    .catch(function (error) {
      console.error("Erro ao copiar o texto: ", error);
    });
  container_decod.style.display = "flex";
  container_res.style.display = "none";
});
