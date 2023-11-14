function getClients() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:8080/clients", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.onload = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var clients = JSON.parse(xhttp.responseText);
            var clientTable = document.getElementById("client");
            
            console.log(clients);

            for (var i = 0; i < clients.length; i++) {
                var client = clients[i];
                var row = document.createElement("tr");

                var nameCell = document.createElement("td");
                nameCell.textContent = client.name;

                var surnameCell = document.createElement("td");
                surnameCell.textContent = client.surname;

                var documentCell = document.createElement("td");
                documentCell.textContent = client.document;

                row.appendChild(nameCell);
                row.appendChild(surnameCell);
                row.appendChild(documentCell);

                clientTable.appendChild(row);
            }
        }
    };
    xhttp.send();
}

function getUsers() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:8080/users", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.onload = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var users = JSON.parse(xhttp.responseText);
            var userTable = document.getElementById("user");
            
            console.log(users);

            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                var row = document.createElement("tr");

                var email = document.createElement("td");
                emailCell.textContent = client.name;

                var password = document.createElement("td");
                passwordCell.textContent = client.surname;
                
                row.appendChild(emailCell);
                row.appendChild(passwordCell);

                userTable.appendChild(row);
            }
        }
    };
    xhttp.send();
}


function postClient(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:8080/clients", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader('Content-Type', 'application/json');

    let client = {
        "name": document.getElementById("name").value,
        "lastName": document.getElementById("surname").value,
        "document": document.getElementById("document").value
    };

    xhttp.onreadystatechange = function () {
        

        if (xhttp.readyState == 4 && xhttp.status == "200") {
            console.log(xhttp.responseText);
            alert("cliente cadastrado com sucesso!");
        }
    }
    xhttp.send(JSON.stringify(client));
};

function postUser(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:8080/users", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader('Content-Type', 'application/json');

    let user = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value,
    };

    xhttp.onreadystatechange = function () {
        
        if (xhttp.readyState == 4 && xhttp.status == "200") {
            console.log(xhttp.responseText);
            alert("usuario cadastrado com sucesso!");
        }
    }
    xhttp.send(JSON.stringify(user));
}
