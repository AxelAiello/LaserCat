/**
 *  Class of Player
 */
class Player {

    constructor (playerId, lastName, name, type, pseudo, mail, teamName)
    {
        this.playerId = playerId;
        this.lastName = lastName || "Aiello";
        this.name = name || "Axel";
        this.type = type || "Homme";
        this.pseudo = pseudo || "Xstone";
        this.mail = mail || "mail@gmail.com";
        this.teamName = teamName || "";

        this.score = 0;
        this.rang = 0;
        this.ratio = 0;
        this.precision = 0;
        this.shots = 0;

        this.shotsGiven = [0,0,0,0];
        this.shotsTaken = [0,0,0,0];
        this.coeff = [1,1,2,3];
    }

    // Player type
    static get Player_TYPE ()
    {
        return ["Homme", "Femme"]
    }

    takeShot (id, nbrShots)
    {
        this.shotsTaken[id] += nbrShots;
        this.updateScore (this.coeff[id] * nbrShots * (-1));
    }

    giveShot (id, nbrShots)
    {
        this.shotsGiven[id] += nbrShots;
        this.updateScore (this.coeff[id] * nbrShots);
    }

    updateRatio () {
        this.ratio =  Math.floor(((this.shotsGiven[0] + this.shotsGiven[1] + this.shotsGiven[2] + this.shotsGiven[3])
            / (this.shotsTaken[0] + this.shotsTaken[1] + this.shotsTaken[2] + this.shotsTaken[3])) * 100) / 100;
    }

    updatePrecision () {
        this.precision = Math.floor(((this.shotsGiven[0] + this.shotsGiven[1] + this.shotsGiven[2] + this.shotsGiven[3])
            / (this.shots + (this.shotsGiven[0] + this.shotsGiven[1] + this.shotsGiven[2] + this.shotsGiven[3]))) * 100)
    }

    updateScore (nbr)
    {
        this.score += nbr;
        this.updateRatio ();
        this.updatePrecision ();
    }

    updateScore ()
    {
        this.score = (this.shotsGiven[0] * this.coeff [0]) + (this.shotsGiven[1] * this.coeff [1]) + (this.shotsGiven[2] * this.coeff [2]) + (this.shotsGiven[3] * this.coeff [3])
            - (this.shotsTaken[0] * this.coeff [0]) - (this.shotsTaken[1] * this.coeff [1]) - (this.shotsTaken[2] * this.coeff [2]) - (this.shotsTaken[3] * this.coeff [3]);
        this.updateRatio ();
        this.updatePrecision ();
    }

    getRate (idRate, isShotsTaken)
    {
        if (isShotsTaken == true)
            return Math.floor(100 * this.shotsTaken[idRate] / (this.shotsTaken[idRate] + this.shotsGiven[idRate]));
        else
            return Math.floor(100 * this.shotsGiven[idRate] / (this.shotsTaken[idRate] + this.shotsGiven[idRate]));
    }

    getInformationForTeam()
    {
        let infos = [];
        infos.push(this.rang);
        infos.push(this.pseudo);
        if(this.precision < 10)
            infos.push("0" + this.precision + "%");
        else
            infos.push(this.precision + "%");
        infos.push(this.ratio);
        infos.push(this.score);
        return infos;
    }

    getInformationForAll()
    {
        let infos = [];
        infos.push(this.rang);
        infos.push(this.pseudo);
        infos.push(this.teamName);
        if(this.precision < 10)
            infos.push("0" + this.precision + "%");
        else
            infos.push(this.precision + "%");
        infos.push(this.shots + this.shotsGiven[0] + this.shotsGiven[1] + this.shotsGiven[2] + this.shotsGiven[3]);
        infos.push(this.shotsGiven[0] + this.shotsGiven[1] + this.shotsGiven[2] + this.shotsGiven[3]);
        infos.push(this.shotsTaken[0] + this.shotsTaken[1] + this.shotsTaken[2] + this.shotsTaken[3]);
        infos.push(this.ratio);
        infos.push(this.score);
        return infos;
    }

    getInformationForDetails()
    {
        let infos = [];
        infos.push(Math.floor((Math.random() * 3)));
        infos.push(Math.floor((Math.random() * 3)));
        infos.push(Math.floor((Math.random() * 3)));
        infos.push(Math.floor((Math.random() * 3)));
        infos.push(infos[0] + infos[1] + infos[2] + infos[3]);
        return infos;
    }

    getInformationForScoresTaken()
    {
        let infos = [];
        infos.push("Reçus");
        infos.push(this.shotsTaken[0]);
        infos.push(-1*this.coeff[0]);
        infos.push(this.shotsTaken[1]);
        infos.push(-1*this.coeff[1]);
        infos.push(this.shotsTaken[2]);
        infos.push(-1*this.coeff[2]);
        infos.push(this.shotsTaken[3]);
        infos.push(-1*this.coeff[3]);
        infos.push(- (this.shotsTaken[0] * this.coeff [0]) - (this.shotsTaken[1] * this.coeff [1]) - (this.shotsTaken[2] * this.coeff [2]) - (this.shotsTaken[3] * this.coeff [3]));
        return infos;
    }

    getInformationForScoresGiven()
    {
        let infos = [];
        infos.push("Donnés");
        infos.push(this.shotsGiven[0]);
        infos.push(this.coeff[0]);
        infos.push(this.shotsGiven[1]);
        infos.push(this.coeff[1]);
        infos.push(this.shotsGiven[2]);
        infos.push(this.coeff[2]);
        infos.push(this.shotsGiven[3]);
        infos.push(this.coeff[3]);
        infos.push((this.shotsGiven[0] * this.coeff [0]) + (this.shotsGiven[1] * this.coeff [1]) + (this.shotsGiven[2] * this.coeff [2]) + (this.shotsGiven[3] * this.coeff [3]));
        return infos;
    }
}