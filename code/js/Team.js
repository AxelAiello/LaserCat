/**
 *  Class of Team
 */
class Team {

    constructor (id, name)
    {
        this.id = id;
        this.listPlayers =  [];
        this.name = name;

        for (let i = 0; i < 10; i++)
            this.addPlayer(i, "Pseudo" + "_" + this.name + "_" + i);
    }

    addPlayer (id, pseudo)
    {
        let player = new Player(id, "Aiello", "Axel", "Homme", pseudo, "mail@gmail.com", this.name);

        player.shotsGiven = [Math.floor((Math.random() * 5)),Math.floor((Math.random() * 5)),Math.floor((Math.random() * 5)),Math.floor((Math.random() * 5))];
        player.shotsTaken = [Math.floor((Math.random() * 5)),Math.floor((Math.random() * 5)),Math.floor((Math.random() * 5)),Math.floor((Math.random() * 5))];
        player.shots = Math.floor((Math.random() * 100));
        player.updateScore();

        this.listPlayers.push(player);
    }

    orderTeam ()
    {
        let players = [];
        players = this.listPlayers;
        players.sort(this.compareRang);
        return players;
    }

    orderTeamById ()
    {
        let players = [];
        players = this.listPlayers;
        players.sort(this.compareId);
        return players;
    }

    compareRang (playerA, playerB)
    {
        if (playerA.rang < playerB.rang)
            return -1;
        if (playerA.rang > playerB.rang)
            return 1;
        return 0;
    }

    compareId (playerA, playerB)
    {
        if (playerA.playerId < playerB.playerId)
            return -1;
        if (playerA.playerId > playerB.playerId)
            return 1;
        return 0;
    }

}