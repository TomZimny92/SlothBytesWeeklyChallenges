// Next Letter - Sloth Bytes June 18, 2024
//
// Change every letter to the next letter
//      "a" becomes "b"
//      "b" becomes "c"
//      "z" becomes "a"



function RunNextLetter(str) {
    let result = ""
    for (let i = 0; i < str.length; ++i) {
        if (str[i] == "z"){
            result += "a"
        }
        else if (str[i] == " "){
            result += " "
        }
        else {
            result += String.fromCharCode(str.charCodeAt(i) + 1)
        }
    }
    return result
}

module.exports = RunNextLetter
