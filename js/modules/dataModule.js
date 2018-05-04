var dataModule = (function(){
   
    function Subject(name){
        this.name = name;
    }
    
    Subject.prototype.getSubjectName = function(){
        return this.name;
    }

    function Student(name, surname){
        this.name = name;
        this.surname = surname;
    }
    
    Student.prototype.getStudentData = function(){
        return this.name + " " + this.surname;
    }

    function Exam(subject, student, grade){
        this.subject = subject;
        this.student = student;
        this.grade = parseInt(grade);
    }
    
    Exam.prototype.getExamInfo = function(){
        return this.subject + " " + this.student;
    }
    
    Exam.prototype.hasPassed = function(){
        if(this.grade > 5){
            return true;
        }
        return false;
    }

    function createSubject(name) {
        return new Subject(name);
    }

    function createStudent(name, surname) {
        return new Student(name, surname);
    }

    function createExam(subject, student, grade) {
        return new Exam(subject, student, grade);
    }
    
    return {
        createSubject : createSubject,
        createStudent : createStudent,
        createExam : createExam
    }
})();