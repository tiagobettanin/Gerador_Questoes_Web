import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from "docx";
import { saveAs } from "file-saver";

function safeFileName(name) {
  return String(name || "lista-de-exercicios")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9-_ ]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function createTextParagraph(text, options = {}) {
  return new Paragraph({
    spacing: {
      after: options.after ?? 160,
    },
    children: [
      new TextRun({
        text: text || "",
        bold: options.bold ?? false,
        size: options.size ?? 24,
      }),
    ],
  });
}

function getCorrectAnswer(question) {
  return question.correctAnswer || question.correct_answer || "";
}

function getExpectedAnswer(question) {
  return question.answer || "";
}

function createQuestionParagraph(question, index) {
  return [
    new Paragraph({
      spacing: {
        before: 240,
        after: 120,
      },
      children: [
        new TextRun({
          text: `Questão ${index + 1}`,
          bold: true,
          size: 26,
        }),
      ],
    }),

    createTextParagraph(question.statement || "Enunciado não informado."),

    ...(question.alternatives && question.alternatives.length > 0
      ? question.alternatives.map(
          (alternative) =>
            new Paragraph({
              spacing: {
                after: 80,
              },
              indent: {
                left: 360,
              },
              children: [
                new TextRun({
                  text: alternative,
                  size: 23,
                }),
              ],
            })
        )
      : []),
  ];
}

function createAnswerParagraph(question, index) {
  const correctAnswer = getCorrectAnswer(question);
  const expectedAnswer = getExpectedAnswer(question);
  const explanation = question.explanation || "";

  return [
    new Paragraph({
      spacing: {
        before: 240,
        after: 120,
      },
      children: [
        new TextRun({
          text: `Questão ${index + 1}`,
          bold: true,
          size: 25,
        }),
      ],
    }),

    ...(correctAnswer
      ? [
          createTextParagraph(`Resposta correta: ${correctAnswer}`, {
            size: 22,
          }),
        ]
      : []),

    ...(expectedAnswer
      ? [
          createTextParagraph(`Resposta esperada: ${expectedAnswer}`, {
            size: 22,
          }),
        ]
      : []),

    ...(explanation
      ? [
          createTextParagraph(`Explicação: ${explanation}`, {
            size: 22,
          }),
        ]
      : []),

    ...(!correctAnswer && !expectedAnswer && !explanation
      ? [
          createTextParagraph("Resposta não informada.", {
            size: 22,
          }),
        ]
      : []),
  ];
}

export async function exportExerciseListToDocx(exerciseList) {
  const questions = exerciseList.questions || [];

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1440,
              right: 1440,
              bottom: 1440,
              left: 1440,
            },
          },
        },
        children: [
          new Paragraph({
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: {
              after: 300,
            },
            children: [
              new TextRun({
                text: exerciseList.title || "Lista de Exercícios",
                bold: true,
                size: 36,
              }),
            ],
          }),

          createTextParagraph(`Disciplina: ${exerciseList.subject || "-"}`, {
            bold: true,
          }),

          createTextParagraph(`Ano escolar: ${exerciseList.schoolYear || "-"}`),

          createTextParagraph(`Assunto: ${exerciseList.topic || "-"}`),

          createTextParagraph(`Dificuldade: ${exerciseList.difficulty || "-"}`),

          createTextParagraph(
            `Tipo de questão: ${exerciseList.questionType || "-"}`
          ),

          createTextParagraph(`Quantidade: ${questions.length}`),

          ...(exerciseList.description
            ? [
                createTextParagraph(
                  `Observações: ${exerciseList.description}`
                ),
              ]
            : []),

          new Paragraph({
            spacing: {
              before: 300,
              after: 200,
            },
            children: [
              new TextRun({
                text: "Questões",
                bold: true,
                size: 30,
              }),
            ],
          }),

          ...questions.flatMap((question, index) =>
            createQuestionParagraph(question, index)
          ),

          new Paragraph({
            pageBreakBefore: true,
            spacing: {
              after: 240,
            },
            children: [
              new TextRun({
                text: "Gabarito",
                bold: true,
                size: 32,
              }),
            ],
          }),

          ...questions.flatMap((question, index) =>
            createAnswerParagraph(question, index)
          ),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const fileName = `${safeFileName(exerciseList.title)}.docx`;

  saveAs(blob, fileName);
}