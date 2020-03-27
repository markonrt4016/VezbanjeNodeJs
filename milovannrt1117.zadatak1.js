const decimal = require("decimal.js");
const mathjs = require("mathjs")

function koren(broj){
    return decimal.Decimal.sqrt(broj);
}

function stepen(broj,stepen){
    return decimal.Decimal.pow(broj,stepen);
}

function minimumNiza(niz){
    return mathjs.min(niz);
}

function maximumNiza(niz){
    return mathjs.max(niz);
}

function sortiranjeNiza(niz){
    return mathjs.sort(niz);
}

exports.koren = koren;
exports.stepen = stepen;
exports.maximumNiza = maximumNiza;
exports.minimumNiza = minimumNiza;
exports.sortiranjeNiza = sortiranjeNiza;