const fs = require('fs');

const content = fs.readFileSync('scratch_faq.txt', 'utf8');
const lines = content.split('\n');

const data = {
  title: "Tanya Jawab Seputar TS Lab School",
  description: "Temukan jawaban untuk pertanyaan yang sering diajukan seputar pendaftaran, program, dan kegiatan di TS Lab School.",
  sections: []
};

let currentSection = null;
let currentQuestion = null;
let currentAnswerLines = [];

const sectionPattern = /^[A-Z]\.\s+(.*)$/;
const questionPattern = /^\d+\.\s+(.*)$/;

for (const line of lines) {
  const strippedLine = line.trim();
  
  if (!strippedLine) {
    if (currentAnswerLines.length > 0) {
      currentAnswerLines.push("");
    }
    continue;
  }
  
  if (sectionPattern.test(strippedLine) && strippedLine.length < 100 && !strippedLine.includes('?')) {
    if (currentQuestion) {
      currentSection.faqs.push({
        question: currentQuestion,
        answer: currentAnswerLines.join('\n').trim()
      });
      currentQuestion = null;
      currentAnswerLines = [];
    }
    
    currentSection = {
      title: strippedLine,
      faqs: []
    };
    data.sections.push(currentSection);
  } else if (questionPattern.test(strippedLine) && strippedLine.length < 200) {
    if (currentQuestion) {
      currentSection.faqs.push({
        question: currentQuestion,
        answer: currentAnswerLines.join('\n').trim()
      });
    }
    
    const match = strippedLine.match(questionPattern);
    currentQuestion = match[1].trim();
    currentAnswerLines = [];
  } else {
    if (currentQuestion) {
      currentAnswerLines.push(strippedLine);
    }
  }
}

if (currentQuestion && currentSection) {
  currentSection.faqs.push({
    question: currentQuestion,
    answer: currentAnswerLines.join('\n').trim()
  });
}

fs.writeFileSync('src/content/settings/faq.json', JSON.stringify(data, null, 2), 'utf8');
console.log('FAQ processed successfully.');
