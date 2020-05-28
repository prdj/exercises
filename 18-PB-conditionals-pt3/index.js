'use strict';

let alezaTeam = (11 + 120 + 120) / 3;
let lisTeam = (10 + 120 + 120) / 3;
let maryTeam = (10 + 120 + 120) / 3;

let winner = null;
let score = null;

if (alezaTeam > lisTeam && alezaTeam > maryTeam) {
    winner = 'Aleeza\'s';
    score = alezaTeam;
    console.log(`${winner} team scored average of ${score} points and is the winner.Congratulations to all the team members!`);

} else if (lisTeam > alezaTeam && lisTeam > maryTeam) {
    winner = 'Lis\'s';
    score = lisTeam;
    console.log(`${winner} team scored average of ${score} points and is the winner.Congratulations to all the team members!`);
} else if (maryTeam > lisTeam && maryTeam > alezaTeam) {
    winner = 'Mary\'s';
    score = maryTeam;
    console.log(`${winner} team scored average of ${score} points and is the winner.Congratulations to all the team members!`);
} else {
    console.log('We have a Draw in this game.');
}