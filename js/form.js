var subjectNameInput = document.querySelector(".subject");
var studentNameInput = document.querySelector(".studentname");
var studentGradeInput = document.querySelector(".studentgrade");
var passedStudentsList = document.querySelector(".passed-students");
var failedStudentsList = document.querySelector(".failed-students");
var addButton = document.querySelector(".add-button");
var errorDiv = document.querySelector(".error");



function addExam() {


    function getFormData() {
        var formData = {};
        formData.subjectName = subjectNameInput.value;
        formData.studentName = studentNameInput.value;
        formData.studentGrade = studentGradeInput.value;

        return formData;
    }

    function validateData() {
        if (student == "") {
            return error.innerHTML = "Please enter the name and the surname";
        }
    }

    var exam = new Exam()

    function updateList() {
        if (exam.hasPassed()) {

        } else {

        }

    }
};