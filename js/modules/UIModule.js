var UIModule = (function() {

    var UISelectors = {
        subjectNameInput : ".subject",
        studentNameInput : ".studentname",
        studentGradeInput : ".studentgrade",
        addButton : ".add-button",
        passedStudentsList : ".passed-students",
        failedStudentsList : ".failed-students",
        errorDiv : ".error",
        totalCount : "#totalCount",
        passedNumber : ".passed-number",
        passedPercent : ".passed-percent",
        failedNumber : ".failed-number",
        failedPercent : ".failed-percent"
    }

    var subjectNameInput = document.querySelector(UISelectors.subjectNameInput);
    var studentNameInput = document.querySelector(UISelectors.studentNameInput);
    var studentGradeInput = document.querySelector(UISelectors.studentGradeInput);
    var passedNumber = document.querySelector(UISelectors.passedNumber);
    var passedPercent = document.querySelector(UISelectors.passedPercent);
    var failedNumber = document.querySelector(UISelectors.failedNumber);
    var failedPercent = document.querySelector(UISelectors.failedPercent);
    
    var status = {
        OK : "OK",
        MISSING_SUBJECT : "Please choose the subject!",
        MISSING_STUDENT : "Please enter student name!",
        INVALID_NAME_FORMAT : "Name and surname must start with a capital letter!",
        MISSING_GRADE : "Please enter student grade!",
        INVALID_GRADE_RANGE : "Please enter a grade between 5 and 10!"
    }
    
    function getFormData() {
        var formData = {};
        formData.subjectName = subjectNameInput.value;
        formData.studentName = studentNameInput.value;
        formData.studentGrade = studentGradeInput.value;

        return formData;
    }

    function validateData(formData) {
        var student = formData.studentName.split(' ');
        if (formData.subjectName == '-') {
            return status.MISSING_SUBJECT;
        }
        if (!formData.studentName) {
            return status.MISSING_STUDENT;
        }
        if (student[0][0] != student[0][0].toUpperCase() || student[1][0] != student[1][0].toUpperCase()) {
            return status.INVALID_NAME_FORMAT;
        }
        if (!formData.studentGrade) {
            return status.MISSING_GRADE;
        }
        if (formData.studentGrade < 5 || formData.studentGrade > 10) {
            return status.INVALID_GRADE_RANGE;
        }
        return status.OK;
    }

    function setError(message) {
        document.querySelector(UISelectors.errorDiv).textContent = message;
    }
    
    function clearError() {
        document.querySelector(UISelectors.errorDiv).textContent = "";  
    }

    function updateLists(list, student, subject, grade) {
        var item = document.createTextNode(student+ ', '+ subject+ ', ' + grade);
        var li = document.createElement('li');
        li.appendChild(item);
        console.log(li);
        document.querySelector(list).appendChild(li);
    }

    function updateStudentCounter(totalCount) {
        document.querySelector(UISelectors.totalCount).textContent = totalCount;
    }

    function updateStats(totalExams, increase) {
        var number = document.querySelector(increase);
        number.textContent = parseInt(number.textContent) + 1;
        passedPercent.textContent = parseInt(parseInt(passedNumber.textContent) / totalExams * 100) + '%';
        failedPercent.textContent = parseInt(parseInt(failedNumber.textContent) / totalExams * 100) + '%';
    }

    function reset() {
        subjectNameInput.value = '-';
        studentNameInput.value = '';
        studentGradeInput.value = '';
    }

    return {
        UISelectors : UISelectors,
        status : status,
        getFormData : getFormData,
        validateData : validateData,
        setError : setError,
        clearError : clearError,
        updateLists : updateLists,
        updateStudentCounter : updateStudentCounter,
        updateStats : updateStats,
        reset : reset
    }

})();