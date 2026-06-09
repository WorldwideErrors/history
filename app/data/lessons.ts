import { Lesson } from "../models/Lesson";

export const lessons: Lesson[] = [
  {
    id: "lesson-1",
    title: "Grote Kerk Breda",
    xpPerQuestion: 10,
    content: [
      {
        id: "fact-1",
        type: "fact",
        content:
          "De Grote Kerk is oorspronkelijk in de 15e eeuw gebouwd en heeft een toren van 97 meter hoog. De bouw van de kerk heeft ongeveer 130 jaar geduurd.",
      },
      {
        id: "image-1",
        type: "image",
        content:
          "https://breda-marketing.stream.prepr.io/44fc3tszz4n5/w_1920/grote-kerk-breda-bovenaanzicht-fmo-foto-breda-marketing-large-2.webp",
      },
      {
        id: "fact-2",
        type: "fact",
        content: "Willem van Oranje ligt begraven in Delft. Toen hij overleed, hadden de Spanjaarden Breda bezet, waardoor een begrafenis in onze stad niet kon.",
      },
      {
        id: "fact-3",
        type: "fact",
        content: "Tijdens de Tweede Wereldoorlog wilde een Duitser de klokken in de toren van de kerk meenemen. Ze lieten de duitsers geloven dat de kerk dan zou instorten.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Waarom kon Willem van Oranje niet begraven worden in Breda?",
        answers: ["Omdat hij in Delft geboren was", "Omdat de Spanjaarden Breda bezet hadden", "Omdat hij geen geld had", "Omdat hij geen familie had"],
        correctIndex: 1,
        correction: "Willem van Oranje kon niet begraven worden in Breda omdat de Spanjaarden Breda bezet hadden, waardoor een begrafenis in onze stad niet kon. Hij ligt daarom begraven in Delft."
      },
      {
        id: "q2",
        question: "Waarom wouden de duitsers de klokken meenemen?",
        answers: ["Zodat de geallieerde troepen de kerk zouden kunnen gebruiken als signaleringspost", "Het plan was om ze om te smelten en te gebruiken voor de wapenindustrie.", "De economie was zo slecht dat ze geen andere keuze hadden", "Zo konden de duitsers de tijd beter bijhouden"],
        correctIndex: 1,
        correction: "De duitsers wilden de klokken meenemen om ze te smelten en te gebruiken voor de wapenindustrie. Ze lieten de Duitsers geloven dat de kerk zou instorten als ze de klokken meenamen, waardoor ze uiteindelijk besloten de klokken te laten staan."
      },
      {
        id: "q3",
        question: "Hoe hoog is de toren ongeveer?",
        answers: ["80 meter", "90 meter", "100 meter", "110 meter"],
        correctIndex: 2,
        correction: "De toren van de Grote Kerk is 97 meter hoog, wat betekent dat het antwoord '100 meter' het dichtst bij het juiste antwoord ligt."
      },
      {
        id: "q4",
        question: "Hoelang heeft de bouw van de kerk geduurd?",
        answers: ["30 jaar", "230 jaar", "130 jaar", "75 jaar"],
        correctIndex: 2,
        correction: "De bouw van de Grote Kerk heeft ongeveer 130 jaar geduurd. Het begon in de 15e eeuw en werd pas in de 16e eeuw voltooid."
      },
      
    ],
  },

  {
    id: "lesson-2",
    title: "Kasteel van Breda",
    xpPerQuestion: 10,
    content: [
      {
        id: "fact-1",
        type: "fact",
        content:
          "Wist je dat het Kasteel van Breda oorspronkelijk in de 12e eeuw werd gebouwd?",
      },
      {
        id: "image-1",
        type: "image",
        content:
          "https://upload.wikimedia.org/wikipedia/commons/8/8c/Kasteel_van_Breda.jpg",
      },
      {
        id: "fact-2",
        type: "fact",
        content:
          "Tegenwoordig is het kasteel onderdeel van de Koninklijke Militaire Academie.",
      },
      {
        id: "fact-3",
        type: "fact",
        content:
          "Het kasteel speelde een belangrijke rol tijdens de Tachtigjarige Oorlog.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Welke opleiding is tegenwoordig gevestigd in het kasteel?",
        answers: [
          "Politieacademie",
          "Koninklijke Militaire Academie",
          "Universiteit van Breda",
          "Marine Academie",
        ],
        correctIndex: 1,
        correction: "Tegenwoordig is het Kasteel van Breda onderdeel van de Koninklijke Militaire Academie, waar toekomstige officieren van het Nederlandse leger worden opgeleid."
      },
    ],
  },

  {
    id: "lesson-3",
    title: "Begijnhof Breda",
    xpPerQuestion: 10,
    content: [
      {
        id: "fact-1",
        type: "fact",
        content:
          "Wist je dat het Begijnhof al sinds de 13e eeuw bestaat?",
      },
      {
        id: "image-1",
        type: "image",
        content:
          "https://upload.wikimedia.org/wikipedia/commons/3/39/Begijnhof_Breda.jpg",
      },
      {
        id: "fact-2",
        type: "fact",
        content:
          "Begijnen waren vrouwen die religieus leefden zonder kloostergeloften af te leggen.",
      },
      {
        id: "fact-3",
        type: "fact",
        content:
          "Het Begijnhof staat bekend om zijn rustige binnentuin en historische huisjes.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Wie woonden er oorspronkelijk in het Begijnhof?",
        answers: [
          "Ridders",
          "Kooplieden",
          "Begijnen",
          "Monniken",
        ],
        correctIndex: 2,
        correction: "Oorspronkelijk woonden er begijnen in het Begijnhof. Ze waren vrouwen die religieus leefden zonder kloostergeloften af te leggen."
      },
    ],
  },
];