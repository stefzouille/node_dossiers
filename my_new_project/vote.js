// vote.js

const chalk = require('chalk')
const readlineSync = require('readline-sync')

const MAX_VOTERS = 1

let isRunning = true
let counter = 0

while (isRunning) {
  const userName = readlineSync.question('Que faut il faire cette aprem? ')
  const ageStr = readlineSync.question('Combien d heures dure la torture? ')
  const genreStr = readlineSync.question('Suis je le seul a pas avoir compris? ')
  const age = Number(ageStr)
  

  if (age >= 2) {
    ++counter
    console.log(
      chalk.green(`${userName} heu??!! c est pas moi qui vais t aidé je ne sais pas non plus.`)
    )
    console.log('')
  } else {
    console.log(chalk.red(`${userName} ha bah bravo tu dors ou quoi?`))
    isRunning = false
  }
  if (counter >= MAX_VOTERS) {
    // exit the loop
    isRunning = false
  }
}
console.log('fin de ta life!!')