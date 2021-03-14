const { add, sub, mul, div, modulo } = require('./operations')
const { ADD_OP, SUB_OP, MUL_OP, DIV_OP, MOD_OP } = require('./constants')

exports.calc = (op, nb1, nb2) => {
//   switch (op) {
//     case ADD_OP:
//       return add(nb1, nb2)
//     case SUB_OP:
//       return sub(nb1, nb2)
//     case MUL_OP:
//       return mul(nb1, nb2)
//     case DIV_OP:
//       return div(nb1, nb2)
//     case MOD_OP:
//       return modulo(nb1, nb2)
//     default:
//       return `Unknow operator ${op}`
//   }
// }
    if (op == '*') {                 // ou au lieu de switch
      return mul(nb1, nb2)
    } else if (op == '-') {
      return sub(nb1, nb2)
    } else if (op == '+') {
      return add(nb1, nb2)
    } else if (op == '/') {
      return div(nb1, nb2)
    } else if (op == '%') {
      return modulo(nb1, nb2)
    } else {
      return `Unknow operator ${op}`
    }
}