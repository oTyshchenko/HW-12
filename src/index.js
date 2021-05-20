const EUROPIAN_COUNTRY_ARR = [
    {name: 'Austria', EU: 1, eurozone: 1, schengen: 1, population: 8923507, area: 83879},
    {name: 'Belgium', EU: 1, eurozone: 1, schengen: 1, population: 11492641, area: 30689},
    {name: 'Czech Republic', EU: 1, eurozone: 0, schengen: 1, population: 10707839, area: 78866},
    {name: 'Germany', EU: 1, eurozone: 1, schengen: 1, population: 83166711, area: 357022},
    {name: 'Hungary', EU: 1, eurozone: 0, schengen: 1, population: 973000, area: 93030},
    {name: 'Italy', EU: 1, eurozone: 1, schengen: 1, population: 60317116, area: 301340},
];
const KEY = 15623;

EUROPIAN_COUNTRY_ARR_CODE = EUROPIAN_COUNTRY_ARR.map(function(el) {
    return ((el.EU^KEY) + 'a' + (el.eurozone^KEY) + 'a' + (el.schengen^KEY) + 'a' + 
    (el.population^KEY) + 'a' + (el.area^KEY));
        
})

const euAndEurozone = (n) => {
    arr = n.split('a');
    arr2 = arr.map(el => el^KEY)
    if (arr2[0] && arr2[1] === 1) {
        return true
    }
}

const shengenPolulationAreaMinusEurozone = (n) => {
    arr = n.split('a');
    arr2 = arr.map(el => el^KEY)
    if (arr2[1] === 0 && arr2[2] === 1 && arr2[3] > 2000000 && arr2[4] < 200000) {
        return true
    }
}

const onlyDencity = (n) => {
    arr = n.split('a');
    arr2 = arr.map(el => el^KEY)
    if ((arr2[3] / arr2[4]) < 400 && (arr2[3] / arr2[4]) > 200) {
        return true
    }
}

console.log(EUROPIAN_COUNTRY_ARR_CODE.filter(euAndEurozone));
console.log(EUROPIAN_COUNTRY_ARR_CODE.filter(shengenPolulationAreaMinusEurozone));
console.log(EUROPIAN_COUNTRY_ARR_CODE.filter(onlyDencity));