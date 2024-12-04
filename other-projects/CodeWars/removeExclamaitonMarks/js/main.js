function removeExclamationMarks(s) {
    return s.split('').filter((c) => c != '!').join('');
  }


function removeExclamationMarks2(s) {
    return s.split('h', 1).join('');
  }
  
  console.log(removeExclamationMarks2('Hello World! Other text here'));