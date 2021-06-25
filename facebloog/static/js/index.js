
window.onload = () => {
    if (screen.width <= 500) {
        window.location = window.location['href'] + '/mobile';
    } else {
        document.getElementById('body').style.display = 'block';
    }

    document.addEventListener('keydown', event => {
        if (event.key=='Enter'){
            elementId = event.path[0].getAttribute('id')
            if (elementId == 'name'){
                document.getElementById('lastName').focus()
            } else if (elementId == 'lastName'){
                document.getElementById('username').focus()
            } else if (elementId == 'username'){
                document.getElementById('passwordregister').focus()
            } else if (elementId == 'passwordregister'){
                document.getElementById('passwordconfirm').focus()
            } else if (elementId == 'passwordconfirm'){
                name = document.getElementById('name').value
                lastName = document.getElementById('lastName').value
                username = document.getElementById('username').value
                passwordregister = document.getElementById('passwordregister').value
                if ( name && lastName && username && passwordregister){
                    registrarUsuario({
                        name,
                        lastName,
                        username,
                        passwordregister
                    })
                }
            }
            event.preventDefault()
        }
    })

    document.addEventListener('click', event =>{
        elementId = event.path[0].getAttribute('id')
        if (elementId=='crearCuenta'){
            name = document.getElementById('name').value
            lastName = document.getElementById('lastName').value
            username = document.getElementById('username').value
            passwordregister = document.getElementById('passwordregister').value
            if ( name && lastName && username && passwordregister){
                registrarUsuario({
                    name,
                    lastName,
                    username,
                    passwordregister
                })
            }
        }
    })

}


function clearForm() {
    document.getElementById('name').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('emailregister').value = ''
    document.getElementById('passwordregister').value = ''
    document.getElementById('passwordconfirm').value = ''
}


function registrarUsuario(user){

    fetch(`http://localhost:3000/api/Auth/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(user),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json"
        })
    }).then((response) => {if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status code: ${response.status}`);
        return;
    }
    response.json().then(function (data) {
        console.log(data)
    });
    }).catch(function (error) {
        console.log("Fetch error: " + error);
    });


    console.log('registrando')
    clearForm()
}


/*
<div id='popup-wrapper' class="popup-wrapper">
    <div class="popup">
        <div class="popup-close">x</div>
        <div class="popup-content">
            <h3>Bienvenido a Facebloog</h3>
            <h2></h2>
            <p>¡Gracias por registrarse!</p>
            <a id="volver" href="#" target="_blank">Volver</a>
        </div>
    </div>
</div>
*/