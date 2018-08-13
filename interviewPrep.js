let exampleInput1 = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];
let answer1 = ['h', 'e', 'e', 'l', 'l', 'o', 'o', ' ', 'w', 'o','o', 'r', 'l', 'd', '!']
let exampleInput2 = ['w','h','a','t',' ','o','n',' ','e','a','r','t','h',' ','a','r','e',' ','y','o','u',' ','t','a','l','k','i','n','g',' ','a','b','o','u','t','?']
let answer2 = ['w','h','a','a','t',' ','o','o','n',' ','e','e','a','a','r','t','h',' ','a','a','r','e','e',' ','y','o','o','u','u',' ','t','a','a','l','k','i','i','n','g',' ','a','a','b','o','o','u','u','t','?'];

let tester = (arr1, arr2) => {
  if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
    let message = ' Status: Passes!\n  Output: ' + JSON.stringify(arr1) + '\n' + '___________________________________________________________________________' + '\n';
    return message;
  }
  let message =  'Fails: ' + JSON.stringify(arr1) + ' | ' + JSON.stringify(arr2);
  return message;
}

let vowelDoubler = (input) => {
  // loop through the array at every one of its indexes
    // if the letter we come to is a vowel then we are going to add that character from input to results
    // then no matter what we will add that same charecter
  // return array
  let results = [];
  let counter = 0;
  for (let i =0; i < input.length; i++) {
    // console.log('i: ', i);
    let letter = input[i];
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' /*|| letter === 'y'*/ || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U' /*|| letter === 'Y'*/) {
      results[counter] = letter;
      counter++;
    } 
    results[counter] = letter;
    counter++;
  }
  return results;
}

// let vowelDoubler = (input) => {

// } 

console.log('–––––––\n|test1|\n–––––––\n', tester(vowelDoubler(exampleInput1), answer1));
console.log('–––––––\n|test2|\n–––––––\n', tester(vowelDoubler(exampleInput2), answer2));
