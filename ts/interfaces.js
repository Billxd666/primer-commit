//*Para declarar una interfaz, se empieza con la palabra clave interface, seguida del nombre de la interfaz (el identificador). El nombre de la interfaz no puede ser uno de los nombres de tipos definidos. Por convencion, los nombtes de interfaces estan en PascalCase y sin la letra I
var myIceCream = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
};
// function tooManyScoops(dessert: Sundae) {
//     if (dessert.scoops >= 4) {
//        return dessert.scoops + ' is too many scoops!';
//     } else {
//        return 'Your order will be ready soon!';
//     }
//  }
//  console.log(tooManyScoops({flavor: 'vainilla', scoops:5, sauce: 'Chocolate'}))
function tosoManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tosoManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
