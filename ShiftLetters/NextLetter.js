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