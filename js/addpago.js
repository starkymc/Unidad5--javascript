const d = document,
$selectPrimary = d.getElementById("servicio");

function loadServicios(){
    fetch("http://127.0.0.1:8000/api/v2/payment/")
    .then(res => res.ok ? res.json(): Promise.reject(res))
    .then(json => {
        console.log(json);
        let $options = `<option value="">Elige un servicio</option>`;
        json.servicio.forEach(el => $options +=`<option value="${el}">${el}
        </option>`);
        $selectPrimary.innerHTML = $options;
    })
    .catch(err => {
        console.log(err);
        let message = err.statusText || "Ocurrio un error";
        $selectPrimary.nextElementSibling.innerHTML = `Error ${err.status}: $
        {message}`;
    });
}

d.addEventListener("DOMContentLoaded",loadServicios);