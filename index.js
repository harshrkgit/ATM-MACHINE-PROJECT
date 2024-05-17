function display(val) {
    val.style.display = "block"
}
function hide(val) {
    val.style.display = "none"
}
// homepage
const homePage = document.getElementsByClassName("welcome")
const cardField = document.getElementsByClassName("card")
const pinInput = document.getElementById("pin")
const pinCheckBtn = document.getElementById("pinBtn")
// Services
const services = document.getElementsByClassName("services")
const balanceBtn = document.getElementById("bal")
const depositBtn = document.getElementById("depo")
const withdrawBtn = document.getElementById("withdraw")
// View Balance
const balance = document.getElementsByClassName("balance")
const disBal = document.getElementById("balAmt")
// Deposit
const depositPage = document.getElementsByClassName("depoPage")
const depositVal = document.getElementById("depoVal")
const makeDepo = document.getElementById("depoBtn")
// Withdraw
const withdPage = document.getElementsByClassName("witdPage")
const withdvalue = document.getElementById("witdVal")
const widhButton = document.getElementById("witdBtn")
// Success
const success = document.getElementsByClassName("success")
const viewBalanceSuccess = document.getElementById("vBal")
// No balance
const noBalance = document.getElementsByClassName("noBal")

// Back Button
const back = document.getElementsByClassName("back")



var netBalance = 10000;
const pin = 1234;

pinCheckBtn.onclick = (e) => {
    e.preventDefault()

    if (Number(pinInput.value) === pin) {
        display(services[0])
        hide(homePage[0])
    } else {
        cardField[0].textContent = "Invalid PIN"
        cardField[0].style.color = "red"
        pinInput.value = ""
    }

    console.log(back)

}

balanceBtn.onclick = () => {
    hide(services[0])
    display(balance[0])
    disBal.textContent = netBalance
}

depositBtn.onclick = () => {
    hide(services[0])
    display(depositPage[0])
}
makeDepo.onclick = (e) => {
    e.preventDefault()
    hide(depositPage[0])
    display(success[0])
    let depositAmt = Number(depositVal.value)
    netBalance += depositAmt
    depositVal.value = ""

    // console.log(viewBalanceSuccess);
}

viewBalanceSuccess.onclick = () => {
    hide(success[0])
    display(balance[0])
    disBal.textContent = netBalance
}
withdrawBtn.onclick = () => {
    hide(services[0])
    display(withdPage[0])
}
widhButton.onclick = () => {
    let widbal = Number(withdvalue.value)

    if (widbal <= netBalance) {
        display(success[0])
        hide(withdPage[0])
        netBalance -= widbal
    } else {
        display(noBalance[0])
        hide(withdPage[0])
    }
    withdvalue.value = ""


}

for (let i = 0; i < back.length; i++) {
    back[i].onclick = () => {
        hide(balance[0])
        hide(depositPage[0])
        hide(success[0])
        hide(withdPage[0])
        hide(noBalance[0])

        display(services[0])
    }
}

// back.onclick = () => {
//     hide(balance[0])
//     hide(depositPage[0])
//     hide(success[0])
//     hide(withdPage[0])

//     display(services[0])
// }
