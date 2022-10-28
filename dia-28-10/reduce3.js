const players = [
    { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
    { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
    { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
    { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
    { fullName: 'Obina Goleador', email: 'melhorqueoetoo@futebol.br' },
  ];
  
  // Reduza o array acima em um objeto conforme o exemplo abaixo
  // {
  //	'Adriano Imperador': 'didico@futebol.br',
  //	'Ronaldinho Gaúcho': 'bruxo@futebol.br',
  //	'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
  //	'Marta Vieira da Silva': 'rainhamarta@futebol.br',
  //  'Obina Goleador': 'melhorqueoetoo@futebol.br',
  // }
  
  const newPlayers = (array) => {
    return array.reduce((acc, cur) => {
      // console.log(acc);
      acc[cur.fullName] = cur.email;
      return acc;
    }, {})
  };
  
  console.log(newPlayers(players));
  
  const bestPlayers = 
  {
      'Adriano Imperador': 'didico@futebol.br',
      'Ronaldinho Gaúcho': 'bruxo@futebol.br',
      'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
      'Marta Vieira da Silva': 'rainhamarta@futebol.br',
   'Obina Goleador': 'melhorqueoetoo@futebol.br',
  }
  
  bestPlayers['Flávia Pereira'] = 'flavia@futebol.br';
  
  // console.log(bestPlayers);