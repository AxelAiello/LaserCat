/**
 *  Class of Game
 */
class Game {
    constructor (gameId, teamA, teamB, secon, minu)
    {
        this.gameId = gameId || 0;

        this.teamA = teamA || new Team(0, "Rouge");
        this.teamB = teamB || new Team(1, "Bleu");

        this.time = 600;
        this.updateRang();

        this.secon = secon ; //initialise les secondes
        this.minu = minu; //initialise les minutes
        this.play = true;
        this.chrono();
    }

    updateRang ()
    {
        let players = [];
        for(let i = 0; i < this.teamA.listPlayers.length; i++) {
            players.push(this.teamA.listPlayers[i]);
        }
        for(let i = 0; i < this.teamB.listPlayers.length; i++) {
            players.push(this.teamB.listPlayers[i]);
        }
        players.sort(this.compareScore);

        for (let i = 0; i < players.length; i++)
        {
            if(players[i].teamName == this.teamA.name)
            {
                this.teamA.listPlayers[players[i].playerId].rang = i + 1;
            } else
            {
                this.teamB.listPlayers[players[i].playerId].rang = i + 1;
            }
        }
    }

    orderPlayer ()
    {
        let players = [];
        for(let i = 0; i < this.teamA.listPlayers.length; i++) {
            players.push(this.teamA.listPlayers[i]);
        }
        for(let i = 0; i < this.teamB.listPlayers.length; i++) {
            players.push(this.teamB.listPlayers[i]);
        }
        players = players.sort(this.compareRang);
        return players;
    }

    compareScore (playerA, playerB)
    {
        if (playerA.score > playerB.score)
            return -1;
        if (playerA.score < playerB.score)
            return 1;
        return 0;
    }

    compareRang (playerA, playerB)
    {
        if (playerA.rang < playerB.rang)
            return -1;
        if (playerA.rang > playerB.rang)
            return 1;
        return 0;
    }

    chrono() {
        if (this.minu <= 0 && this.secon <= 0) {
            return;
        }
        else if (this.secon <= 0) {
            this.secon = 59;
            this.minu--;
        }
        this.secon--;

        var oThis = this;
        var method = function() {oThis.chrono();};
        setTimeout(method, 1000);
    }

    playChrono(elmt) {
        if (this.play) {
            let temps = "";
            if (this.minu < 10)
                temps = temps + "0" + this.minu;
            else
                temps = temps + this.minu;
            temps = temps + ":";
            if (this.secon < 10)
                temps = temps + "0" + this.secon;
            else
                temps = temps + this.secon;

            elmt.textContent = temps;

            var oThis = this;
            var method = function() {oThis.playChrono(chr);};
            setTimeout(method, 1000);
            return;
        } else {
            return;
        }
    }

}