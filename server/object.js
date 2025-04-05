let person = {
    fname : "azhar",
    age : 25,
    address: "hyd"
}
// let address = person.address;
// let fname = person.fname ;
// let age = person.age ;
// let city = person.address

// let {fname,address,age}  = person

// console.log(fname,age,address);


let arr = ["azhar",25,"hyd"]

// console.log(arr[1]);
// // let age = arr[1]
// // let address = arr[2]

let [fname,address,age] = arr;
console.log(age,address)
