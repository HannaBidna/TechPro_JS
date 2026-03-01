const reg = /^[^aA]{6,}$/;

const words = [
  "Wonderful",
  "Joyful",
  "Happiness",
  "Time",
  "Task",
  "Apple"
];

for (let i = 0; i < words.length; i++) {
  if (reg.test(words[i])) {
    console.log(words[i]);
  }
}
