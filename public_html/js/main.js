var DuckUp = {
    model : {
        objSize : 32,
        gameCanvas : document.getElementById('canvas'),
        gameContext: '',
        canvasX: '',
        canvasY: ''
    },
    init: function() {
        //window.addEventListener('keydown', move, true);
        //this.enemy();
        this.model.gameContext = this.model.gameCanvas.getContext('2d');
        this.model.canvasX = (this.model.gameCanvas.width / 2) - this.model.objSize;
        this.model.canvasY = (this.model.gameCanvas.height / 2) - this.model.objSize;
    },
    enemy: function() {
        var enemyImg = new Image();
        enemyImg.onload = function() {
            var model = that.model;
            model.gameContext.drawImage(
                enemyImg,
                model.canvasX,
                model.canvasY,
                model.objSize,
                model.objSize
            );
        };
        enemyImg.src = 'img/fox.png';
    },
    player: function() {
        var playerImg = new Image();
        playerImg.onload = function() {
            this.model.gameContext.drawImage(playerImg, 0, 0, this.model.objSize, this.model.objSize);
        };
        playerImg.src = 'img/duck.png';

    }
};
