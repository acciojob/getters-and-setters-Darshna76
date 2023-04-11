//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get getName(){
		return this.name;
	
	}
	set steAge(){
		return this.age;
	}
}

class Student extends Person {
	super();
	study(){
		console.log(this.name, " is studying");
	}
}

class Teacher extends Person {
	super(){
		console.lof(this.name, " is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
