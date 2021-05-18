const firstBtn = document.getElementById('firstBtn');
const secondBtn = document.getElementById('secondBtn');
const thirdBtn = document.getElementById('thirdBtn');
const tbody = document.getElementById('tbody');

const EUROPIAN_COUNTRY_ARR = [
    {name: 'Albania', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 1, density: 0},
    {name: 'Andorra', EU: 0, eurozone: 0, schengen: 0, population: 0, area: 1, density: 0},
    {name: 'Armenia', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 1, density: 0},
    {name: 'Austria', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 1, density: 0},
    {name: 'Azerbaijan', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 1, density: 0},
    {name: 'Belarus', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 0, density: 0},
    {name: 'Belgium', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 1, density: 1},
    {name: 'Bosnia', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 1, density: 0},
    {name: 'Bulgaria', EU: 1, eurozone: 0, schengen: 0, population: 1, area: 1, density: 0},
    {name: 'Croatia', EU: 1, eurozone: 0, schengen: 0, population: 1, area: 1, density: 0},
    {name: 'Cyprus', EU: 1, eurozone: 1, schengen: 0, population: 0, area: 1, density: 0},
    {name: 'Czech Republic', EU: 1, eurozone: 0, schengen: 1, population: 1, area: 1, density: 0},
    {name: 'Denmark', EU: 1, eurozone: 0, schengen: 1, population: 1, area: 1, density: 0},
    {name: 'Estonia', EU: 1, eurozone: 1, schengen: 1, population: 0, area: 1, density: 0}, 
    {name: 'Finland', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 0, density: 0},
    {name: 'France', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 0, density: 0},
    {name: 'Georgia', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 1, density: 0},
    {name: 'Germany', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 0, density: 1},
    {name: 'Greece', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 1, density: 0},
    {name: 'Hungary', EU: 1, eurozone: 0, schengen: 1, population: 1, area: 1, density: 0},
    {name: 'Iceland', EU: 0, eurozone: 0, schengen: 1, population: 0, area: 1, density: 0},
    {name: 'Ireland', EU: 1, eurozone: 1, schengen: 0, population: 1, area: 0, density: 0},
    {name: 'Italy', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 0, density: 1},
    {name: 'Kazakhstan', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 0, density: 1},
    {name: 'Kosovo', EU: 0, eurozone: 0, schengen: 0, population: 0, area: 1, density: 0},
    {name: 'Latvia', EU: 1, eurozone: 1, schengen: 1, population: 0, area: 1, density: 0},
    {name: 'Liechtenstein', EU: 0, eurozone: 0, schengen: 1, population: 0, area: 1, density: 1},
    {name: 'Lithuania', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 1, density: 0},
    {name: 'Luxembourg', EU: 1, eurozone: 1, schengen: 1, population: 0, area: 1, density: 1},
    {name: 'Malta', EU: 1, eurozone: 1, schengen: 1, population: 0, area: 1, density: 0},
    {name: 'Moldova', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 1, density: 0},
    {name: 'Monaco', EU: 0, eurozone: 0, schengen: 0, population: 0, area: 1, density: 1},
    {name: 'Montenegro', EU: 0, eurozone: 0, schengen: 0, population: 0, area: 1, density: 0},
    {name: 'Netherlands', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 1, density: 0},
    {name: 'Macedonia', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 1, density: 0},
    {name: 'Norway', EU: 0, eurozone: 0, schengen: 1, population: 1, area: 0, density: 0},
    {name: 'Poland', EU: 1, eurozone: 0, schengen: 1, population: 1, area: 0, density: 0},
    {name: 'Portugal', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 1, density: 0},
    {name: 'Romania', EU: 1, eurozone: 0, schengen: 0, population: 1, area: 0, density: 0},
    {name: 'Russia', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 0, density: 0},
    {name: 'San Marino', EU: 0, eurozone: 0, schengen: 0, population: 0, area: 1, density: 0},
    {name: 'Serbia', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 0, density: 0},
    {name: 'Slovakia', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 1, density: 0},
    {name: 'Slovenia', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 1, density: 0},
    {name: 'Spain', EU: 1, eurozone: 1, schengen: 1, population: 1, area: 0, density: 0},
    {name: 'Sweden', EU: 1, eurozone: 0, schengen: 1, population: 1, area: 0, density: 0},
    {name: 'Switzerland', EU: 0, eurozone: 0, schengen: 1, population: 1, area: 1, density: 1},
    {name: 'Turkey', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 0, density: 0},
    {name: 'Ukraine', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 0, density: 0},
    {name: 'United Kingdom', EU: 0, eurozone: 0, schengen: 0, population: 1, area: 0, density: 1},
    {name: 'Vatican City', EU: 0, eurozone: 0, schengen: 0, population: 0, area: 1, density: 0}
];

const EU = parseInt('100000', 2); //32
const EUROZONE = parseInt('010000', 2); //16
const SCHENGEN = parseInt('001000', 2); //8
const POPULATION = parseInt('000100', 2); //4
const AREA = parseInt('000010', 2); //2
const DENSITY = parseInt('000001', 2); //1

const EU_EUROZONE = EU | EUROZONE;
const SCHENGEN_POPULATION_AREA = SCHENGEN | POPULATION | AREA;

const euAndEurozone = (n) => (n & EU_EUROZONE).toString(2) === EU_EUROZONE.toString(2);

const shengenPolulationAreaMinusEurozone = (n) => (n & SCHENGEN_POPULATION_AREA).toString(2) 
    === SCHENGEN_POPULATION_AREA.toString(2)
    && ((n & EUROZONE).toString(2)) === (0).toString(2);

const onlyDencity = (n) => (n & DENSITY).toString(2) === DENSITY.toString(2);

const showCountry = (func) => {
    tbody.innerHTML = '';

    EUROPIAN_COUNTRY_ARR.forEach((el) => {
        
        if (func (parseInt((String(el.EU) + el.eurozone + el.schengen + 
        el.population + el.area + el.density), 2))) {
        
        const td = document.createElement('td');
        const tr = document.createElement('tr');
        td.innerText = el.name;
        tr.appendChild(td);
        tbody.appendChild(tr);

        }
    });
};

firstBtn.addEventListener('click', () => {showCountry(euAndEurozone)});
secondBtn.addEventListener('click', () => {showCountry(shengenPolulationAreaMinusEurozone)});
thirdBtn.addEventListener('click', () => {showCountry(onlyDencity)});