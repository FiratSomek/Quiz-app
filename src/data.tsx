export interface QuizDataItem {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
<<<<<<< Updated upstream
  options: string[];
=======
  options: QuestionOption[];
}

export interface QuestionOption {
  title: string;
  class: string;
>>>>>>> Stashed changes
}

export const quizData: QuizDataItem[] = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Music",
    question: "What is the official name of Prince's backing band?",
    correct_answer: "The Revolution",
    options: [
      "The Paupers",
      "The Revolution",
      "The Wailers",
      "The Heartbreakers",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Board Games",
    question:
      "What was the development code name for the Weatherlight expansion for  The Gathering, released in 1997?",
    correct_answer: "Mocha Latte",
    options: ["Decaf", "Frappuccino", "Mocha Latte", "Macchiato"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Geography",
    question: "What national museum will you find in Cooperstown, New York?",
    correct_answer: "National Baseball Hall of Fame",
    options: [
      "National Baseball Hall of Fame",
      "Metropolitan Museum of Art",
      "National Toy Hall of Fame",
      "Museum of Modern Art",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "General Knowledge",
    question:
      "Located in Chile, El Teniente is the world's largest underground mine for what metal?",
    correct_answer: "Copper",
    options: ["Iron", "Copper", "Nickel", "Silver"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Geography",
    question: "How many countries border Kyrgyzstan?",
    correct_answer: "4",
    options: ["3", "4", "1", "6"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "The minigun was designed in 1960 by which manufacturer.",
    correct_answer: "General Electric",
    options: ["General Electric", "Colt Firearms", "Heckler Koch", "Sig Sauer"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Comics",
    question: "What is the name of Batman's parents?",
    correct_answer: "Thomas & Martha",
    options: [
      "Joey & Jackie",
      "Jason & Sarah",
      "Todd & Mira",
      "Thomas & Martha",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Geography",
    question: "What are the four corner states of the US?",
    correct_answer: "Utah, Colorado, Arizona, New Mexico",
    options: [
      "Oregon, Idaho, Nevada, Utah",
      "Kansas, Oklahoma, Arkansas, Louisiana",
      "South Dakota, Minnesota, Nebraska, Iowa",
      "Utah, Colorado, Arizona, New Mexico",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "When did the Crisis of the Third Century begin?",
    correct_answer: "235 AD",
    options: ["235 BC", "242 AD", "235 AD", "210 AD"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "Which dictator killed the most people?",
    correct_answer: "Mao Zedong",
    options: ["Mao Zedong", "Joseph Stalin", "Adolf Hitler", "Kim Il Sung"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Music",
    question: "Who is the lead singer of Arctic Monkeys?",
    correct_answer: "Alex Turner",
    options: ["Jamie Cook", "Alex Turner", "Matt Helders", "Nick Malley"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Video Games",
    question: "What year was the game Team Fortress 2 released?",
    correct_answer: "2007",
    options: ["2009", "2005", "2010", "2007"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Music",
    question: "Which English guitarist has the nickname Slowhand?",
    correct_answer: "Eric Clapton",
    options: ["Mark Knopfler", "Eric Clapton", "Jeff Beck", "Jimmy Page"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Cartoon Animations",
    question: "In South Park, what is Stan's surname?",
    correct_answer: "Marsh",
    options: ["Marsh", "Stotch", "Broflovski", "Tweak"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Sports",
    question: "Which team won 2014 FIFA World Cup in Brazil?",
    correct_answer: "Germany",
    options: ["Argentina", "Brazil", "Germany", "Netherlands"],
  },
];
