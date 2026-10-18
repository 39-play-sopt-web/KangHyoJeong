function solution(names) {
    var result = [];
    for(let i =0; i < names.length; i += 5){
        result.push(names[i]);
    }
    return result;
}
