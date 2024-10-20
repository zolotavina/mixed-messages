const quoteParts = {
  beginnings: [
    "Success starts when",
    "The greatest strength is found when",
    "Dreams become reality when",
    "Every challenge is easier when",
    "The key to growth is",
    "With passion and dedication,",
    "Balancing family and business is possible when",
    "The path to success opens when",
    "Let your determination guide you when",
    "Achieving your goals is possible when",
  ],
  middles: [
    "you believe in yourself",
    "you embrace the journey",
    "you stay focused and organized",
    "you trust the process",
    "you take small steps each day",
    "you balance work and family",
    "you invest in your dreams",
    "you find time for self-care",
    "you ask for help when needed",
    "you stay true to your vision",
  ],
  endings: [
    "and keep pushing forward.",
    "and never give up.",
    "and watch your dreams grow.",
    "and success will follow.",
    "and find joy in the process.",
    "and stay resilient through it all.",
    "and create your own success.",
    "and reach new heights.",
    "and turn challenges into opportunities.",
    "and make your vision a reality.",
  ],
};

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateNewQuote = ({ beginnings, middles, endings }) => {
  const beginning = getRandomElement(beginnings);
  const middle = getRandomElement(middles);
  const ending = getRandomElement(endings);

  return `${beginning} ${middle} ${ending}`;
};

console.log(generateNewQuote(quoteParts));