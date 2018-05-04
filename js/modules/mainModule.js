var mainModule = (function(UIModule, dataModule) {

    var studentList = [];
    var examList = [];

    var addButton = document.querySelector(UIModule.UISelectors.addButton);

    addButton.addEventListener("click", addExam);

    function addExam() {
       
        var formData = UIModule.getFormData();

        var errorMessage = UIModule.validateData(formData);

        if (errorMessage != "OK") {
            UIModule.setError(errorMessage);
            return;
        } else {
            UIModule.clearError();
        }

        var studentData = formData.studentName.split(' ');

        
        
        var student;
        
        for (var i = 0; i < studentList.length; i++) {
            if (studentList[i].getStudentData() == formData.studentName) {
                student = studentList[i];
                break;
            }
        }

        if (!student) {
            student = dataModule.createStudent(studentData[0], studentData[1]);
            studentList.push(student);
        }
        
        var exam = dataModule.createExam(formData.subjectName, student, formData.studentGrade);
        examList.push(exam);

        var increase;

        if (exam.hasPassed()) {
            UIModule.updateLists(UIModule.UISelectors.passedStudentsList, exam.student.getStudentData(), exam.subject, exam.grade);
            increase = UIModule.UISelectors.passedNumber;
        } else {
            UIModule.updateLists(UIModule.UISelectors.failedStudentsList, exam.student.getStudentData(), exam.subject, exam.grade);
            increase = UIModule.UISelectors.failedNumber;
        }
        
        UIModule.updateStats(examList.length, increase);
        
        UIModule.updateStudentCounter(studentList.length);

        UIModule.reset();

    }

})(UIModule, dataModule);