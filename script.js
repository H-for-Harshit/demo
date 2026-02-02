// console.log("hello asds")
// const classroom = [
//     {
//       name: "Aarav Sharma",
//       age: 14,
//       gender: "Male",
//       grade: "8",
//       address: {
//         addressLine1: "123 MG Road",
//         addressLine2: "Near City Mall",
//         city: "Pune",
//         houseNo: "H-101"
//       }
//     },
//     {
//       name: "Priya Mehta",
//       age: 13,
//       gender: "Female",
//       grade: "7",
//       address: {
//         addressLine1: "56 Laxmi Nagar",
//         addressLine2: "Behind Central Park",
//         city: "Mumbai",
//         houseNo: "B-204"
//       }
//     },
//     {
//       name: "Rohan Patil",
//       age: 15,
//       gender: "Male",
//       grade: "9",
//       address: {
//         addressLine1: "78 Baner Road",
//         addressLine2: "Near IT Park",
//         city: "Pune",
//         houseNo: "C-305"
//       }
//     },
//     {
//       name: "Ananya Desai",
//       age: 12,
//       gender: "Female",
//       grade: "6",
//       address: {
//         addressLine1: "90 Koregaon Park",
//         addressLine2: "Near River View",
//         city: "Delhi",
//         houseNo: "D-401"
//       }
//     },
//   ];

//   for(let i=0;i<classroom.length;i++){
//     let obj=classroom[i]
//    console.log(obj.name)
//    console.log(obj.age)
//    console.log(obj.gender)
//    let obj2=obj.address
//    console.log(obj2.addressLine1)
//    console.log(obj2.addressLine2)
//    console.log(obj2.city)
//    console.log(obj2.houseNo)

//   }


//   ////////////////////
// const classroom = [
//     {
//       name: "Oliver",
//       age: 20,
//       gender: "Male",
//       grade: "A",
//       review:'good'
//     },
//     {
//       name: "Emma",
//       age: 21,
//       gender: "Female",
//       grade: "F",
//       review:'bad'
//     },
//     {
//       name: "Ethan",
//       age: 18,
//       gender: "Male",
//       grade: "F",
//       review:''

//     },
//     {
//       name: "Henry",
//       age: 17,
//       gender: "Male",
//       grade: "C",
//       review: ' '
//     },
//     {
//       name: "Olivia",
//       age: 18,
//       gender: "Female",
//       grade: "A",
//       review: null
//     },
//     {
//       name: "Sophia",
//       age: 27,
//       gender: "Female",
//       grade: "C",
//       review: 'asd'

//     },
//     {
//       name: "Amelia",
//       age: 18,
//       gender: "Female",
//       grade: "D",
//       review:'qweqwe'

//     },
//     {
//       name: "Charlotte",
//       age: 26,
//       gender: "Female",
//       grade: "A",
//       review:'qweqwe'

//     },
//   ];


// let result=[]
//   // for(let i=0;i<classroom.length;i++){
//   //       let obj=classroom[i]
//   //       if(obj.grade<="C"){
//   //         console.log(obj.name+"-"+"pass")
//   //       }else{
//   //         console.log(obj.name+"-"+"fail")
//   //       }
//   // }

//   for(let i=0;i<classroom.length;i++){
//         let obj=classroom[i]
//         if(obj.gender==="Female"){
//          if(obj.grade<="C"){
//           console.log(obj.name + " Pass")
//          }
//         }
//   }




const classroom = [
    {
      name: "Oliver",
      address:{
        state:'Maharashtra'
      },
      age: 20,
      gender: "Male",
      grade: "A",
      review:'good'
    },
    {
      name: "Emma",
      address:{
        state:'Gujarat'
      },
      age: 21,
      gender: "Female",
      grade: "F",
      review:'bad'
    },
    {
      name: "Ethan",
      address:{
        state:'Rajasthan'
      },
      age: 18,
      gender: "Male",
      grade: "F",
      review:''

    },
    {
      name: "Henry",
      address:{
        state:'Tamil Nadu'
      },
      age: 17,
      gender: "Male",
      grade: "C",
      review: ' '
    },
    {
      name: "Olivia",
      address:{
        state:'Kerala'
      },
      age: 18,
      gender: "Female",
      grade: "A",
      review: null
    },
    {
      name: "Sophia",
      address:{
        state:'Karnataka'
      },
      age: 27,
      gender: "Female",
      grade: "C",
      review: 'asd'

    },
    {
      name: "Amelia",
      address:{
        state:'West Bengal'
      },
      age: 18,
      gender: "Female",
      grade: "D",
      review:'qweqwe'

    },
    {
      name: "Charlotte",
      address:{
        state:'Uttar Pradesh'
      },
      age: 26,
      gender: "Female",
      grade: "A",
      review:'qweqwe'

    },
  ];

  for(let i=0;i<classroom.length;i++){
    let obj=classroom[i]
    if(obj.review !=='' && obj.review!==null){
      console.log(obj.name+" "+obj.review )
    }
  }