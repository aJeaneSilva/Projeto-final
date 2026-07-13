export interface InformacoesPais {
  id: string;
  nome: string;
  imagemBandeira: string;
  vistoEstudos: string;
  vistoTrabalho: string;
  vistoMoradia: string;
  linksIdioma: { nome: string; url: string }[];
  checklist: string[];
}

export const PAISES_MOCK: InformacoesPais[] = [
  {
    id: 'estados-unidos',
    nome: 'Estados Unidos',
    imagemBandeira: '/img/states.png',
    vistoEstudos: 'Visto F-1 (Acadêmico) ou M-1 (Vocacional). Exige o formulário I-20 emitido por uma instituição aprovada pelo SEVP. Restringe o trabalho fora do campus universitário.',
    vistoTrabalho: 'Visto H-1B para profissionais especializados (exige patrocínio/sponsorship da empresa) ou vistos de transferência interna (L-1). Processo altamente competitivo.',
    vistoMoradia: 'Processos baseados em laços familiares, investimentos de grande porte (EB-5), ou loteria de Green Card (Diversity Visa), além de petições de residência baseadas em emprego.',
    linksIdioma: [
      { nome: 'Duolingo - Prática diária', url: 'https://www.duolingo.com' },
      { nome: 'Simulado de Exame TOEFL Oficial', url: 'https://www.ets.org/toefl' },
      { nome: 'Voice of America (VOA) Learning English', url: 'https://learningenglish.voanews.com' }
    ],
    checklist: [
      'Pagar a taxa SEVIS e preencher o formulário DS-160',
      'Agendar e comparecer à entrevista no Consulado Americano',
      'Comprovar fundos financeiros suficientes para cobrir as mensalidades e custos de vida'
    ]
  },
  {
    id: 'canada',
    nome: 'Canadá',
    imagemBandeira: '/img/canada.png',
    vistoEstudos: 'Study Permit. Necessário obter uma Letter of Acceptance (LOA) de uma instituição de ensino reconhecida (DLI). Permite trabalho de meio período sob as regras atuais do governo.',
    vistoTrabalho: 'Open Work Permit (como o PGWP obtido após a conclusão de estudos elegíveis) ou Employer-Specific Work Permit (atrelado a uma aprovação de mercado LMIA).',
    vistoMoradia: 'Express Entry (programas FSWP, FSTP ou CEC). Sistema de seleção por pontos que avalia idade, nível de escolaridade, experiência profissional e proficiência linguística.',
    linksIdioma: [
      { nome: 'Preparatório Oficial CELPIP', url: 'https://www.celpip.ca' },
      { nome: 'British Council - IELTS Gratuito', url: 'https://takeielts.britishcouncil.org' }
    ],
    checklist: [
      'Realizar exames médicos obrigatórios com profissionais credenciados',
      'Providenciar tradução juramentada de históricos escolares e diplomas',
      'Comprovar fundos financeiros exigidos para o primeiro ano de estadia'
    ]
  },
  {
    id: 'suica',
    nome: 'Suíça',
    imagemBandeira: '/img/suica.png',
    vistoEstudos: 'Visto de Estudante (Nacional Tipo D). Exige comprovação de admissão em universidade suíça e plano de estudos. Trabalho permitido apenas após 6 meses de permanência (máx. 15h semanais).',
    vistoTrabalho: 'Altamente restrito para cidadãos de fora da União Europeia (países terceiros). Exige que o empregador prove que não encontrou nenhum candidato qualificado na Suíça ou UE.',
    vistoMoradia: 'Processo longo por meio de autorizações de residência (Permit B e posteriormente Permit C), frequentemente vinculados a contratos de trabalho altamente qualificados ou laços familiares.',
    linksIdioma: [
      { nome: 'Deutsche Welle (Aprender Alemão)', url: 'https://dw.com/de/deutsch-lernen/s-2055' },
      { nome: 'TV5MONDE (Praticar Francês)', url: 'https://apprendre.tv5monde.com' }
    ],
    checklist: [
      'Solicitar o visto tipo D diretamente na embaixada ou consulado no Brasil',
      'Comprovar solvência financeira equivalente a cerca de CHF 21.000 por ano acadêmico',
      'Contratar o seguro de saúde básico obrigatório suíço (LAMal) após a chegada'
    ]
  },
  {
    id: 'irlanda',
    nome: 'Irlanda',
    imagemBandeira: '/img/irlanda.svg',
    vistoEstudos: 'Visto Stamp 2. Exige matrícula em curso de inglês ou superior com duração mínima de 25 semanas em escolas da lista ILEP. Permite trabalhar até 20 horas semanais durante as aulas.',
    vistoTrabalho: 'Critical Skills Employment Permit ou General Employment Permit. Exige uma oferta formal de trabalho de um empregador local e triagem salarial.',
    vistoMoradia: 'Naturalização por tempo de residência (5 anos de tempo legal calculado) ou por casamento com cidadão irlandês/europeu.',
    linksIdioma: [
      { nome: 'Duolingo - Prática Básica', url: 'https://www.duolingo.com' },
      { nome: 'Simulado de Exame IELTS Oficial', url: 'https://www.ielts.org' }
    ],
    checklist: [
      'Emitir ou renovar passaporte (mínimo de 6 meses de validade)',
      'Garantir a quantia de €4.500 para comprovação obrigatória na imigração',
      'Contratar o Seguro Saúde Governamental obrigatório antes do embarque'
    ]
  },
  {
    id: 'alemanha',
    nome: 'Alemanha',
    imagemBandeira: '/img/alemanha.png',
    vistoEstudos: 'Visto de Estudante de Longa Duração (Visum zur Ausbildung). Permite trabalhar por até 140 dias inteiros ou 280 meios-dias por ano. Exige admissão na universidade ou curso preparatório (Studienkolleg).',
    vistoTrabalho: 'Visto para Profissionais Qualificados (Fachkraft) ou Cartão Azul da UE (Blue Card). Exige diploma acadêmico reconhecido na Alemanha (anabin) e contrato de trabalho correspondente.',
    vistoMoradia: 'Autorização de Residência Permanente (Niederlassungserlaubnis), concedida após alguns anos de trabalho regular, pagamento de previdência local e proficiência comprovada em alemão.',
    linksIdioma: [
      { nome: 'Plataforma Gratuita Deutsche Welle', url: 'https://learndeutsch.dw.com' },
      { nome: 'Goethe-Institut (Testes de Nível)', url: 'https://www.goethe.de' }
    ],
    checklist: [
      'Abrir uma Conta Bloqueada (Sperrkonto) com o valor mínimo anual exigido pelo governo',
      'Verificar o reconhecimento do seu diploma na plataforma oficial Anabin',
      'Contratar um seguro saúde de transição (Incoming-Versicherung) para a chegada'
    ]
  },
  {
    id: 'inglaterra',
    nome: 'Inglaterra',
    imagemBandeira: '/img/ingl.png',
    vistoEstudos: 'Student Visa (antigo Tier 4). Exige uma Confirmação de Aceitação de Estudos (CAS) de uma instituição patrocinadora licenciada. Permite trabalho de até 20 horas semanais em cursos superiores.',
    vistoTrabalho: 'Skilled Worker Visa. Baseado em um sistema de pontos. Exige uma oferta de emprego qualificado de um patrocinador aprovado e salário mínimo condizente com a função.',
    vistoMoradia: 'Indefinite Leave to Remain (ILR), que concede direito de moradia permanente após um período contínuo de permanência sob vistos de trabalho ou familiares qualificados (geralmente 5 anos).',
    linksIdioma: [
      { nome: 'British Council Learning English', url: 'https://learnenglish.britishcouncil.org' },
      { nome: 'Cambridge English Preparatórios', url: 'https://www.cambridgeenglish.org' }
    ],
    checklist: [
      'Efetuar o pagamento da taxa do sobrepreço de saúde (Immigration Health Surcharge - IHS)',
      'Realizar o teste oficial de proficiência em inglês aprovado pelo UKVI (SELT)',
      'Organizar extratos bancários demonstrando a guarda do valor de manutenção financeira por 28 dias seguidos'
    ]
  },
  {
    id: 'australia',
    nome: 'Austrália',
    imagemBandeira: '/img/australia.svg',
    vistoEstudos: 'Student Visa (Subclass 500). Exige a Confirmação de Matrícula (CoE) em um curso registrado no CRICOS. Permite trabalhar um limite quinzenal definido pelo governo (atualmente 48 horas).',
    vistoTrabalho: 'Temporary Skill Shortage Visa (Subclass 482) ou vistos pós-estudos (Subclass 485). Exigem qualificações específicas e que a profissão esteja na lista de escassez do país.',
    vistoMoradia: 'Vistos de migração qualificada baseados em pontos (Subclasses 189, 190 ou 491), que avaliam a ocupação profissional, idade e proficiência na língua inglesa.',
    linksIdioma: [
      { nome: 'IELTS Preparation Australia', url: 'https://ielts.com.au' },
      { nome: 'Pearson PTE Academic (Muito aceito na Austrália)', url: 'https://www.pearsonpte.com' }
    ],
    checklist: [
      'Adquirir a cobertura de saúde obrigatória para estudantes estrangeiros (OSHC)',
      'Escrever a carta de intenções exigida pela imigração (Genuine Student Requirement - GS)',
      'Submeter os dados biométricos solicitados logo após dar entrada no visto online'
    ]
  },
  {
    id: 'japao',
    nome: 'Japão',
    imagemBandeira: '/img/japao.jpg',
    vistoEstudos: 'Visto de Estudante. Exige a emissão prévia do Certificado de Elegibilidade (COE) pela imigração japonesa por meio da escola. Permite trabalhar até 28 horas semanais com permissão especial.',
    vistoTrabalho: 'Visto de Profissional Altamente Qualificado ou visto de Trabalho Regular (Engineer/Specialist in Humanities). Exige contrato de trabalho com empresa japonesa disposta a patrocinar o visto.',
    vistoMoradia: 'Status de Residente Permanente, concedido após 10 anos de residência contínua (ou menos tempo para quem acumula pontos altos no visto de profissional qualificado).',
    linksIdioma: [
      { nome: 'NHK WORLD-JAPAN (Aprenda Japonês)', url: 'https://www.nhk.or.jp/lesson/pt/' },
      { nome: 'Plataforma Marugoto Online', url: 'https://www.marugotoweb.jp' }
    ],
    checklist: [
      'Aguardar o envio do Certificado de Elegibilidade (COE) original do Japão',
      'Apresentar o passaporte e o formulário preenchido na Embaixada ou Consulado no Brasil',
      'Comprovar capacidade financeira robusta ou suporte de um fiador para custear o período'
    ]
  },
  {
    id: 'espanha',
    nome: 'Espanha',
    imagemBandeira: '/img/espanha.svg',
    vistoEstudos: 'Visado de Estúdios. Exige carta de aceitação de centro de ensino autorizado e seguro de saúde público ou privado completo. Permite trabalhar até 30 horas semanais se o emprego não atrapalhar as aulas.',
    vistoTrabalho: 'Visado de Trabajo por Cuenta Ajena. Exige que a empresa espanhola comprove a indisponibilidade de profissionais na UE e obtenha autorização inicial de residência laboral.',
    vistoMoradia: 'Cidadãos ibero-americanos (incluindo brasileiros) podem solicitar a nacionalidade espanhola por residência após apenas **2 anos** de moradia legal e contínua no país.',
    linksIdioma: [
      { nome: 'Instituto Cervantes (Materiais Oficiais)', url: 'https://www.cervantes.es' },
      { nome: 'Simulados Práticos do Exame DELE', url: 'https://examenes.cervantes.es' }
    ],
    checklist: [
      'Legalizar e apostilar (Apostila de Haia) todos os documentos brasileiros exigidos',
      'Obter o atestado médico atestando ausência de doenças graves de quarentena',
      'Solicitar o Certificado de Antecedentes Criminais com tradução juramentada para o espanhol'
    ]
  },
  {
    id: 'portugal',
    nome: 'Portugal',
    imagemBandeira: '/img/portugal.png',
    vistoEstudos: 'Visto de Residência para Estudo (Visto D4). Exige matrícula ou carta de aceitação formal em universidade, instituto politécnico ou curso técnico reconhecido legalmente.',
    vistoTrabalho: 'Visto para Procura de Trabalho (válido por 120 a 180 dias) ou Visto D1 (Contrato de Trabalho ativo ou promessa formalizada de contratação).',
    vistoMoradia: 'Visto D7 (para titulares de rendimentos próprios/aposentados) ou Visto D2 (para empreendedores e nômades digitais com comprovação de trabalho remoto estável).',
    linksIdioma: [
      { nome: 'Plataforma de Português Online (Alto Comissariado)', url: 'https://ppl.acm.gov.pt/' },
      { nome: 'Ciberdúvidas da Língua Portuguesa', url: 'https://ciberduvidas.iscte-iul.pt/' }
    ],
    checklist: [
      'Emitir o PB4 (Seguro de Saúde gratuito pelo acordo INSS Brasil-Portugal)',
      'Obter o Certificado de Antecedentes Criminais emitido pela Polícia Federal',
      'Comprovar os meios de subsistência baseados proporcionalmente no salário mínimo português'
    ]
  }
];