/**
 * filter - filter basing on the input
 * Return: Matching
 * 
 */

function fliterList(){
    const searchInput=document.getElementById('searchinput');
    const fliter = searchInput.value.toLowerCase();
    const items= document.querySelectorAll('.items');
    items.forEach((item) =>{
        let text= item.textContent
        if (!text.toLowerCase().includes(fliter) || fliter === ""){
            item.style.display="none";
        }
        else{
            item.style.display='block';
        }
    })
    
}
document.getElementById('searchinput').addEventListener('input' , fliterList)