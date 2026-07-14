export interface Parceiro {
  id: number;
  nome: string;
  idade: number;
  genero: 'homem' | 'mulher';
  destino: 'Estados Unidos' | 'Canadá' | 'Suíça' | 'Irlanda' | 'Alemanha' | 'Inglaterra' | 'Austrália' | 'Japão' | 'Espanha' | 'Portugal';
  objetivo: 'trabalho' | 'intercambio' | 'moradia';
  orcamento: 'economico' | 'moderado' | 'alto';
  bio: string;
  fotoUrl: string;
}

export const PARCEIROS_DISPONIVEIS: Parceiro[] = [

  { id: 1, 
    nome: 'Lucas Silva', 
    idade: 25, 
    genero: 'homem', 
    destino: 'Canadá', 
    objetivo: 'intercambio', 
    orcamento: 'moderado', 
    bio: 'Indo focar nos estudos em Vancouver. Curto cafés e passeios culturais.', 
    fotoUrl: '/img/nestor.jpeg' 
  },
  
  { id: 2, 
    nome: 'Arthur ', 
    idade: 28, 
    genero: 'homem', 
    destino: 'Portugal', 
    objetivo: 'trabalho', 
    orcamento: 'economico', 
    bio: 'Nômade digital indo para Lisboa. Quero dividir apartamento para economizar.', 
    fotoUrl: '/img/arte.jpeg' 
  },
  
  { id: 3, 
    nome: 'Gabriel Santos', 
    idade: 23, 
    genero: 'homem', 
    destino: 'Estados Unidos', 
    objetivo: 'intercambio', 
    orcamento: 'economico', 
    bio: 'Mochilão e curso de inglês na Califórnia! Vibe bem aventureira.', 
    fotoUrl: '/img/jj.jpeg' 
  },
  
  { id: 4, 
    nome: 'Beatriz Oliveira', 
    idade: 26, 
    genero: 'mulher', 
    destino: 'Canadá', 
    objetivo: 'intercambio', 
    orcamento: 'moderado', 
    bio: 'Indo para Toronto estudar. Procuro uma parceira para explorar a cidade.', 
    fotoUrl: '/img/julia.jpeg' 
  },
  
  { id: 5, 
    nome: 'Rodrigo Lima', 
    idade: 31, 
    genero: 'homem', 
    destino: 'Portugal', 
    objetivo: 'trabalho', 
    orcamento: 'alto', 
    bio: 'Mudando a trabalho. Curto gastronomia e um estilo de vida mais confortável.', 
    fotoUrl: '/img/vinijr.jpeg' 
  },
  
  { id: 6, 
    nome: 'Amanda Rocha', 
    idade: 24, 
    genero: 'mulher', 
    destino: 'Estados Unidos', 
    objetivo: 'moradia', 
    orcamento: 'alto', 
    bio: 'Me mudando para NY. Quero companhia para sair, turistar e fazer amizades.', 
    fotoUrl: '/img/emo.jpeg' 
  },
  
  { id: 7, 
    nome: 'Juliana Neves', 
    idade: 27, 
    genero: 'mulher', 
    destino: 'Irlanda', 
    objetivo: 'intercambio', 
    orcamento: 'economico', 
    bio: 'Estudando em Dublin! Procuro galera de boa para dividir custos e viajar.', 
    fotoUrl: '/img/bey.jpg'
  },
  
  { id: 8, 
    nome: 'Erick Müller', 
    idade: 30, 
    genero: 'homem', 
    destino: 'Alemanha', 
    objetivo: 'trabalho', 
    orcamento: 'alto', 
    bio: 'Engenheiro mudando para Munique. Procuro alguém para praticar alemão.', 
    fotoUrl: '/img/titi.jpeg' 
  },
  
  { id: 9, 
    nome: 'Carla Souza', 
    idade: 22, 
    genero: 'mulher', 
    destino: 'Japão', 
    objetivo: 'intercambio', 
    orcamento: 'moderado', 
    bio: 'Realizando o sonho de estudar em Tóquio! Quero companhia para explorar a cultura local.', 
    fotoUrl: '/img/nate.jpeg' 
  },
  
  { id: 10, 
    nome: 'Sofia Keller', 
    idade: 29, 
    genero: 'mulher', 
    destino: 'Suíça', 
    objetivo: 'trabalho', 
    orcamento: 'alto', 
    bio: 'Indo trabalhar com finanças em Zurique. Procuro parceiros para esquiar nos fins de semana.', 
    fotoUrl: '/img/gret.webp' 
  },
  
  { id: 11, 
    nome: 'Harry Kane', 
    idade: 24, genero: 'homem', 
    destino: 'Inglaterra', 
    objetivo: 'intercambio', 
    orcamento: 'moderado', 
    bio: 'Indo fazer mestrado em Londres. Curto futebol e quero aproveitar para viajar.', 
    fotoUrl: '/img/coach.jpeg' 
  },
  
  { id: 12, 
    nome: 'Pedro Henrique', 
    idade: 26, 
    genero: 'homem', 
    destino: 'Austrália', 
    objetivo: 'moradia', 
    orcamento: 'economico', 
    bio: 'Indo morar em Sydney para surfar e trabalhar. Procuro uma vibe bem tranquila.', 
    fotoUrl: '/img/gato.jpeg'
  },
  
  { id: 13, 
    nome: 'Sabrina Carpenter', 
    idade: 25, 
    genero: 'mulher', 
    destino: 'Espanha', 
    objetivo: 'intercambio', 
    orcamento: 'economico', 
    bio: 'Estudando em Madrid! Quero companhia para viajar pela Europa gastando pouco.', 
    fotoUrl: '/img/ari.webp' 
  }
];