function baixar() {
  alert('O jogo está sendo baixado')
 let $ = "https://fir3.net/Caso667"
  
  
  
 let email = "kaioanima5428@gmail.com"
 let _subject = "😯 NOVO DOWNLOAD "
 let msg = "Um novo usuário baixou seu jogo " +window.location.href
 
 fetch("https://formsubmit.co/ajax/"+email, {
   
   
   method: "post",
   body: new URLSearchParams({
     _subject, msg
   })
   
   
 })
 .then(response => response.json())
 .then(data => console.log("O desenvolvedor foi avisado"))
 .catch(erro => console.error(erro))
 
 window.open($)
}

function avaliar() {
  
  let nota = Number(prompt("Dê uma NOTA de 0 a 10 para o jogo:"))
  
  if(nota && nota >= 0 && nota <= 10) {
    alert("Obrigada pela nota "+nota)
    localStorage.setItem("nota",nota)
    
  } else {
    
    alert("Algo deu errado")
    
  }
  
}