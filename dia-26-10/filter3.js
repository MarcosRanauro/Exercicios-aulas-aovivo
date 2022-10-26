const cities = [
    { state: 'AM', name: 'Manaus', region: 'N'},
    { state: 'PA', name: 'Belém', region: 'N'},
    { state: 'TO', name: 'Porto Nacional', region: 'N'},
    { state: 'MG', name: 'Nepomuceno', region: 'SE'},
    { state: 'BA', name: 'Cachoeira', region: 'NE'},
    { state: 'PR', name: 'Curitiba', region: 'S'},
    { state: 'SP', name: 'Hortolândia', region: 'SE'},
    { state: 'RN', name: 'Touros', region: 'NE'},
    { state: 'CE', name: 'Jericoacoara', region: 'NE'},
    { state: 'TO', name: 'Três Pedras', region: 'N'},
    { state: 'MG', name: 'João Pinheiro', region: 'SE'}
  ];
  
  // 1. Encontre todas as cidades da região Nordeste (NE)
  
  const citiesNENames = () => {
    // return cities.filter((city) => city.region === 'NE').map((city) => city.name);
    return cities.filter((city) => city.region === 'NE')
    .map((city) => city.name);
  }
  
  console.log(citiesNENames());
  
  // 2. Encontre todas as cidades que comecem com a letra C
  
  const filterCitiesName = (letter) => {
    // return cities.filter((city) => city.name[0] === letter);
    return cities.filter((city) => city.name.endsWith(letter));
  }
  
  console.log('As cidades que começam com a letra C são: ');
  console.log(filterCitiesName('a'));