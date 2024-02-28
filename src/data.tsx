import { OptionClass } from "./components/QuizBoard/QuizBoard";

export interface QuizDataItem {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  options: QuestionOption[];
}

export interface QuestionOption {
  title: string;
  class?: OptionClass;
}

export const quizData: QuizDataItem[] = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Music",
    question: "What is the official name of Prince's backing band?",
    correct_answer: "The Revolution",
    options: [
      { title: "The Paupers"},
      { title: "The Revolution"},
      { title: "The Wailers"},
      { title: "The Heartbreakers"},
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
      { title: "Decaf"},
      { title: "Frappuccino"},
      { title: "Mocha Latte"},
      { title: "Macchiato"},
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Geography",
    question: "What national museum will you find in Cooperstown, New York?",
    correct_answer: "National Baseball Hall of Fame",
    options: [
      { title: "National Baseball Hall of Fame"},
      { title: "Metropolitan Museum of Art"},
      { title: "National Toy Hall of Fame"},
      { title: "Museum of Modern Art"},
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
      { title: "Iron"},
      { title: "Copper"},
      { title: "Nickel"},
      { title: "Silver"},
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Geography",
    question: "How many countries border Kyrgyzstan?",
    correct_answer: "4",
    options: [
      { title: "3"},
      { title: "4"},
      { title: "1"},
      { title: "6"},
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "The minigun was designed in 1960 by which manufacturer.",
    correct_answer: "General Electric",
    options: [
      { title: "General Electric"},
      { title: "Colt Firearms"},
      { title: "Heckler Koch"},
      { title: "Sig Sauer"},
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Comics",
    question: "What is the name of Batman's parents?",
    correct_answer: "Thomas & Martha",
    options: [
      { title: "Joey & Jackie"},
      { title: "Jason & Sarah"},
      { title: "Todd & Mira"},
      { title: "Thomas & Martha"},
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Geography",
    question: "What are the four corner states of the US?",
    correct_answer: "Utah, Colorado, Arizona, New Mexico",
    options: [
      { title: "Oregon, Idaho, Nevada, Utah"},
      { title: "Kansas, Oklahoma, Arkansas, Louisiana"},
      { title: "South Dakota, Minnesota, Nebraska, Iowa"},
      { title: "Utah, Colorado, Arizona, New Mexico"},
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "When did the Crisis of the Third Century begin?",
    correct_answer: "235 AD",
    options: [
      { title: "235 BC"},
      { title: "242 AD"},
      { title: "235 AD"},
      { title: "210 AD"},
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "Which dictator killed the most people?",
    correct_answer: "Mao Zedong",
    options: [
      { title: "Mao Zedong"},
      { title: "Joseph Stalin"},
      { title: "Adolf Hitler"},
      { title: "Kim Il Sung"},
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Music",
    question: "Who is the lead singer of Arctic Monkeys?",
    correct_answer: "Alex Turner",
    options: [
      { title: "Jamie Cook"},
      { title: "Alex Turner"},
      { title: "Matt Helders"},
      { title: "Nick Malley"},
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Video Games",
    question: "What year was the game Team Fortress 2 released?",
    correct_answer: "2007",
    options: [
      { title: "2009"},
      { title: "2005"},
      { title: "2010"},
      { title: "2007"},
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Music",
    question: "Which English guitarist has the nickname Slowhand?",
    correct_answer: "Eric Clapton",
    options: [
      { title: "Mark Knopfler"},
      { title: "Eric Clapton"},
      { title: "Jeff Beck"},
      { title: "Jimmy Page"},
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Cartoon Animations",
    question: "In South Park, what is Stan's surname?",
    correct_answer: "Marsh",
    options: [
      { title: "Marsh"},
      { title: "Stotch"},
      { title: "Broflovski"},
      { title: "Tweak"},
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Sports",
    question: "Which team won 2014 FIFA World Cup in Brazil?",
    correct_answer: "Germany",
    options: [
      { title: "Argentina"},
      { title: "Brazil"},
      { title: "Germany"},
      { title: "Netherlands"},
    ],
  },
];
