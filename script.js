function calcular() {
    let num1 = parseFloat(document.getElementById("primeiroNumeroInput").value);
    let num2 = parseFloat(document.getElementById("segundoNumeroInput").value);
  
    let res = document.getElementById("res");
  
    let somar = document.getElementById("somar").checked;
    let subtrair = document.getElementById("subtrair").checked;
    let divisao = document.getElementById("divisao").checked;
    let multiplicacao = document.getElementById("multiplicacao").checked;
  
    if (isNaN(num1) || isNaN(num2)) {
        
        res.innerHTML = "Valores inválidos";
    }

    else if (!somar && !subtrair && !divisao && !multiplicacao) 
    {
      res.innerHTML = "Nenhuma operação selecionada";
    } 
    else {

      if (somar) {

        res.innerHTML = num1 + num2;

      }
      else if (subtrair) 

      {
        res.innerHTML = num1 - num2;
      } 
      else if (divisao) 

      {
        res.innerHTML = num1 / num2;
      } 

      else if (multiplicacao) 
      {
        res.innerHTML = num1 * num2;
      }
    }
  }