// var inputString = input("sample word? ").strip()
// var newString = ""
// var vowels = ['a', 'e', 'i', 'o', 'u']
// var lastChar = None
// let char  inputString:
//     if char.lower() in vowels && lastChar == char.lower():
//         char * 4;
//     newstring += char
//     last_char = char.lower()
// print(newString)


function longLong(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let newWord = ''
    let prevChar = ''
    for (let char of word){
        if (char.toLowerCase() === prevChar && vowels.includes(char)) {
            newWord = newWord + char.repeat(4);
            } else {
                newWord = newWord + char;
            }
            prevChar = char.toLowerCase()
        }
        return newWord
    }

console.log(longLong('cheese'))