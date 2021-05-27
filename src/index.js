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

const EU = 1073741824;
const EUROZONE = 536870912;
const SCHENGEN = 268435456;
const POPULATION_MAX = 2000; //thousand
const AREA_MAX = 200; //thousand
const DENSITY = {
    min: 200,
    max: 400
};

const getEuropian = n => n & EU;
const getEurozone = n => n & EUROZONE;
const getShengen = n => n & SCHENGEN;
const getPopulation = n => ((n<<4)>>>15);
const getArea = n => ((n<<21)>>>21);
const getDensity = n => getPopulation(n) / getArea(n);

const predicateA = n => getEuropian(n) === EU && getEurozone(n) === EUROZONE;
const predicateB = n => 
    (n & EUROZONE) !== EUROZONE
    && (n & SCHENGEN) === SCHENGEN
    && getPopulation(n) > POPULATION_MAX
    && getArea(n) < AREA_MAX;
const predicateC = n => getDensity(n) > DENSITY.min && getDensity(n) < DENSITY.max;

console.log(COUNTRY_ARR.filter(predicateA))
console.log(COUNTRY_ARR.filter(predicateB));
console.log(COUNTRY_ARR.filter(predicateC));