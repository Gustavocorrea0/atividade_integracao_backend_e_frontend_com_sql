        function registrarUsuario() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const user = {
                email: email,
                password: password
            };

            fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Usuário registrado com sucesso:', data);
             
                getUserList();
            })
            .catch(error => console.error('Erro ao registrar usuário:', error));
        }

        function apresentarUsuario() {
            
            fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(data => {
                console.log('Lista de usuários:', data); 
                const userListElement = document.getElementById('userList');
                userListElement.innerHTML = '';

                data.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.textContent = user.username;
                    userListElement.appendChild(listItem);
                });
            })
            .catch(error => console.error('Erro ao obter lista de usuários:', error));
        }

        apresentarUsuario();