const personagens = [
    {
      nome: "Steve Rogers",
      codinome: "Capitão América",
      armaPrincipal: "Escudo americano",
      armaSecundaria: "",
      velocidade: 85,
      forca: 75,
      resistencia: 80,
      vitorias: 0 // contador de vitórias
    },
    {
      nome: "Tony Stark",
      codinome: "Homem de Ferro",
      armaPrincipal: "Armadura tecnológica",
      armaSecundaria: "Inteligência artificial",
      velocidade: 70,
      forca: 80,
      resistencia: 85,
      vitorias: 0
    },
    {
      nome: "Thor Odinson",
      codinome: "Thor",
      armaPrincipal: "Mjolnir",
      armaSecundaria: "Stormbreaker",
      velocidade: 75,
      forca: 95,
      resistencia: 90,
      vitorias: 0
    },
    {
      nome: "Bruce Banner",
      codinome: "Hulk",
      armaPrincipal: "Super força",
      armaSecundaria: "Regeneração",
      velocidade: 60,
      forca: 100,
      resistencia: 95,
      vitorias: 0
    },
    {
      nome: "Natasha Romanoff",
      codinome: "Viúva Negra",
      armaPrincipal: "Artes marciais",
      armaSecundaria: "Armas de fogo",
      velocidade: 85,
      forca: 70,
      resistencia: 75,
      vitorias: 0
    },
    {
      nome: "Thanos",
      codinome: "Titã Louco",
      armaPrincipal: "Manopla do Infinito",
      armaSecundaria: "Força bruta",
      velocidade: 70,
      forca: 100,
      resistencia: 100,
      vitorias: 0
    }
  ];
  
  // Função que compara dois personagens e retorna o vencedor do confronto
  function compararPersonagens(persA, persB) {
    let pontosA = 0;
    let pontosB = 0;
  
    // Comparação de Força
    if (persA.forca > persB.forca) {
      pontosA++;
    } else if (persA.forca < persB.forca) {
      pontosB++;
    }
  
    // Comparação de Velocidade
    if (persA.velocidade > persB.velocidade) {
      pontosA++;
    } else if (persA.velocidade < persB.velocidade) {
      pontosB++;
    }
  
    // Comparação de Resistência
    if (persA.resistencia > persB.resistencia) {
      pontosA++;
    } else if (persA.resistencia < persB.resistencia) {
      pontosB++;
    }
  
    if (pontosA > pontosB) {
      console.log(`${persA.codinome} vence ${persB.codinome} (${pontosA} x ${pontosB})`);
      persA.vitorias++;
    } else if (pontosA < pontosB) {
      console.log(`${persB.codinome} vence ${persA.codinome} (${pontosB} x ${pontosA})`);
      persB.vitorias++;
    } else {
      console.log(`Empate entre ${persA.codinome} e ${persB.codinome} (${pontosA} x ${pontosB})`);
    }
  }
  
  // Compara todos os personagens entre si (cada par é confrontado uma única vez)
  for (let i = 0; i < personagens.length; i++) {
    for (let j = i + 1; j < personagens.length; j++) {
      compararPersonagens(personagens[i], personagens[j]);
    }
  }
  
  // Exibe o ranking geral com base no número de vitórias
  console.log("\nRanking Geral:");
  
  const ranking = personagens.sort((a, b) => b.vitorias - a.vitorias);
  ranking.forEach((pers, index) => {
    console.log(`${index + 1}º - ${pers.codinome}: ${pers.vitorias} vitória(s)`);
  });
  
