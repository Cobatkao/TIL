var student = require('./student')
var teacher = require('./teacher')

module.exports.add = (teacherName, students) => {
  teacher.add(teacherName);

  students.forEach((item) => {
    student.add(item)
  });
}
