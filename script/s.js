// script.js
function adicionarItem() {
    const texto = document.getElementById("inputItem").value;
    const tipo = document.getElementById("tipo").value;
  
    if (!texto) return;
  
    if (tipo === "momento") {
      const div = document.createElement("div");
      div.textContent = texto;
      document.getElementById("galeriaMomentos").appendChild(div);
    } else {
      const li = document.createElement("li");
      li.textContent = texto;
      document.getElementById("listaPlanos").appendChild(li);
    }
  
    document.getElementById("inputItem").value = "";
  }
  
=======
// script.js
function adicionarItem() {
    const texto = document.getElementById("inputItem").value;
    const tipo = document.getElementById("tipo").value;
  
    if (!texto) return;
  
    if (tipo === "momento") {
      const div = document.createElement("div");
      div.textContent = texto;
      document.getElementById("galeriaMomentos").appendChild(div);
    } else {
      const li = document.createElement("li");
      li.textContent = texto;
      document.getElementById("listaPlanos").appendChild(li);
    }
  
    document.getElementById("inputItem").value = "";
  }
  
>>>>>>> 0eecdefd0dd3efd994d5691283bdb252861f850c
