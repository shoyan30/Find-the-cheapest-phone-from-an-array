const phones = [
    {name: 'samsung s5', price: 45000, camara: 10, storage: 32},
    {name: 'xioami m3', price: 12000, camara: 10, storage: 32},
    {name: 'Oppo a2', price: 17000, camara: 10, storage: 32},
    {name: 'Walton m32', price: 15000, camara: 8, storage: 32},
    {name: 'Nokia n95', price: 8000, camara: 10, storage: 32},
    {name: 'htc h81', price: 25000, camara: 8, storage: 32},
];

let cheapest = phones[0];
for ( const phone of phones) {
   if(phone.price<cheapest.price){
       cheapest=phone;
   }
}
console.log(cheapest);