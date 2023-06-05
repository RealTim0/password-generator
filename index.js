let paragraphEl = document.getElementById("paragraph-el")
function password(){
  passwordGenerator()
}
function passwordGenerator(){
  let pin = Math.floor(Math.random() * 10000001)
  paragraphEl.textContent = "Your Password: " + pin
}