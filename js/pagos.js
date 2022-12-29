const main = document.querySelector('#row');


async function getTask() {
    const id = new URLSearchParams(window.location.search).get("id")
    const extra = id ? `${id}` : "";

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/v2/payment/${extra}`
        );
        const data = await response.json();
        id ? renderTodo(data) : renderTasks(data);
    } catch (error) {
        console.log(error);
    }
}

//http://127.0.0.1:8000/api/v1/pagos/
//http://127.0.0.1:8000/api/v2/payment/${extra}

function renderTasks(data) {
    main.innerHTML = "";
    main.innerHTML += ``;
    data.results.forEach((task) => {
        main.innerHTML += `
        <tr>
        <td>${task.servicio}</td>
        <td>${task.PaymentDate}</td>
        <td>S/ ${task.monto}</td>
        </tr>
       `;
    });
}


getTask();
