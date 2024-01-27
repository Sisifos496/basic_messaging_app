document.getElementById("login-submit").addEventListener("click", () => {
    const mailValue = document.getElementById("form-control-mail").value    
    const passValue = document.getElementById("form-control-pass").value
    const nameValue = document.getElementById("form-control-name").value

    const user = {
        name: nameValue,
        mail: mailValue,
        password: passValue
    };
    
    fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
    .then((response) => {
        if (response.ok) {
            var cookieString = `important=${user.password};path=/`;
            document.cookie = cookieString;
            
            window.location.href = "home";
        } else {
            throw new Error("Network response was not ok");
        }
    })
    .catch((error) => {
        console.error("Error during fetch:", error);
    });
    
})