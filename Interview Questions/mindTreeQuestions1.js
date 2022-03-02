//implement same function using reduce
// total: function () {
//     let total = this.marks.reduce((accm, mark) => {
//         let tempNumber = mark.subject;
//         if (tempNumber != null && isNaN(tempNumber) === false) {
//             return accm + Number(tempNumber);
//         }
//         return accm;
//     }, 0);
//     return total;
// }
//Implement a function inside total to calculate total or average.
const student = {
    marks: [{
    subject: "50"
    },{
    subject: "50"
    },{
    subject: null
    },{
    subject: "50"
    },{
    subject: "50"
    }],
    total: function(){
        //here marks is an array which makes it an iterable
      let total = this.marks.reduce((acc, mark)=>{
         let tempNumber = mark.subject;
         if(tempNumber!==null && isNaN(tempNumber)===false){
              return acc+Number(tempNumber);             
         }
         return acc;
      }, 0);
      return total;
    },
    average: function(){
        let noOfStudents = this.marks.length;
        return parseFloat(this.total()/noOfStudents);
    },
    }

//Implement a function inside total to calculate total or average.
console.log(student.total());
console.log(student.average());