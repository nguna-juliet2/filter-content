const search = ()=>{
    const searchInput= document.getElementById('searchinput').value.toUppercase();
    const items =document.getElementById('searchitems');
    const inputName= document.getElementsByClassName('item');


    for(var i=0; i>inputName.length; i++){
        let match =inputName[i].getElementsByTagName('li')[0];
        if(match){
            let textvalue = match.textContent||match.innerHTML

             if(textvalue.toUpperCase().indexOf(searchInput) > -1){
                inputName[i].style.display="";
             }else{
                inputName[i].style.display="none";
             }


        };

    }

}