const {knex} = require('./connection')

async function getStudents() {
    const result = await knex.select().from('student');
    return result
}

(async () => {
    const students = await getStudents();
    console.log(students);
})();