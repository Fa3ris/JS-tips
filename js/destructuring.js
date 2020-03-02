const gon = {
    lastname: 'Freecs',
    firstname: 'Gon',
    nen: {
        reinforcement: 0,
        transformation: 0,
        emission: 2,
        conjuration: 1,
        manipulation: 1,
        specialization: 5
    }
}

// Template literal
console.log(`${gon.firstname} ${gon.lastname} has the following abilities:`)

for (const ability of Object.keys(gon.nen)) {
    console.log(`${ability} of level %c${gon.nen[ability]}`, style);
}


// Destucturing
function eval3Abilities({ reinforcement, transformation, emission }) {
    if ((reinforcement + transformation + emission) >= 10)
        console.log("Good Nen abilities");
    else
        console.log("Try harder");
}

eval3Abilities(gon.nen);


function evalSkills(nenUser) {
    const {manipulation, conjuration, specialization} = nenUser.nen
    if ((manipulation + conjuration + specialization * 3) >= 10)
        console.log("Good Skills");
    else
        console.log("Try again");
}
evalSkills(gon);

// Advanced Template Literal
function samurai(str, speed){
    return `${str[0]}${speed}${str[1]}`;
} 
const speed = 3;
console.log( samurai`Sekiro has a speed of ${speed} and is so difficult to play but very rewarding`);