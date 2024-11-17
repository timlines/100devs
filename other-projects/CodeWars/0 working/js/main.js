function getCount(str){
    return str.match(/[aeiou]/ig).length
}

console.log(getCount('abcdefg')); // 2