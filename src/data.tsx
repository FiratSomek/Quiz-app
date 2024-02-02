export interface QuizDataItem {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  options: { title: string; class: string }[];
}

export const quizData: QuizDataItem[] = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Music",
    question: "What is the official name of Prince's backing band?",
    correct_answer: "The Revolution",
    options: [
      { title: "The Paupers", class: "" },
      { title: "The Revolution", class: "" },
      { title: "The Wailers", class: "" },
      { title: "The Heartbreakers", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Board Games",
    question:
      "What was the development code name for the Weatherlight expansion for The Gathering, released in 1997?",
    correct_answer: "Mocha Latte",
    options: [
      { title: "Decaf", class: "" },
      { title: "Frappuccino", class: "" },
      { title: "Mocha Latte", class: "" },
      { title: "Macchiato", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Geography",
    question: "What national museum will you find in Cooperstown, New York?",
    correct_answer: "National Baseball Hall of Fame",
    options: [
      { title: "National Baseball Hall of Fame", class: "" },
      { title: "Metropolitan Museum of Art", class: "" },
      { title: "National Toy Hall of Fame", class: "" },
      { title: "Museum of Modern Art", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "General Knowledge",
    question:
      "Located in Chile, El Teniente is the world's largest underground mine for what metal?",
    correct_answer: "Copper",
    options: [
      { title: "Iron", class: "" },
      { title: "Copper", class: "" },
      { title: "Nickel", class: "" },
      { title: "Silver", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Geography",
    question: "How many countries border Kyrgyzstan?",
    correct_answer: "4",
    options: [
      { title: "3", class: "" },
      { title: "4", class: "" },
      { title: "1", class: "" },
      { title: "6", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "The minigun was designed in 1960 by which manufacturer.",
    correct_answer: "General Electric",
    options: [
      { title: "General Electric", class: "" },
      { title: "Colt Firearms", class: "" },
      { title: "Heckler Koch", class: "" },
      { title: "Sig Sauer", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Comics",
    question: "What is the name of Batman's parents?",
    correct_answer: "Thomas & Martha",
    options: [
      { title: "Joey & Jackie", class: "" },
      { title: "Jason & Sarah", class: "" },
      { title: "Todd & Mira", class: "" },
      { title: "Thomas & Martha", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Geography",
    question: "What are the four corner states of the US?",
    correct_answer: "Utah, Colorado, Arizona, New Mexico",
    options: [
      { title: "Oregon, Idaho, Nevada, Utah", class: "" },
      { title: "Kansas, Oklahoma, Arkansas, Louisiana", class: "" },
      { title: "South Dakota, Minnesota, Nebraska, Iowa", class: "" },
      { title: "Utah, Colorado, Arizona, New Mexico", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "When did the Crisis of the Third Century begin?",
    correct_answer: "235 AD",
    options: [
      { title: "235 BC", class: "" },
      { title: "242 AD", class: "" },
      { title: "235 AD", class: "" },
      { title: "210 AD", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "Which dictator killed the most people?",
    correct_answer: "Mao Zedong",
    options: [
      { title: "Mao Zedong", class: "" },
      { title: "Joseph Stalin", class: "" },
      { title: "Adolf Hitler", class: "" },
      { title: "Kim Il Sung", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Music",
    question: "Who is the lead singer of Arctic Monkeys?",
    correct_answer: "Alex Turner",
    options: [
      { title: "Jamie Cook", class: "" },
      { title: "Alex Turner", class: "" },
      { title: "Matt Helders", class: "" },
      { title: "Nick Malley", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Video Games",
    question: "What year was the game Team Fortress 2 released?",
    correct_answer: "2007",
    options: [
      { title: "2009", class: "" },
      { title: "2005", class: "" },
      { title: "2010", class: "" },
      { title: "2007", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Music",
    question: "Which English guitarist has the nickname Slowhand&quot;?",
    correct_answer: "Eric Clapton",
    options: [
      { title: "Mark Knopfler", class: "" },
      { title: "Eric Clapton", class: "" },
      { title: "Jeff Beck", class: "" },
      { title: "Jimmy Page", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Cartoon Animations",
    question: "In South Park, what is Stan's surname?",
    correct_answer: "Marsh",
    options: [
      { title: "Marsh", class: "" },
      { title: "Stotch", class: "" },
      { title: "Broflovski", class: "" },
      { title: "Tweak", class: "" },
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Sports",
    question: "Which team won 2014 FIFA World Cup in Brazil?",
    correct_answer: "Germany",
    options: [
      { title: "Argentina", class: "" },
      { title: "Brazil", class: "" },
      { title: "Germany", class: "" },
      { title: "Netherlands", class: "" },
    ],
  },
];
