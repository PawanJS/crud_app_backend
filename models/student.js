let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: {
      type: 'String',
    },
    email: {
      type: 'String',
    },
    rollNo: {
      type: 'Number',
    },
  },
  { collection: 'students' }
);

module.exports = mongoose.model('student', studentSchema);
