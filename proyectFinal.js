let base_price = 2000;

let age18_24 = 0.1;
let age25_49 = 0.2;
let age50AndMore = 0.3;

let partner18_24 = 0.1;
let partner25_49 = 0.2;
let partner50AndMore = 0.3;

let additionalChargeAge = 0;
let additionalChargePartner = 0;
let additionalChargeChildren = 0;

let repetition = true   // creo una variable la cual sera 


while (repetition) {    // Usare loop while ya que no tengo definido cuantas veces se requerira que el codigo sea ejecutado

    let nameUser = prompt('Ingrese su nombre');

    if (nameUser.toUpperCase() === 'RESET') {
        repetition = false;
        continue;
    }
    let age = prompt('Ingrese su edad, solamente numeros');

    age = parseInt(age)
    if (age > 18) {
        if (age >= 18 && age <= 24) {
            additionalChargeAge = base_price * 0.1;
        } else if (age >= 25 && age <= 29) {
            additionalChargeAge = base_price * 0.2;
        } else if (age >= 50) {
            additionalChargeAge = base_price * 0.3;
        }

        let marriage = prompt('Esta casado actualmente?');
        if (marriage == 'YES' || marriage == 'SI' || marriage == 'yes' || marriage == 'si') {
            let partnerAge = prompt('Que edad tiene su espos@');
            partnerAge = parseInt(partnerAge)
            if (partnerAge >= 18 && partnerAge <= 24) {
                additionalChargePartner = base_price * 0.1;
            } else if (partnerAge >= 25 && partnerAge <= 49) {
                additionalChargePartner = base_price * 0.2;
            } else if (partnerAge >= 50) {
                additionalChargePartner = base_price * 0.3;
            }
        }

        let children = prompt('Tiene hijos');

        if (children == 'YES' || children == "SI" || children == 'si' || children == 'yes') {
            let childrenAmount = prompt('Cuantos hijos tiene');
            additionalChargeChildren = parseInt(childrenAmount) * base_price * 0.2
        }

        let finalCharge = additionalChargeAge + additionalChargePartner + additionalChargeChildren
        let finalAdditionalCharge = finalCharge
        let finalPrice = finalAdditionalCharge + 2000;

        alert(`Para el asegurado ${nameUser}`)
        alert(`El recargo total seria de ${finalAdditionalCharge}`)
        alert(`El precio sera de ${finalPrice}`)
    } else {
        alert('Youre to young son')

    }



}