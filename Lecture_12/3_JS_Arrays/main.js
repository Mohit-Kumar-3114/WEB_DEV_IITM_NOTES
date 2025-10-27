// ARRAYS IN JS
// Array is a collection of elements

let a = [1,2,"jatin",true]
console.log(a) // [ 1, 2, 'jatin', true ]
console.log(a[1]) // 2
console.log(a[2].at(3)) // i
console.log(a.length) // 4

a.push("mangoes") // insert at end of array
console.log(a) // [ 1, 2, 'jatin', true, 'mangoes' ]

a.pop() // remove from end of array
console.log(a) // [ 1, 2, 'jatin', true ]

a.unshift("grapes") // insert at start of array
console.log(a) // [ 'grapes', 1, 2, 'jatin', true ]

a.shift() // remove from start of array
console.log(a) // [ 1, 2, 'jatin', true ]




let b = [1,2,3]
let c = [0,1]

// concat is a method that returns a new array by concatenating the two arrays
console.log(c.concat(b)) // [ 0, 1, 1, 2, 3 ]
console.log(b) // no change
console.log(c) // no change

// for of loop
for(let items of c){
    console.log(items)
}

// forEach loop
c.forEach((items)=> console.log(items))

c[0] = "hello" // change the value of the array
console.log(c) // [ 'hello', 1 ]




let d = [1,2,3,4]
console.log(d.length) // 4
delete d[2] // delete the element at index 2 but the length of the array will not change
console.log(d) // [ 1, 2, <1 empty item>, 4 ]
console.log(d.length) // 4
console.log(d.includes(2)) // true
console.log(d.indexOf(2)) // 1




let e = [1,2,3,4,5,6,7]
console.log(e.slice(2,6)) // [ 3, 4, 5, 6 ]
console.log(e) // no change in array




let f = [1,2,3,4,5,6,7,8,9]
console.log(f.splice(2,5)) // [ 3, 4, 5, 6, 7 ]
console.log(f) // [1,2,8,9]




let g = [1,2,3,4]
let h = [1,2,3,4]

// arrays are compared by their reference
console.log(g == h) // false as their refrences are not same




let i = [1,2,3,4,5,6,7,8,9]
// reverse is a method that reverses the array
i.reverse()
console.log(i) // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]




let j = [2,1,5,6,3,4]
j.sort((a,b)=> a-b) // sort the array in ascending order
console.log(j) // [ 1, 2, 3, 4, 5, 6 ]  

j.sort((a,b)=> b-a) // sort the array in descending order
console.log(j) // [ 6, 5, 4, 3, 2, 1 ]




let k = [1,2,3,4,5,6,7,]
console.log(k.push(10)) // 10 gives the new length of the array
console.log(k.pop()) // 10 gives the removed element
console.log(k.unshift(0)) // 0 gives the new length of the array
console.log(k.shift()) // 0 gives the removed element





let l = [1,2,3,4,5,6,7,8,9]
let firstEven = l.find((item)=> item%2 === 0) // find the first even number in the array
console.log(firstEven) // 2
console.log(l) // no change in array




let m = [1,2,3,4,5,6,7,8,9]
let allEven = m.filter((item)=> item%2 === 0) // filter the array to only include even numbers
console.log(allEven) // [ 2, 4, 6, 8 ]
console.log(m) // no change in array




let o = [1,2,3,4,5,6,7,8,9]
let newArray = o.map((item)=> item*2) // map the array to double the value of each element
console.log(newArray) // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(o) // no change in array
