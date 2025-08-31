// function that splits the string into a array and checks the operator.

// export function stringSplitter(string_exp, val1, val2, valOp, incrementer) {
//     try {
//         incrementer = 0
//         // Split by operator but keep it with capturing group
//         let arr_exp = string_exp.split(/([+\-*/])/).filter(Boolean);
//         val1 = Number(arr_exp[0])
//         val2 = Number(arr_exp[2])
//         valOp = arr_exp[1]
//         incrementer++
//         console.log(val1, val2, valOp)
//         evaluator(val1, val2, valOp)
//     } catch (error) {
//         console.error(error)
//     }
// }

export function stringSplitter(string_exp) {
  try {
    // Split into ["12", "+", "5"]
    let arr_exp = string_exp.split(/([+\-*/])/).filter(Boolean);

    if (arr_exp.length < 3) return Number(arr_exp[0]); // just number typed

    let val1 = Number(arr_exp[0]);
    let val2 = Number(arr_exp[2]);
    let valOp = arr_exp[1];

    let result = evaluator(val1, val2, valOp);
    return result;
  } catch (error) {
    console.error(error);
  }
}


// export function evaluator(x, y, operator) {
//     try {
//         switch (operator) {
//             case '+':
//                 console.log(`operator is + so result is ${x + y}`)
//                 break;
//             case '-':
//                 console.log(`operator is + so result is ${x + y}`)
//                 break;
//             // ... more cases
//             case '/':
//                 console.log(`operator is + so result is ${x + y}`)
//                 break;
//             case '*':
//                 console.log(`operator is + so result is ${x + y}`)
//                 break;            
//         }

//     } catch (error) {
//         console.error(error)
//     }
// }

export function evaluator(x, y, operator) {
  try {
    let result;
    switch (operator) {
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
        break;
      default:
        throw new Error("Unknown operator");
    }
    console.log(`Result: ${result}`);
    return result;
  } catch (error) {
    console.error(error);
  }
}


export function checkOp(doesHave,string_exp, val1, val2, valOp, incrementer ){
    try {
        if(doesHave){
            stringSplitter(string_exp, val1, val2, valOp, incrementer)
        }
    } catch (error) {
        console.error(error)
    }
}