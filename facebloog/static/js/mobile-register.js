
function logKey() {
    const clave = document.getElementById('passwordregister')
    const clave2 = document.getElementById('passwordconfirm')

    const texto = document.getElementById('create_page')
    if (clave.value == clave2.value) {
        texto.style.background = 'linear-gradient(to bottom, rgb(18 255 5 / 91%) 0%, rgb(26 138 24 / 92%) 100%)';
        texto.value = 'Crear Cuenta!'
    } else {
        texto.style.background = 'linear-gradient(to bottom, rgb(255 5 5 / 91%) 0%, rgb(138 24 24 / 92%) 100%)';
        texto.value = 'Las claves no coinciden!'
    }

}


window.onload = () => {

    document.addEventListener('keyup', logKey);

    let registar = document.getElementById('register-form')
    registar.addEventListener('onsubmit', clearForm)
    if (document.getElementById('popup-email').textContent != '') {
        document.getElementById('popup-wrapper').style.display = 'block'
    }

}