// Q3. Map Fundamentals 
// Create a Map to store student grades where the key is the student name and the value is an array of scores.

const grade = new Map();

function addGrade(name , score){
    if(!grade.has(name)){
        grade.set(name , []);
    }
    grade.get(name).push(score);
}

function getAverage(name){
    if(!grade.has(name)) return "Not found";
    const score = grade.get(name);
    const sum = score.reduce((acc , val) => acc + val, 0);
    return sum/score.length;

}

function getTopper() {
    let topStudent = null;
    let highestAvg = -Infinity;

    grade.forEach((score, name) => {
        const avg = score.reduce((a, b) => a + b, 0) / score.length;

        if (avg > highestAvg) {
            highestAvg = avg;
            topStudent = name;
        }
    });

    return topStudent;
}

addGrade("Srishti", 90);
addGrade("Harsh", 80);
addGrade("Riya", 95);
addGrade("Shreya", 85);

console.log(getAverage("Srishti")); 
console.log(getTopper()); 
