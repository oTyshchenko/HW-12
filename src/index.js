/*const EUROPEAN_COUNTRY_ARR = [
    {name: 'Austria', EU: 1, eurozone: 1, schengen: 1, population: 8 923 507, area: 83 879},
    {name: 'Belgium', EU: 1, eurozone: 1, schengen: 1, population: 11 492 641, area: 30 689},***
    {name: 'Czech Republic', EU: 1, eurozone: 0, schengen: 1, population: 10 707 839, area: 78 866},
    {name: 'Germany', EU: 1, eurozone: 1, schengen: 1, population: 83 166 711, area: 357 022},**
    {name: 'Hungary', EU: 1, eurozone: 0, schengen: 1, population: 973 000, area: 93 030},**
    {name: 'Italy', EU: 1, eurozone: 1, schengen: 1, population: 60 317 116, area: 301 340},
];

const COUNTRY_ARR = [
    1110001000101101101100001010011,
    1110001011001110010000000011111,
    1010001010011101001100001001111,
    1111010001001101111000101100101,
    1010000000111100110100001011101,
    1110111010111001110100100101101
];*/

const COUNTRY_ARR = [1897322579, 1902583839, 1364105295, 2049372517, 1344170077, 2002577709];

const EU = parseInt('1000000000000000000000000000000', 2);
const EUROZONE = parseInt('0100000000000000000000000000000', 2);
const SCHENGEN = parseInt('0010000000000000000000000000000', 2);
const EU_EUROZONE = EU | EUROZONE;

const euAndEurozone = n => (n & EU_EUROZONE).toString(2) === EU_EUROZONE.toString(2);

const shengen = n => 
        (n & EUROZONE).toString(2) === (0).toString(2) 
        && ((n & SCHENGEN).toString(2)) === SCHENGEN.toString(2)
        && (parseInt((n.toString(2).slice(3, 20)),2) > 2000)
        && (parseInt((n.toString(2).slice(20, 31)),2) < 200);

const dencity = n =>
    (parseInt((n.toString(2).slice(3, 20)),2) / parseInt((n.toString(2).slice(20, 31)),2)) > 200
    && (parseInt((n.toString(2).slice(3, 20)),2) / parseInt((n.toString(2).slice(20, 31)),2)) < 400;

console.log(COUNTRY_ARR.filter(euAndEurozone))
console.log(COUNTRY_ARR.filter(shengen));
console.log(COUNTRY_ARR.filter(dencity));