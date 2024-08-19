//---------------------INTERSECTION TYPES:
//An intersection type is a type that merges several kinds into one. 
//This allows you to combine many types to create a single type with all of the properties that you require.

interface Student {
    student_name : string
    roll_no : number
}

interface Teacher {
    teacher_name : string
    teacher_id : number
}

type intersection_type = Student & Teacher

const class1 : intersection_type = {
    student_name : "saad",
    roll_no : 12,
    teacher_name : "ali",
    teacher_id : 134
}
console.log(class1);
console.log(class1.student_name);
console.log(class1.roll_no);
console.log(class1.teacher_name);
console.log(class1.teacher_id);

