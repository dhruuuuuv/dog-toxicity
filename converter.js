function weightConverterp2kg(valNum) {
      document.getElementById("inputKilograms").value = valNum*0.453592;
}

function weightConverterkg2p(valNum) {
      document.getElementById("inputPounds").value = valNum*2.20462;
}

function weightConverteroz2g(valNum) {
      document.getElementById("inputGrams").value = valNum*28.3495;
}

function weightConverterg2oz(valNum) {
      document.getElementById("inputOunces").value = valNum*0.035274;
}

function calculateToxicity() {
    var dogWeight = document.getElementById("inputPounds").value;
    var x = document.getElementById("chocolate-type");
    var chocolateTox = x.options[x.selectedIndex].value;
    var ozChocolate = document.getElementById("inputOunces").value;

    tox = ( (ozChocolate * chocolateTox)/ dogWeight);

    document.getElementById("toxicity").innerHTML = tox;
}
