let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);

function validarFormulario() {
    var campo1 = document.getElementById('nombre1').value;
    var campo2 = document.getElementById('correo1').value;
    var campo3 = document.getElementById('psw1').value;
    
    if ((campo1 == '') || (campo2 == '') || (campo3=='')) {
        // Swal.fire({
        //     titleText:"Ha ocurrido un error!",
        //     text: "No puedes acceder con los campos vacíos.",
        //     icon:"warning",
        //     confirmButtonText:"OK!"
        //    });4
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration":   "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
          toastr["warning"]("Para poder registrarte, debes completar los campos.", "Advertencia!")
         return false;
        }else{
            document.getElementById('a-form').submit();
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-center",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration":   "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
              }
              toastr["success"]("Te has registrado correctamente, Verifica tu correo", "Registro Exitoso!")
        }
        // Otras validaciones...
        
        return true;
    }
function validarLogin() {
    var campo1 = document.getElementById('em').value;
    var campo2 = document.getElementById('ps').value;
    var millisecondsToWait = 2000;
    
    if ((campo1 == '') || (campo2 == '') ) {
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration":   "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
          toastr["info"]("Primero debes completar los campos ", "informacion")
          return false
    }
    // Otras validaciones...

    return true;
}

function submitForm(event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma convencional

    var formData = new FormData(document.getElementById('b-form')); // Obtiene los datos del formulario

    fetch('/login/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('¡Inicio de sesión exitoso!');
            window.location.replace('/index/'); // Redirige a la página de inicio
        } else {
            Swal.fire({
                titleText:"Error",
                text: "No puedes acceder con los campos vacíos",
                icon:"warning",
                confirmButtonText:"OK!"
            })
        }
    })
    
}
