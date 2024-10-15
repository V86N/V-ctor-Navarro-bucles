//BOOLEANOS

    booleano1 = true
    booleano2 = false
    
    const booleanoAnd = booleano1 && booleano2;
    console.log(booleanoAnd)

    const booleanoOr = booleano1 || booleano2;
    console.log(booleanoOr)

    const booleanoNot = !booleano1;
    console.log(booleanoNot)

    const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2)) 
    console.log(booleanoMix0)

 //OPERADORES
 
    let valorDivision = 17/3
    console.log(valorDivision.toFixed(2))

    let valorResto = 17%7
    console.log(valorResto)

//LÓGICA DE PROGRAMACIÓN

   let A = 9
   let B = "9"
   if (A==B) console.log("Son iguales")
   if (A===B) console.log("Son iguales")

   let mochila = [1,2,3,4,5,6,7,8,9,10,11]
   if(mochila.length > 10){ 
    console.log("No puedo cargar con tantas cosas")
    }
    if (mochila.length > 10) {
    console.log("No puedo cargar con tantas cosas")
    } else if (mochila.length >= 2 && mochila.length <= 10) {
    console.log("Qué bien voy con mi mochila")
     } else {
    console.log("Creo que no necesito una mochila")
   }
  
   let contarHasta10 = 0
   while (contarHasta10 < 10) {
      contarHasta10++
   }
   if (contarHasta10===10) console.log(10)


    let diaFestivo = true
    let diaDeLaSemana = diaFestivo = false ? "Hoy no trabajo" : "Hoy trabajo"
    console.log(diaDeLaSemana)

    let arrayBucle = []
    for (let i = 4; i <=18; i++) {
      arrayBucle.push(i)
    }
    console.log(arrayBucle)

    let resultado = 0
    for (let num of arrayBucle) {
      resultado += num
    }
    console.log(resultado)

    const malditosBucles = ['Con', 'Sofía', 'aprendiendo', 'bucles']
    for (let contenido of malditosBucles) {
      console.log("el contenido es " + malditosBucles)
   }
    for (let index in malditosBucles) {
      console.log(malditosBucles[index])
   }

   let index = 1

   while (index <= 20) {
    if (index % 3 === 0) { 
        console.log("Patata")
    }
    index++
   }







