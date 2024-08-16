// let da = new Date();
// let day = da.getDate();
// let month = da.getMonth()+1;
// let year = da.getFullYear();

// if(day>31 && day<0){
//     console.log("Khong hop le");
    
// }
// else{
//     console.log("Hôm nay là:", day, month, year)
// }


// ngày hiện tại 
// let da = {
//     day: new Date().getDate(),
//     month: new Date().getMonth()+1,
//     year: new Date().getFullYear()
// }
// console.log("Hom nay la:", da.day,da.month,da.year)

// function w(){
 
// }

// diện tích tam giác

// let a,b,c
// let s ={
//     a : prompt("Nhap canh a:",a),
//     b : prompt("Nhap canh b:",b),
//     c : prompt("Nhap canh c:",c)
// }
// console.log("Canh a la:", s.a)
// console.log("Dien tich tam giac:", (s.a*s.b*s.c))

// mảng

// let mang =['MC','MU','Liver']
// console.log("Gia tri mang la", mang[0],mang[1],mang[2])

// so sánh dấu == và dấu ===

// let a = 5;
// let b = '5';

// console.log("So sanh:", a==b)
// console.log("So sanh:", a===b)

// for

let arr =['MC', 'MU', 'Chelsea','Liverpool']

// for(let i=0; i<3;i++){
//     console.log('Danh sach thi dau:', arr[i])
// }

let i = 0
// while (i<arr.length){
//     console.log("Thu tu xep hang:",i+1, arr[i])
//     i++
// }



// while(i<arr.length){
//     if(arr[i].length ===2){
//         console.log("Doi bong xep",i+1,arr[i])
        
//     }
//     if(arr[i].length>2){
//         console.log("Doi bong xep",i+1,arr[i])
//     }
//     i++
    
// }

// while(i<=arr.length){
    
//     if(arr[i] === 'Chelsea'){
//         console.log("Doi bong do la",arr[i])
//         console.log("Doi bong xep thu",i)
//         break;
//     }
//     console.log("check",i)
    
    
    
//     i++;
// }

// function sum(a,b){
//     return a+b;
// }

// let tru = (a,b) =>{
//     return a-b;
// }

// console.log("Sum la:", sum(5,4))
// console.log("Hieu la:", tru(9,8))

// let inf ={
//     name: 'Duc Anh',
//     age: '20',
//     address: 'Ha Noi',
//     getName: function (){
//         return this.name;
//     }
// }

// console.log("Thong tin sinh vien: ", inf.getName())
// console.log("Thong tin ca nhan la: ", inf.name, inf.age, inf.address)

// let sum  = (a,b,callback) =>{
//       let tong =a+b;
//       callback(tong)
// }

// let print = () =>{
//     console.log("Tong la:")
// }

// sum(6,9,print)

let ar =[1,2,3,4,5,6,7,8,9];

let filter = ar.filter((item, index) => {
    console.log("phan tu",item,'vi tri', index)
    return item && item>10;
})

console.log(filter)
