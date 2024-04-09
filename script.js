// Doms
const submit = document.getElementById("submit");
const phone = document.getElementById('phone');
const brandName = document.getElementById('brand-name');
const mainArea = document.getElementById('main-area');
const brandMean = document.getElementById('brand-mean');
const logoFeelings = document.getElementById('logo-feelings');
const slogan = document.getElementById('slogan');
const services = document.getElementById('services');
const english_or_persian = document.getElementById('english-or-persian');
const future = document.getElementById('future');
const howKnow = document.getElementById('how-to-know-brand');
const symbol = document.getElementById('symbol');
const colors = document.getElementById('colors');
const form = document.getElementById("form");
const phoneNumber = document.getElementById("phone-number");
const payment = new URL("https://zarinp.al/580751");
const inputs = new Map();
inputs.set("0",phone).set("1",brandName).set("2", mainArea).set("3",brandMean).set("4",logoFeelings).set("5",slogan).set("6",services).set("7",english_or_persian).set("8",future).set("9",howKnow).set("10",symbol).set("11",colors);
// validation inputs to add payment link to form action
function validation(callback) {
    if(inputs.get('0').required = true){
    }if(inputs.get('1').required = true){
    }if(inputs.get('2').required = true){
    }if(inputs.get('3').required = true){
    }if(inputs.get('4').required = true){
    }if(inputs.get('5').required = true){
    }if(inputs.get('6').required = true){
    }if(inputs.get('7').required = true){
    }if(inputs.get('8').required = true){
    }if(inputs.get('9').required = true){
    }if(inputs.get('10').required = true){
    }if(inputs.get('11').required = true){
        callback();
    }
}
// adding payment link to form action
function actionURL(){
        form.action = payment;
}
validation(actionURL);
