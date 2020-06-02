'use strict';

let alezaTeam = (11 + 120 + 120) / 3;
let lisTeam = (10 + 120 + 120) / 3;
let maryTeam = (10 + 120 + 120) / 3;

let winner = null;
let score = null;
let sentence = null;
if (alezaTeam > lisTeam && alezaTeam > maryTeam) {
    winner = 'Aleeza\'s';
    score = alezaTeam;
    sentence = (`${winner} team scored average of ${score} points and is the winner.Congratulations to all the team members!`);

} else if (lisTeam > alezaTeam && lisTeam > maryTeam) {
    winner = 'Lis\'s';
    score = lisTeam;
    sentence = (`${winner} team scored average of ${score} points and is the winner.Congratulations to all the team members!`);
} else if (maryTeam > lisTeam && maryTeam > alezaTeam) {
    winner = 'Mary\'s';
    score = maryTeam;
    sentence = (`${winner} team scored average of ${score} points and is the winner.Congratulations to all the team members!`);
} else {
   sentence = ('We have a Draw in this game.');
}

console.log(sentence);