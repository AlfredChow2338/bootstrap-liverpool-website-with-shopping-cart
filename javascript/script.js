function toHome () {
    window.location.href = 'index.html'
}

// function changeBanner () {
//     let currentImg = document.getElementById('lfc-banner').src;
//     if (currentImg == 'file:///Users/alfred/Desktop/vtc/EA/assets/mane.png') {
//         document.getElementById('lfc-banner').src = 'file:///Users/alfred/Desktop/vtc/EA/assets/wijnaldum.png';
//         document.getElementById('bannerTitle').innerHTML = "Gini Wijnaldum interview | 'Giving more', tricky Aston Villa and CL draw";
//         document.getElementById('quoteText').innerHTML = "Sharper, more concentrated, giving more – Georginio Wijnaldum's recipe for sustaining Liverpool's success into 2020-21.";
//     } else {
//         document.getElementById('lfc-banner').src = 'file:///Users/alfred/Desktop/vtc/EA/assets/mane.png';
//         document.getElementById('bannerTitle').innerHTML = "Sadio Mane tests positive for COVID-19";
//         document.getElementById('quoteText').innerHTML = "Sadio Mane has tested positive for COVID-19 and is currently self-isolating according to the necessary guidelines.";
//     }
// }

function subscribe () {
    alert("You have successfully subscribed to our newsletter! You are one of Reds now!")
}

function hkRegionSelected () {
    let country = document.getElementById('country').value;
    let region = document.getElementById('hkRegion');
    if (country === 'Hong Kong') {
        region.style.display = 'initial';
    } else {
        region.style.display = 'none';
    }
}

function addShirt () {
    let prodQty = parseInt(document.getElementById('prodQty').textContent);
    let prodPrice = parseInt(document.getElementById('prodPrice').textContent);
    let shirtChecked = document.getElementById('shirt').checked;
    if (shirtChecked === true) {
        prodQty++;
        prodPrice += 99;
    } else {
        prodQty--;
        prodPrice -= 99
    }
    document.getElementById('prodQty').innerHTML = prodQty;
    document.getElementById('prodPrice').innerHTML = prodPrice;
    sumAll();
}

function addSoccer () {
    let prodQty = parseInt(document.getElementById('prodQty').textContent);
    let prodPrice = parseInt(document.getElementById('prodPrice').textContent);
    let soccerChecked = document.getElementById('soccer').checked;
    if (soccerChecked === true) {
        prodQty++;
        prodPrice += 49;
    } else {
        prodQty--;
        prodPrice -= 49
    }
    document.getElementById('prodQty').innerHTML = prodQty;
    document.getElementById('prodPrice').innerHTML = prodPrice;
    sumAll();
}

function addMagazine () {
    let prodQty = parseInt(document.getElementById('prodQty').textContent);
    let prodPrice = parseInt(document.getElementById('prodPrice').textContent);
    let magazineChecked = document.getElementById('magazine').checked;
    if (magazineChecked === true) {
        prodQty++;
        prodPrice += 29;
    } else {
        prodQty--;
        prodPrice -= 29
    }
    document.getElementById('prodQty').innerHTML = prodQty;
    document.getElementById('prodPrice').innerHTML = prodPrice;
    sumAll();
}

function sumAll () {
    let prodPriceSumStr = document.getElementById('prodPrice').textContent;
    let prodPriceSum = parseInt(prodPriceSumStr.replace('$', ''));

    let sum = prodPriceSum;
    if (sum >= 50) {
        sum = prodPriceSum - 50;
    } else {
        sum = prodPriceSum;
    }
    if (isNaN(sum)) {
        sum = 0;
    }
    document.getElementById('sumOfAll').innerHTML = sum;
}