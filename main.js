const amount = document.querySelector('.modal');
const showItem = document.querySelector('.show');
const send = document.querySelector('.btn');
const itemN = document.querySelector('.modal1');
const aCb = document.querySelector('.hide');
const boxShow = document.querySelector('.decripton');
const amountDue = document.querySelector('.due');
const iconStatus = document.querySelector('.fas');

let totalCash = 8000;

send.addEventListener('click', sendMe)
function sendMe(){
    let a = amount.value;
    let b = itemN.value

    if(amount.value === "" || itemN.value === ""){
        alert ('hello! user please fill in the fields to continue')
    }else{
    showItem.innerHTML = a;
    aCb.innerHTML = `$` + b;
    boxShow.style.boxShadow = '0 4px 8px rgba(0,0,0,.5)';
    // boxShow.style.visibility = 'visible'
    amount.value = '';
    itemN.value = '';
    amountDue.innerHTML = totalCash - b;
    } 
}

iconStatus.addEventListener('click', function(){
    showItem.style.display = 'none';
    aCb.style.display = 'none';
    amountDue.innerHTML = '';
})



