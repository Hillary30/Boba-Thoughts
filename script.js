const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


let rateList = []; 
const addRating = (ev)=> {
    ev.preventDefault();
    let rate = {
        Drink: document.getElementById('drink').value,
        Topping: document.getElementById('topping').value,
        Rate: document.querySelector('input[name=rate]:checked').value
    }

    rateList.push(rate);
    document.forms[0].reset();

    console.warn('added', {rateList});
    tbody = document.getElementById('tableRating');
    drawRow(tbody);
    
    localStorage.setItem('MyRatingList', JSON.stringify(rateList));   
}

function drawRow(tbody) {
    var tr, td; 
    tbody = document.getElementById('tableRating');
    tr = tbody.insertRow(tbody.rows.length);
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = rateList[rateList.length-1].Drink;
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = rateList[rateList.length-1].Topping;
    td = tr.insertCell(tr.cells.length);
    td.innerHTML = rateList[rateList.length-1].Rate;
    
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn').addEventListener('click', addRating)
});                    