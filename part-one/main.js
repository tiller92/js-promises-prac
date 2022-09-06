const favsList = document.getElementById('favsList')
const multNums = document.getElementById('multNums')


function multipleNums(arr) {
    const strQ = arr.join(',')
    res = axios.get(`http://numbersapi.com/${strQ}?json`).then((data) => {
        for (let num of arr) {
            let newFact = document.createElement('li')
            newFact.innerHTML = data['data'][num]
            multNums.append(newFact)
        }
    })

}

multipleNums([5, 2, 7])

function favNum(num) {
    for (let i = 0; i < 4; i++) {
        res = axios.get(`http://numbersapi.com/${num}?json`).then((data) => {
            const favItem = document.createElement('li')
            favItem.innerHTML = data.data.text
            favsList.append(favItem)

        })
    }
}

favNum(7)