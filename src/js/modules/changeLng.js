



function changeLanguage(lngArr){
    const select = document.querySelector("select");
    const allLang = ["ua", "en"];
    select.addEventListener("change", changeURLLang);
    
    function changeURLLang(){
        let lang = select.value;
        location.href = `${window.location.pathname}#${lang}`;
        location.reload();
    }

   function changeLang(){
        let hash =  window.location.hash;
        hash = hash.substring(1);
        
        if (!allLang.includes(hash)){
            location.href = `${window.location.pathname}#ua`;
            location.reload();
                }
        select.value = hash;
        for (let key in lngArr){

            let element = document.querySelector(`.${key}`)
            if(element){
                element.textContent = lngArr[key][hash];
            }

          
           
        }
    }
    changeLang()
    console.log(lngArr);
}


export default changeLanguage;