//header element
var header = document.createElement("h1");
header.innerHTML = "Calculator Program";
document.body.append(header);

//Element creating function
function makeElement(elem, elemType) {
    var element = document.createElement(elem);
    element.setAttribute('type', elemType);
    return element
};

var div = makeElement("div")
div.setAttribute("class", "center")
document.body.append(div);

var input1 = makeElement("input", "number");
var input2 = makeElement("input", "number");
input2.setAttribute("class", "box2")

var addbtn = makeElement("button");
addbtn.innerHTML = "+";
addbtn.setAttribute("class", "add")
var minusbtn = makeElement("button");
minusbtn.innerHTML = "-";
var multbtn = makeElement("button");
multbtn.innerHTML = "x";
var divbtn = makeElement("button");
divbtn.innerHTML = "/";

var resultHeader = makeElement("h2");
resultHeader.innerHTML = "Enter values & Click on the operators to Calculate result"

div.append(input1, input2, addbtn, minusbtn, multbtn, divbtn, resultHeader);

//addition
addbtn.addEventListener("click", () => {

    var sum = parseFloat(input1.value) + parseFloat(input2.value);
    if (sum) {
        resultHeader.innerHTML = sum;
    }

})
//subtraction
minusbtn.addEventListener("click", () => {
    var subt = parseFloat(input1.value) - parseFloat(input2.value);
    if (subt) {
        resultHeader.innerHTML = subt;
    }
});
//multiplication
multbtn.addEventListener("click", () => {

    var multiply = parseFloat(input1.value) * parseFloat(input2.value);
    resultHeader.innerHTML = multiply;

})
//Division
divbtn.addEventListener("click", () => {

    var division = parseFloat(input1.value) / parseFloat(input2.value);
    if (division) {
        resultHeader.innerHTML = division;
    }

})