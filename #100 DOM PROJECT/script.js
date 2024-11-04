const container = document.querySelector(".container"),
    pwd = document.querySelectorAll(".pwd"),
    inputPwd = document.querySelectorAll(".password");

    pwd.forEach( e => {
        e.addEventListener("click" , ()=>{
            inputPwd.forEach(inputPwd =>{
             if (inputPwd.type === "password") {
                inputPwd.type = "text"
                pwd.forEach(icon => {
                    icon.classList.replace("fa-eye" , "fa-eye-slash")
                })
             }else{
                inputPwd.type = "password";
                pwd.forEach(icon => {
                    icon.classList.replace("fa-eye-slash" , "fa-eye")
                })
             }
            })
        })
    });
    