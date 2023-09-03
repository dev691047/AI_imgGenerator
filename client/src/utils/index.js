import { surpriseMePrompts } from "../constants";

function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  // console.log(randomIndex);
  // console.log(randomPrompt);
  // if (randomPrompt === this.prompt) {
  //   return getRandomPrompt(prompt);
  // }
  return randomPrompt;
}
export default getRandomPrompt;
