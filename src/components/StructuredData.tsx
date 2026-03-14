export default function StructuredData() {
  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Victor Venâncio",
    description:
      "Médico especialista em reposição hormonal com implantes e medicina metabólica feminina. Criador do Método EmaCrescer® para mulheres no climatério.",
    url: "https://drvictorvenancio.com.br",
    telephone: "+5531991467509",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Teixeira da Silva, 34, Sala 71",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "01318-020",
      addressCountry: "BR",
      neighborhood: "Bela Vista",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.5631,
      longitude: -46.6531,
    },
    medicalSpecialty: [
      "Endocrinologia",
      "Medicina Metabólica",
      "Reposição Hormonal",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Reposição Hormonal com Implantes (Pellets)",
        description:
          "Implantes subcutâneos de hormônios bioidênticos para tratamento do climatério e menopausa.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Protocolo Metabólico para Emagrecimento",
        description:
          "Tratamento clínico individualizado para emagrecimento com base em avaliação hormonal e metabólica.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Diagnóstico Hormonal Completo",
        description:
          "Avaliação clínica e laboratorial aprofundada para mapear desequilíbrios hormonais.",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    image: "/dr-victor-profissional.webp",
    priceRange: "$$",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Consultório Dr. Victor Venâncio",
    description:
      "Consultório especializado em reposição hormonal feminina e medicina metabólica na Bela Vista, São Paulo.",
    url: "https://drvictorvenancio.com.br",
    telephone: "+5531991467509",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Teixeira da Silva, 34, Sala 71",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "01318-020",
      addressCountry: "BR",
      neighborhood: "Bela Vista",
    },
    image: "/dr-victor-profissional.webp",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Tenho mais de 35 anos mas ainda não entrei na menopausa. O tratamento é indicado para mim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O climatério começa muito antes da menopausa — é um processo gradual que pode iniciar a partir dos 35 anos, com queda progressiva dos hormônios. Se você está sentindo mudanças no corpo, no humor, no peso ou na energia, vale fazer a avaliação.",
        },
      },
      {
        "@type": "Question",
        name: "O implante hormonal dói? Como funciona na prática?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O pellet é um procedimento ambulatorial rápido, feito com anestesia local. Um pequeno cilindro com hormônios bioidênticos é inserido sob a pele — geralmente na região glútea. O desconforto é mínimo, e a liberação é contínua e estável por meses.",
        },
      },
      {
        "@type": "Question",
        name: "Quais resultados posso esperar e em quanto tempo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pacientes relatam melhora de energia e sono nas primeiras semanas, e resultados mais expressivos em composição corporal e bem-estar ao longo dos primeiros 2 a 4 meses.",
        },
      },
      {
        "@type": "Question",
        name: "O tratamento hormonal é seguro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A reposição hormonal bioidêntica, quando prescrita por médico especializado com base em exames e avaliação clínica, é segura e tem ampla evidência científica. Contraindicações são avaliadas na consulta.",
        },
      },
      {
        "@type": "Question",
        name: "O atendimento é presencial ou pode ser online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A consulta inicial e o procedimento do implante são presenciais, realizados no consultório na Rua Teixeira da Silva, 34, Sala 71 — Bela Vista, São Paulo/SP. O acompanhamento entre consultas pode acontecer por canal direto com a equipe.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physician) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
