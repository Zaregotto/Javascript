const arr = [50, 60, 30, 25, -98, 14, -228, 666, 1488, 1337];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
function reducer(previousValue, currentValue) {
    // console.log(previousValue, currentValue)
     return previousValue + currentValue
};
let sum = 0
arr.forEach(function (item) {
    sum += item
    console.log(item)
})
console.log(sum)
console.log(arr.reduce(reducer));

// console.log(reducer(5, 10,))

const book = {
    name: 'mein kampf',
    pagecount: 1488,
    ganre: 'phantasy'
}
console.log(book.name)

const books = [
    {name: 'lalla',pagecount: 20, ganre: 'phentasy' },
    {name:  'another name', jopa: 25,},
    {}
]
books.forEach(function (book) { console.log(book) })
console.log(books[1])

