interface IceCream{
    flavor: string;
    scoops: number;
}



// console.log(mysIceCream.flavor);

function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
       return dessert.flavor+ dessert.scoops + ' is too many scoops!'
    } else {
       return dessert.flavor
    }
 }
 
 console.log(tooManyScoops({flavor: 'vainilla' , scoops:6}));