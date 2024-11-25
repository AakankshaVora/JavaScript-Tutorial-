let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    //console.log("clicked");
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("item deleted");
    }
});
// let delBtns=document.querySelectorAll("buttons");
// for(delBtn of delBtns){
//     delBtns.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// }
