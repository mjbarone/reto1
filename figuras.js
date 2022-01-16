// codigo CUADRADO
console.group("CUADRADO");
// var ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

// Perímetro de un cuadrado con un lado fijo de 5cm

function perimetroCuadrado(lado) {
  return lado * 4;
}

//console.log("El perímetro del cuadrado es: " + ladoCuadrado * 4 + "cm");

// Área de un cuadrado con un lado de 5cm

function areaCuadrado(lado) {
  return lado * lado;
}

//var areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

// codigo TRIANGULO
console.group("TRIANGULO");
// var ladoTriangulo1 = 6;
// var ladoTriangulo2 = 6;
// var baseTriangulo = 4;
// var alturaTriangulo = 5.5;

// console.log(
//   "los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm y " +
//     baseTriangulo +
//     "cm"
// );

function perimetroTriangulo(lado1, lado2, base) {
  var perimetroTriangulo = parseInt(lado1) + parseInt(lado2) + parseInt(base);
  return perimetroTriangulo;
}

// console.log("la altura de mi triángulo es: " + alturaTriangulo + "cm");

// Perímetro de un triángulo
// var perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// Área de un triángulo con un lado de 5cm
function areaTriangulo(base, altura) {
  var areaTriangulo = (parseInt(base) * parseInt(altura)) / 2;
  return areaTriangulo;
}
// var areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm2");

console.groupEnd();

// codigo CIRCULO
console.group("CIRCULO");

// var radioCirculo = 4;
// var diametroCirculo = radioCirculo * 2;

// PI
const PI = Math.PI;

// console.log("El radio del circulo es de: " + radioCirculo + "cm");

// console.log("El diámetro es de: " + diametroCirculo + "cm.");

// console.log("Pi es: " + PI + "cm");

// Perímetro de un circulo
function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  diametro = diametroCirculo(radio);
  return diametro * PI;
}

// var perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");

// //Area de un Circulo
function areaCirculo(radio) {
  return radio * radio * PI;
}

// var areaCirculo = radioCirculo * radioCirculo * PI;
// console.log("El área del circulo es: " + areaCirculo + "cm2");

console.groupEnd();

//// escuchando el formulario html

// AREA Y PERIMETRO CUADRADO
function calcularPerimetroCuadrado() {
  var input = document.getElementById("InputCuadrado");
  var value = input.value;
  var perimetro = perimetroCuadrado(value);

  if (value === "") {
    console.log("error");
    document.getElementById("resultado_txt").style.display = "none";

    document.getElementById("mensaje_error").style.display = "block";
    document.getElementById("mensaje_error").innerHTML = "introduce un dato";
  } else {
    document.getElementById("mensaje_error").style.display = "none";

    document.getElementById("resultado_txt").style.display = "block";
    document.getElementById("resultado_txt").innerHTML =
      "El perímetro es: " + perimetro + "cm.";
  }
  //   alert("el perimetro del cuadraado es: " + perimetro + "cm");
}

function calcularAreaCuadrado() {
  var input = document.getElementById("InputCuadrado");
  var value = input.value;
  var area = areaCuadrado(value);
  // validamos si el campo de input está vacio
  if (value === "") {
    console.log("error");
    document.getElementById("resultado_txt").style.display = "none";

    document.getElementById("mensaje_error").style.display = "block";
    document.getElementById("mensaje_error").innerHTML = "introduce un dato";
  } else {
    document.getElementById("mensaje_error").style.display = "none";

    document.getElementById("resultado_txt").style.display = "block";
    document.getElementById("resultado_txt").innerHTML =
      "El área es: " + area + "cm.";
  }

  //   alert("el área del cuadrado es: " + area + "cm2");
}

// PERIMETRO TRIANGULO

function calcularPerimetroTriangulo() {
  var lado1Triangulo = document.getElementById("lado1Triangulo");
  var lado1 = lado1Triangulo.value;

  var lado2Triangulo = document.getElementById("lado2Triangulo");
  var lado2 = lado2Triangulo.value;

  var baseTriangulo = document.getElementById("baseTriangulo");
  var base = baseTriangulo.value;

  if (lado1 === "") {
    document.getElementById("lado1_vacia").style.display = "block";
  } else {
    document.getElementById("lado1_vacia").style.display = "none";
  }

  if (lado2 === "") {
    document.getElementById("lado2_vacia").style.display = "block";
  } else {
    document.getElementById("lado2_vacia").style.display = "none";
  }

  if (base === "") {
    document.getElementById("base_vacia").style.display = "block";
  } else {
    document.getElementById("base_vacia").style.display = "none";
  }

  var perimetro = perimetroTriangulo(lado1, lado2, base);

  if (!perimetro) {
    document.getElementById("rdo_perimetrotriangulo").style.display = "none";
  } else {
    document.getElementById("rdo_perimetrotriangulo").style.display = "block";
    document.getElementById("rdo_perimetrotriangulo").innerHTML =
      "El perimetro del triángulo es: " + perimetro + "cm.";
  }
}

// ÁREA TRIANGULO
function calcularAreaTriangulo() {
  var base2Triangulo = document.getElementById("base2Triangulo");
  var base2 = base2Triangulo.value;

  var alturaTriangulo = document.getElementById("alturaTriangulo");
  var altura = alturaTriangulo.value;

  if (base2 === "") {
    document.getElementById("base2_vacia").style.display = "block";
  } else {
    document.getElementById("base2_vacia").style.display = "none";
  }

  if (altura === "") {
    document.getElementById("altura_vacia").style.display = "block";
  } else {
    document.getElementById("altura_vacia").style.display = "none";
  }

  console.log(base2);
  console.log(altura);

  var area = areaTriangulo(base2, altura);

  if (!area) {
    document.getElementById("rdo_areatriangulo").style.display = "none";
  } else {
    document.getElementById("rdo_areatriangulo").style.display = "block";
    document.getElementById("rdo_areatriangulo").innerHTML =
      "El área del triángulo es: " + area + "cm2.";
  }
}

// AREA Y PERIMETRO CIRCULO
function calcularPerimetroCirculo() {
  var input = document.getElementById("InputRadio");
  var value = InputRadio.value;
  var perimetro = perimetroCirculo(value);

  if (!value) {
    console.log("vacio");
    document.getElementById("radio_vacia").style.display = "block";
  } else {
    document.getElementById("radio_vacia").style.display = "none";
    document.getElementById("resultado_circulo").style.display = "block";
    document.getElementById("resultado_circulo").innerHTML =
      "El perimetro del circulo es: " + perimetro + "cm.";
  }
}

function calcularAreaCirculo() {
  var input = document.getElementById("InputRadio");
  var value = InputRadio.value;
  var area = areaCirculo(value);

  // alert("el área del circulo es: " + area + "cm2");

  if (!value) {
    console.log("vacio");
    document.getElementById("radio_vacia").style.display = "block";
  } else {
    document.getElementById("radio_vacia").style.display = "none";
    document.getElementById("resultado_circulo").style.display = "block";
    document.getElementById("resultado_circulo").innerHTML =
      "El área del circulo es: " + area + "cm2.";
  }
}

//mostrar sectiones
function mostrarCuadrado() {
  document.getElementById("seccion_circulo").style.display = "none";
  document.getElementById("seccion_triangulo").style.display = "none";

  document.getElementById("seccion_cuadrado").style.display = "block";

  document.getElementById("dib_cuadrado").style.background = "#A259E1";
  document.getElementById("dib_circulo").style.background = "#E6E6E6";
  document.getElementById("dib_triangulo").style.borderBottomColor = "#E6E6E6";
}

function mostrarCirculo() {
  document.getElementById("seccion_cuadrado").style.display = "none";
  document.getElementById("seccion_triangulo").style.display = "none";

  document.getElementById("seccion_circulo").style.display = "block";

  document.getElementById("dib_cuadrado").style.background = "#E6E6E6";
  document.getElementById("dib_circulo").style.background = "#375a66";
  document.getElementById("dib_triangulo").style.borderBottomColor = "#E6E6E6";
}

function mostrarTriangulo() {
  document.getElementById("seccion_circulo").style.display = "none";
  document.getElementById("seccion_cuadrado").style.display = "none";

  document.getElementById("seccion_triangulo").style.display = "block";

  document.getElementById("dib_cuadrado").style.background = "#E6E6E6";
  document.getElementById("dib_circulo").style.background = "#E6E6E6";
  document.getElementById("dib_triangulo").style.borderBottomColor = "#cb00ff";
}

//mostrar perimetro triangulo
function mostrarseccionPerimetroTriangulo() {
  document.getElementById("perimetro_triangulo").style.display = "block";
  document.getElementById("area_triangulo").style.display = "none";
}

//mostrar area triangulo
function mostrarseccionAreaTriangulo() {
  document.getElementById("area_triangulo").style.display = "block";
  document.getElementById("perimetro_triangulo").style.display = "none";
}

//mostrar que es el radio
function queEsElRadio() {
  console.log("que es");
  document.getElementById("radio").style.display = "block";
}
