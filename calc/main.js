// const op = require('./operations')
// const opr = require('./constants')


// // console.log(op.add(10, 11))
// // console.log(op.sub(10, 11))
// // console.log(op.mul(10, 11))
// // console.log(op.div(5, 3))
// // console.log(op.modulo(10, 2))
// console.log(op.add(10, 10),opr.ADD_OP, op.add(10, 10))
//console.log(calc(MUL_OP, 10, 2))

// const { calc } = require('./calculo')
// const { MUL_OP } = require('./constants')

// let nb1 = calc('*', 10, 2)
// console.log(nb1) 
// let nb2 = calc('/', 30, 10)
// console.log(nb2)
//console.log(calc('*', 10, 10))

const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { calc } = require('./calculo')
while (true) { 
//demander l operation a effectué
const op = readlineSync.question(chalk.yellow('operator: '))

//demander nb1
let nb1 = readlineSync.question(chalk.blue('what your first number '))
nb1 = Number(nb1)

//demander nb1
let nb2 = readlineSync.question(chalk.grey('what your second number '))
nb2 = Number(nb2)

console.log(chalk.red.bold(calc(op, nb1, nb2)))
break
}
