
var condition = true;
validate();//
// console.log(subCondition);//out of execution context
var subCondition = true;
function validate() {

    if (condition) {
        subCondition = false;
    }

}
console.log(subCondition);//out of execution context