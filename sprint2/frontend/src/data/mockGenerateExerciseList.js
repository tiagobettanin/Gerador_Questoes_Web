function buildAlternatives(topic, subject) {
  return [
    `A) Uma resposta simples sobre ${topic}`,
    `B) Uma opção parecida, mas incompleta`,
    `C) A resposta correta para o conteúdo de ${subject}`,
    `D) Uma alternativa que não resolve a questão`,
  ];
}

function buildStatement({ subject, schoolYear, topic }, questionNumber) {
  const examples = {
    Matemática: `Observe uma situação do cotidiano e resolva o problema sobre ${topic}.`,
    Português: `Leia com atenção e responda à questão sobre ${topic}.`,
    Ciências: `Pense no que você aprendeu em Ciências e responda sobre ${topic}.`,
    História: `Relembre o conteúdo estudado e responda sobre ${topic}.`,
    Geografia: `Observe o espaço onde vivemos e responda sobre ${topic}.`,
  };

  return `Questão ${questionNumber}: ${examples[subject] || examples.Português} Esta atividade foi preparada para o ${schoolYear}.`;
}

export function mockGenerateExerciseList(formData) {
  const quantity = Number(formData.quantity);
  const hasAlternatives = formData.questionType === "Múltipla escolha";

  return {
    id: Date.now(),
    title: `${formData.subject} - ${formData.topic}`,
    subject: formData.subject,
    schoolYear: formData.schoolYear,
    topic: formData.topic,
    difficulty: formData.difficulty,
    questionType: formData.questionType,
    quantity,
    createdAt: new Date().toLocaleDateString("pt-BR"),
    questions: Array.from({ length: quantity }, (_, index) => ({
      id: index + 1,
      statement: buildStatement(formData, index + 1),
      alternatives: hasAlternatives
        ? buildAlternatives(formData.topic, formData.subject)
        : [],
      correctAnswer: hasAlternatives
        ? "C"
        : `Resposta esperada sobre ${formData.topic}, usando palavras adequadas ao ${formData.schoolYear}.`,
      explanation: `A questão usa linguagem simples para revisar ${formData.topic} em ${formData.subject}, respeitando o nível do Fundamental 1.`,
    })),
  };
}
