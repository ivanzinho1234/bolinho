document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('loginForm');
            const mensagemElement = document.getElementById('mensagem');

            loginForm.addEventListener('submit', function(event) {
                event.preventDefault(); 

                const email = document.getElementById('email').value;
                const senha = document.getElementById('senha').value;

                const usuariosValidos = {
                    "alexandresantos@gmail.com":
                    "naovaimebotarnafinal"
                };

                if (usuariosValidos[email] && usuariosValidos[email] === senha) {
                    mensagemElement.textContent = "Login bem-sucedido!";
                   
                } else {
                    mensagemElement.textContent = "Email ou senha incorretos.";
                }
            });
        });