
function formValidate(){
    const form = document.querySelector("form");
    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault();
        
        validateForm(form);
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
                error++;
              
            }else if(input.value === ""){
                formAddError(input);
                erorr++;
             
            }else{
                let num = document.querySelector("#formNumber")
                if(num.value.length > 13 || num.value.length < 10 ){
                    formAddError(num);
                    erorr++;
               
                }
            }
        }


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

export default formValidate;
