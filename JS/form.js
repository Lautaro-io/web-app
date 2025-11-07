const form = document.getElementById("form-container")
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if ( !nombre || !email|| !mensaje){
        alert("Completa todos los campos!");
        return;
    }

    alert("Mensaje enviado con exito!");
    form.reset()
})


const hamburger = document.getElementById("hamburger");
const navContent = document.getElementById("nav-content");

hamburger.addEventListener("click", () => {
  navContent.classList.toggle("active");
});
