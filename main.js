let btn = document.getElementById("btnAdd");
let target = document.getElementById("target");
let inputFields = document.getElementById("inputFields");
const array = [];


btn.addEventListener("click",addStain)



function addStain(){
  console.log("click");
  if (inputFields && inputFields.value){
    console.log(inputFields.value);
    array.push(`${inputFields.value}`);
    console.log(array);
    addHtml();
  }
  else{
    console.log("rien");
    return false
  }
}


function addHtml(){
  console.log("vrai");
   let div = document.createElement("div");
   let del = document.createElement('button')
    div.innerHTML=(`${inputFields.value} `);
    target.appendChild(div);

    del.innerHTML=('X');
    target.appendChild(del);
}


