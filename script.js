let currAbvInputEl = document.querySelector("#abv");
let targetAbvInputEl = document.querySelector("#target-abv");
let currVolInputEl = document.querySelector("#curr-vol")
let form = document.querySelector("form");
let resultContainerEl = document.querySelector(".result-container");
let errorEl = document.querySelector(".error");

const renderResult = (oz, ml) => {
    errorEl.style.display = "none";
    resultContainerEl.style.display = "block";

    document.querySelector(".result-oz").innerHTML = oz + "oz";
    document.querySelector(".result-ml").innerHTML = ml + "ml";
}

const handleError = () => {
    resultContainerEl.style.display = "none";
    errorEl.style.display = "block";
}

const handleFormSubmit = e => {
    e.preventDefault();

    const currAbv = parseFloat(currAbvInputEl.value)
    const targetAbv = parseFloat(targetAbvInputEl.value)
    const currVol = parseFloat(currVolInputEl.value)

    if (currAbv < targetAbv) {
        handleError();
        return;
    }

    let resultOz = ((currVol * currAbv) / targetAbv) - currVol;
    resultOz = Math.round(resultOz * 100) / 100;
    let resultMl = resultOz * 29.574;
    resultMl = Math.round(resultMl * 100) / 100;

    renderResult(resultOz, resultMl);
}

form.addEventListener("submit", handleFormSubmit);