// Variables
const clicker = document.getElementById("clicker");
const clickCount = document.getElementById("clicks");
let clicks = 0;
let increment = 1;
const lbr = document.querySelectorAll("._r");
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");

// Hide upgrades initially
upgrade1.hidden = true;
upgrade2.hidden = true;
upgrade3.hidden = true;
lbr.forEach((element) => {
    element.hidden = true;
})
// upgrade attributes
let upgrades = [
    0,
    {
         "upgrade": upgrade1,
         "price": 50,
         "bonus": 1
        },
    {
         "upgrade": upgrade2,
         "price": 150,
         "bonus": 3
        },
    { 
        "upgrade": upgrade3, 
        "price": 300,
        "bonus": 12
    } 
];

// functions

let clickingHandler = () => {
    // Incrementer
    clicks += increment;
    clickCount.innerText = `Clicks (${clicks})`;
    
    // Check if click count is enough (Fixed indexes: 0, 1, 2)
    if (clicks >= upgrades[1].price) {
        upgrade1.hidden = false;
        lbr.forEach((element) => {
            element.hidden = false;
        })
    } else {
        lbr.forEach((element) => {
            element.hidden = true;
        })
        upgrade1.hidden = true;
    }

    if (clicks >= upgrades[2].price) {
        upgrade2.hidden = false;
    } else {
        upgrade2.hidden = true;
    }

    if (clicks >= upgrades[3].price) {
        upgrade3.hidden = false;
    } else {
        upgrade3.hidden = true;
    }
}

// Set up upgrade click events ONCE at the start, not inside the handler loop
upgrade1.addEventListener("click", () => {
    if (clicks >= upgrades[1].price) {
        clicks -= upgrades[1].price;
        increment += upgrades[1].bonus;
        clickCount.innerText = `Clicks (${clicks})`;
    }
    upgrades[1].upgrade.hidden = clicks < upgrades[1].price;
    lbr.forEach((e) => {
        e.hidden = clicks < upgrades[1].price;
    })
});

upgrade2.addEventListener("click", () => {
    if (clicks >= upgrades[2].price) {
        clicks -= upgrades[2].price;
        increment += upgrades[2].bonus; 
        clickCount.innerText = `Clicks (${clicks})`;
    }
    upgrades[2].upgrade.hidden = clicks < upgrades[2].price;
    upgrades[1].upgrade.hidden = clicks < upgrades[1].price;
    lbr.forEach((e) => {
        e.hidden = clicks < upgrades[1].price;
    })
});

upgrade3.addEventListener("click", () => {
    if (clicks >= upgrades[3].price) {
        clicks -= upgrades[3].price;
        increment += upgrades[3].bonus;
        clickCount.innerText = `Clicks (${clicks})`;
    }
    upgrades[3].upgrade.hidden = clicks < upgrades[3].price;
    upgrades[2].upgrade.hidden = clicks < upgrades[2].price;
    upgrades[1].upgrade.hidden = clicks < upgrades[1].price;
    lbr.forEach((e) => {
        e.hidden = clicks < upgrades[1].price;
    })
});

// Main button listener
clicker.addEventListener("click", clickingHandler);
