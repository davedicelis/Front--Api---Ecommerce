document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var data = {
      username: username,
      email: email,
      password: password
    };
  
    fetch("http://localhost:8000/dj-rest-auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la solicitud");
      }
    })
    .then(function(data) {
      // Aquí puedes procesar la respuesta de la API después de un inicio de sesión exitoso
      document.getElementById("response-message").textContent = "Inicio de sesión exitoso";
    })
    .catch(function(error) {
      // Aquí puedes manejar errores de la API o de la solicitud
      document.getElementById("response-message").textContent = error.message;
    });
  });
  