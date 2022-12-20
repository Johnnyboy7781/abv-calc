let currAbvInputEl = document.querySelector("#abv");
let targetAbvInputEl = document.querySelector("#target-abv");
let currVolInputEl = document.querySelector("#curr-vol")
let form = document.querySelector("form");
let resultContainerEl = document.querySelector(".result-container");

const renderResult = (oz, ml) => {
    resultContainerEl.style.display = "block";

    document.querySelector(".result-oz").innerHTML = oz + "oz";
    document.querySelector(".result-ml").innerHTML = ml + "ml";
}

const handleFormSubmit = e => {
    e.preventDefault();

    const currAbv = parseFloat(currAbvInputEl.value)
    const targetAbv = parseFloat(targetAbvInputEl.value)
    const currVol = parseFloat(currVolInputEl.value)

    let resultOz = ((currVol * currAbv) / targetAbv) - currVol;
    resultOz = Math.round(resultOz * 100) / 100;
    let resultMl = resultOz * 29.574;
    resultMl = Math.round(resultMl * 100) / 100;

    renderResult(resultOz, resultMl);
}

form.addEventListener("submit", handleFormSubmit);