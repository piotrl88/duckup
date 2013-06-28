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


//
//
//function defineCanvas() {
//    createPlayer();
//    window.addEventListener('keydown', movePlayer, true);
//    //createEnemy(1);
//}
//function createPlayer() {
//    player.onload = function() {
//        gameContext.drawImage(player, 0, 0, 32, 32);
//    };
//    player.src = 'img/duck.png';
//}
//
//function movePlayer(evt) {
//    gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
//    switch (evt.keyCode) {
//        // Left arrow.
//        case 37:
//            playerX -= dx;
//            if (playerX < 0) {
//                playerX = 0;
//            }
//            gameContext.drawImage(player, playerX, playerY, 32, 32);
//            break;
//            // Right arrow.
//        case 39:
//            playerX += dx;
//            if (playerX > (gameCanvas.width - 64)) {
//                playerX = (gameCanvas.width - 64);
//            }
//            gameContext.drawImage(player, playerX, playerY, 32, 32);
//            break;
//        case 40:            // Up arrow 
//            playerY += dy;
//            if (playerY > (gameCanvas.height - 64)) {
//                playerY = (gameCanvas.height - 64);
//            }
//            gameContext.drawImage(player, playerX, playerY, 32, 32);
//            break;
//        case 38:// Down arrow
//            playerY -= dy;
//            if (playerY < 0) {
//                playerY = 0;
//            }
//            gameContext.drawImage(player, playerX, playerY, 32, 32);
//            break;
//    }
//}
//
//function createEnemy(number) {  //set enemies count    
//    enemy.onload = function() {
//        gameContext.drawImage(enemy, canvasX, canvasY, enemyWidth, enemyHeight);
//    };
//    enemy.src = 'img/fox.png';
//    setInterval(moveEnemy, 100); //change enemies speed accros levels
//}
//
//function moveEnemy() {
//    enemyY += dy;
//    if (enemyY > (gameCanvas.height - 64)) {
//        dy = -10;
//    }
//    if (enemyY < 0) {
//        dy = 10;
//    }
//    enemyX += dx;
//    if (enemyX > (gameCanvas.width - 64)) {
//        dx = -10;
//    }
//    if (enemyX < 0) {
//        dx = 10;
//    }
//
//    gameContext.drawImage(enemy, enemyX, enemyY, enemyWidth, enemyHeight);
//    gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
//}
