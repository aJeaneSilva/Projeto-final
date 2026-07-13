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
    fotoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150' 
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
    fotoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150' 
  },
  
  { id: 9, 
    nome: 'Carla Souza', 
    idade: 22, 
    genero: 'mulher', 
    destino: 'Japão', 
    objetivo: 'intercambio', 
    orcamento: 'moderado', 
    bio: 'Realizando o sonho de estudar em Tóquio! Quero companhia para explorar a cultura local.', 
    fotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150' 
  },
  
  { id: 10, 
    nome: 'Sofia Keller', 
    idade: 29, 
    genero: 'mulher', 
    destino: 'Suíça', 
    objetivo: 'trabalho', 
    orcamento: 'alto', 
    bio: 'Indo trabalhar com finanças em Zurique. Procuro parceiros para esquiar nos fins de semana.', 
    fotoUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150' 
  },
  
  { id: 11, 
    nome: 'Arthur Reis', 
    idade: 24, genero: 'homem', 
    destino: 'Inglaterra', 
    objetivo: 'intercambio', 
    orcamento: 'moderado', 
    bio: 'Indo fazer mestrado em Londres. Curto futebol e quero aproveitar para viajar.', 
    fotoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150' 
  },
  
  { id: 12, 
    nome: 'Pedro Henrique', 
    idade: 26, 
    genero: 'homem', 
    destino: 'Austrália', 
    objetivo: 'moradia', 
    orcamento: 'economico', 
    bio: 'Indo morar em Sydney para surfar e trabalhar. Procuro uma vibe bem tranquila.', 
    fotoUrl: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=150' 
  },
  
  { id: 13, 
    nome: 'Isabela Alencar', 
    idade: 25, 
    genero: 'mulher', 
    destino: 'Espanha', 
    objetivo: 'intercambio', 
    orcamento: 'economico', 
    bio: 'Estudando em Madrid! Quero companhia para viajar pela Europa gastando pouco.', 
    fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' 
  }
];