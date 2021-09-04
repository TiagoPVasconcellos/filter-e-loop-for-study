console.log('Os dados utilizados são meramente ilustrativos.');
console.log('Número       Carro        Rendimento');
console.log('  1        Lamborghini      20 km/L');
console.log('  2        Ferrari          18 km/L');
console.log('  3        Dodge             9 km/L');
console.log('  4        Toyota           14 km/L');
console.log('  5        Chevrolet         7 km/L');

const rendimentoCarros = [['Lamborghini', 20], ['Ferrari', 18], ['Dodge', 9], ['Toyota', 14], ['Chevrolet', 7]];
let carros = [];
let kmPorLitros = [];
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < rendimentoCarros.length; j++) {
        if (typeof rendimentoCarros[j][i] === typeof 'string') {
            carros.push(rendimentoCarros[j][i]);
        } else {
            kmPorLitros.push(rendimentoCarros[j][i]);
        };
    };
};
const rendimentoAcimaDe10 = kmPorLitros.filter(litro => {
    return litro > 10;
});

console.log('Os carros que possuem um rendimento superior a 10 km/L são: ');
for (let i = 0; i < rendimentoCarros.length - 1; i++) {
    for (let j = 0; j < rendimentoAcimaDe10.length; j++) {
        if (rendimentoCarros[i][1] === rendimentoAcimaDe10[j]) {
            console.log(`${i + 1} - ${carros[i]} com ${rendimentoCarros[i][1]} km/L.`);
        };
    };
};
