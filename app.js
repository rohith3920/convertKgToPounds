
let convertorKg = document.getElementById("convertkgs");



function changeKgToPounds(){
    let noInp = document.getElementById("weight").value;
    let pass = document.getElementById("convert");
    let kgToPounds = noInp * 2.20462;
    pass.innerHTML = "weight is converted kg to pounds" + kgToPounds;
}

convertorKg.addEventListener('click',changeKgToPounds);