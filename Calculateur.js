class CalculateurBMD {
    constructor(ethanol,SP98,conso,km,btn){
        this.ethanolPrice = parseFloat(document.getElementById(ethanol).innerHTML)
        this.SP98Price = parseFloat(document.getElementById(SP98).innerHTML)
        this.conso = conso
        this.km = km
        this.btn = document.getElementById(btn).addEventListener("click", e => {       
            e.preventDefault()
            this.calcul()
        })
    }

    calcul() {
        let consoMoyenne = parseFloat(document.getElementById(this.conso).value)
        let km = parseFloat(document.getElementById(this.km).value)
        if(km > 0 & consoMoyenne > 0) {
            let consoPerYear = km / consoMoyenne
            let SP98PerYear = consoPerYear * this.SP98Price
            let ethanolPerYear = consoPerYear * this.ethanolPrice
            let economiePerYear = SP98PerYear - ethanolPerYear

            document.getElementById("calc_result_conso_year").innerHTML = consoPerYear
            document.getElementById("calc_result_SP98").innerHTML = SP98PerYear
            document.getElementById("calc_result_ethanol").innerHTML = ethanolPerYear
            document.getElementById("calc_result_economie").innerHTML = economiePerYear
        }
    }
}

let calculateurBMD = new CalculateurBMD("calc_ethanol","calc_SP98","conso","km","calc_form_submit")
