const states = [
    { short: "AM", name: "Amazonas" },
    { short: "PA", name: "Pará" },
    { short: "TO", name: "Tocantins" },
    { short: "MG", name: "Minas Gerais" },
    { short: "BA", name: "Bahia" },
    { short: "PR", name: "Paraná" },
    { short: "SP", name: "São Paulo" },
    { short: "RN", name: "Rio Grande do Norte" },
    { short: "CE", name: "Ceará" },
    { short: "MT", name: "Mato Grosso" },
  ];
  
  const regions = [
    { short: "N", name: "Norte" },
    { short: "NE", name: "Nordeste" },
    { short: "CW", name: "Centroeste" },
    { short: "SE", name: "Sudeste" },
    { short: "S", name: "Sul" },
  ];
  
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
    { state: 'MG', name: 'João Pinheiro', region: 'SE'},
    { state: 'MT', name: 'Cuiabá', region: 'CW'},
  ];
  
  // Transforme o array de objetos cities em um array de objetos no seguinte formato:
  // {
  //   state: "Amazonas",
  //   city: "Manaus",
  //   region: "Norte"
  // }
  
  const arrayCities = cities.map((city) => {
    const findState = states.find((state) => state.short === city.state).name;
    const findRegion = regions.find((region) => region.short === city.region);
    return {
      state: findState,
      city: city.name,
      region: findRegion.name
    }
  });
  
  console.log(arrayCities);
  
  //E SE EU QUISER SABER TODOS OS ESTADOS E CIDADES DE UMA DETERMINADA REGIÃO?
  //FORMATO:
  // {
  //   region: "NE",
  //   states: ["Estado1", "Estado2"],
  //   cities: ["Cidade1", "Cidade2"],
  // }
  
  const regionsInformation = regions.map((region) => {
    let respStates = [];
    let respCities = [];
  
    const search = cities.filter((city) => city.region === region.short);
    search.forEach((element) => {
      if (!respStates.includes(element.state)) {
        respStates.push(element.state);
      }
  
      if (!respStates.includes(element.name)) {
        respCities.push(element.name);
      }  
    });
    
    return {
      region: region.name,
      states: respStates,
      cities: respCities,
    }
  });
  
  console.log(regionsInformation);