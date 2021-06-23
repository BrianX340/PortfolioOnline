




window.onload = () => {


    document.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            if (e['path']['0']['className'] == 'buscar') {
                let usuarioBuscado = document.getElementById('busqueda').value
                iniciarBusqueda(usuarioBuscado)
            }
        }
    })

}

function iniciarBusqueda(usuarioBuscado) {
    let entry = {
        usuarioBuscado: usuarioBuscado.toLowerCase()
    };
    fetch(`${window.origin}/iniciar-busqueda`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(entry),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json"
        })
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log(`Looks like there was a problem. Status code: ${response.status}`);
                return;
            }
            response.json().then(function (data) {
                if (data['usuarios'] != 'none') {
                    bloquehtml = document.getElementById('usuarios')


                    let bloque_codigo = ""
                    for (let usuario in data['usuarios']) {

                        let name = capitalize(data['usuarios'][usuario]['name'])
                        let lastname = capitalize(data['usuarios'][usuario]['lastname'])
                        let email = data['usuarios'][usuario]['email']
                        let image_name = data['usuarios'][usuario]['imagename']
                        let p1 = "<div class='result'><div style='background-image: url(WINDOWSORIGIN/downloader/URLIMG)'></div><div><a href='#' >NAME LASTNAME</a></div></div>".replace('NAME', name).replace('LASTNAME', lastname).replace('URLIMG', image_name).replace('WINDOWSORIGIN', window.origin)

                        bloque_codigo = bloque_codigo + p1

                    }
                    bloquehtml.innerHTML = bloque_codigo
                    document.getElementById('busqueda').value = ''
                    document.getElementById('resultados').style.display = 'flex'
                } else {
                    bloquehtml = document.getElementById('usuarios')
                    bloquehtml.innerHTML = "<div class='result'><a>No se encontraron usuarios con el nombre: INSERTNAME</a></div>".replace("INSERTNAME", usuarioBuscado)
                    document.getElementById('busqueda').value = ''
                    document.getElementById('resultados').style.display = 'flex'
                }
            });
        })
        .catch(function (error) {
            console.log("Fetch error: " + error);
        });
    /*aca limpiamos el campo*/
}

function capitalize(string) {
    string = string[0].toUpperCase() + string.slice(1);
    return string;
}

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