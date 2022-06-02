/* -------------
    FILTER
---------------- */

// ARRAY COM N QTDE DE ELEMENTOS 
// E QUE RETORNA UM ARRAY COM M QTDE DE ELEMENTOS
// M <= N

// ÍNDICES       °     ¹     ²     ³     ⁴     ⁵
// ARRAY      | 7.1 | 6.2 | 5.4 | 9.0 | 8.8 | 10.0 |    => Array de 6 posições

// CONDIÇÃO => ARRAY NOTAS => sE NOTA >= A 7, ALUNO PASSA (OU SEJA, GERA UM OUTRO ARRAY DE ALUNOS QUE PASSARAM)

/* ----------------------
    R E S U L T A D O: 
-------------------------*/

// ÍNDICES        °       ¹       ²       ³       ⁴       ⁵
// ARRAY      |  7.1  |  6.2  |  5.4  |  9.0  |  8.8  |  10.0  | 
//               true   false   false    true    true    true
//                 -                       -       -       -     => novo array com 4 posições

// ÍNDICES        °       ¹       ²       ³       
// ARRAY      |  7.1  |  9.0  |  8.8  |  10.0  |

/* ---------------
    MEU EXEMPLO
------------------ */

const grades = [ 7.1 , 6.2 , 5.4 , 9.0 , 8.8 , 10.0];
let reprove = [];
function approveExample (grade) {
    if (grade < 7) {
        reprove.push(grade);
    }
    return grade >= 7.0;
}

function config (gradeApprove) {
    return `<div> ${gradeApprove} </div>`;
}
let result = grades.filter(approveExample).map(config);
// console.log('resultado exemplo 1', result);
// console.log('reprovados exemplo 2 ', reprove);


/* ---------------
    MEU EXEMPLO 2
------------------ */

const noteListStudentsFirstSemester = [
    {
        name: 'Marina',
        scoreTest1: 5.6,
        scoreTest2: 10,
        scoreTest3: 7.75,
    },
    {
        name: 'Claudia',
        scoreTest1: 10,
        scoreTest2: 10,
        scoreTest3: 3.9,
    },
    {
        name: 'Berenice',
        scoreTest1: 2.6,
        scoreTest2: 9.8,
        scoreTest3: 1.9,
    },
    {
        name: 'Helena',
        scoreTest1: 4.4,
        scoreTest2: 5.5,
        scoreTest3: 6.6,
    },
    {
        name: 'Antônia',
        scoreTest1: 5.9,
        scoreTest2: 10,
        scoreTest3: 7.0,
    },
];

const studentsReprove = [];
let finalNote = 0;

function approve (grade) {
    finalNote = (grade.scoreTest1 + grade.scoreTest2 + grade.scoreTest3) / 3;
    return finalNote >= 7;
}

function nameStudentApproved (student) {
    return student.name;
}

let approveListGrades = noteListStudentsFirstSemester.filter(approve);
console.log('scores', approveListGrades);

let approveListNames = noteListStudentsFirstSemester.filter(approve).map(nameStudentApproved);
console.log('names', approveListNames);

// let reproveList = studentsReprove.map(nameStudentApproved);


/* ---------------
    CODER EXEMPLO
------------------ */

const listProducts = [
    {
        name: 'Bolsa',
        price: 23.90,
        discount: .10
    },
    {
        name: 'Sapato',
        price: 82.99,
        discount: .5
    },
    {
        name: 'Mochila',
        price: 123.85,
        discount: .15
    },
    {
        name: 'Sandalia',
        price: 42.87,
        discount:.8
    },
    {
        name: 'Blusa',
        price: 87.45,
        discount: .25
    },
];