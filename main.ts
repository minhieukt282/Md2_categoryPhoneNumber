let viettel: string[] = []
let vina: string[] = []
let mobi: string[] = []

function categoryPhoneNumber(number: string) {
    let firstNumber: string = number.substring(0, 2)
    if (firstNumber == "03") viettel.push(number)
    if (firstNumber == "08") vina.push(number)
    if (firstNumber == "07") mobi.push(number)
}
categoryPhoneNumber("03123")
categoryPhoneNumber("08123")
categoryPhoneNumber("07123")
console.log(viettel)
console.log(vina)
console.log(mobi)