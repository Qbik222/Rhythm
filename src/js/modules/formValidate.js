
function formValidate(){
    const form = document.querySelector("form");
    const aside = document.querySelector(".modal");
    form.addEventListener("submit", formSend);

  async function formSend(e) {
        e.preventDefault();
   
        let err = validateForm(form);
        let formData = new FormData(form);
        console.log(formData);
        if (err === 0){
            aside.classList.add("_sending")
            // let response = await fetch("sendmail.php", {
            //     method: "POST",
            //     body: formData,
            // });
            // if(response.ok){
            //     let result =  await response.json();
            //     alert(result.message);
            //     form.reset();
            //     aside.classList.remove("_sending")
            // }
            setTimeout(()=>{aside.classList.remove("_sending")}, 2000);
            form.reset();
        }else{
            if(document.querySelector("select").value == "ua"){
                alert("заповніть обов'язкові поля")
            }else{
                alert("fill in the required fields")
            }
        }

    function validateForm(form){
        let erorr = 0;
        let formReq = document.querySelectorAll("._req")

        for(let i = 0; i < formReq.length; i++){
            
            const input = formReq[i];
            formRemoveError(input);
            console.log(input);

            if(input.getAttribute("type") === "checkbox" && input.checked === false){
                formAddError(input);
                erorr++;
            }else if(input.value === ""){
                formAddError(input);
                erorr++;
            } else{
                let num = document.querySelector("#formNumber")
                if(num.value.length > 13 || num.value.length < 10 ){
                    formAddError(num);
                    erorr++;
               
                }
            }
       
        }
     
        return erorr;
    }

    function formAddError(input){
        input.parentElement.classList.add("_error")
        input.classList.add("_error")
    }

    function formRemoveError(input){
        input.parentElement.classList.remove("_error")
        input.classList.remove("_error")
    }
}
}

export default formValidate;
