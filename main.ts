namespace SpriteKind {
    export const HEALTH = SpriteKind.create()
    export const STRONG_KNIFE = SpriteKind.create()
    export const FAST_BOI = SpriteKind.create()
    export const SUPER_HEART = SpriteKind.create()
    export const bounce = SpriteKind.create()
    export const turrent = SpriteKind.create()
    export const dog = SpriteKind.create()
    export const P2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite.destroy()
    mySprite = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 9 9 2 2 9 9 2 2 2 
        2 2 2 9 9 2 2 9 9 2 2 2 
        2 2 2 9 9 2 2 9 9 2 2 2 
        2 2 2 9 9 2 2 9 9 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 6 6 6 6 6 6 6 6 2 2 
        2 2 6 6 6 6 6 6 6 6 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
})
sprites.onOverlap(SpriteKind.FAST_BOI, SpriteKind.P2, function (sprite, otherSprite) {
    sprite.destroy()
    info.player2.changeLifeBy(-2)
    console.log("hit")
})
controller.combos.attachCombo("BBBB", function () {
    game.splash("Locked side ways movement")
    controller.moveSprite(mySprite, 0, 200)
})
sprites.onOverlap(SpriteKind.STRONG_KNIFE, SpriteKind.P2, function (sprite, otherSprite) {
    sprite.destroy()
    info.player2.changeLifeBy(-5)
    console.log("strong_hit")
})
sprites.onOverlap(SpriteKind.HEALTH, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    console.log("hit")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.destroy()
    mySprite = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 9 9 2 2 9 9 2 2 2 
        2 2 2 9 9 2 2 9 9 2 2 2 
        2 2 2 9 9 2 2 9 9 2 2 2 
        2 2 2 9 9 2 2 9 9 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 6 6 6 6 6 6 6 6 2 2 
        2 2 6 6 6 6 6 6 6 6 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
})
sprites.onOverlap(SpriteKind.SUPER_HEART, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    console.log("hit")
})
controller.combos.attachCombo("ABAB", function () {
    info.changeLifeBy(100)
})
sprites.onOverlap(SpriteKind.SUPER_HEART, SpriteKind.P2, function (sprite, otherSprite) {
    sprite.destroy()
    info.player2.changeLifeBy(5)
    console.log("heal")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`revive`)) {
        play2 = sprites.create(img`
            7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 9 9 7 7 9 9 7 7 7 
            7 7 7 9 9 7 7 9 9 7 7 7 
            7 7 7 9 9 7 7 9 9 7 7 7 
            7 7 7 9 9 7 7 9 9 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 6 6 6 6 6 6 6 6 7 7 
            7 7 6 6 6 6 6 6 6 6 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.P2)
        play2.setStayInScreen(true)
        controller.player2.moveSprite(play2)
        info.player2.setLife(10)
        tiles.setTileAt(tiles.getTileLocation(mySprite.x / 16, mySprite.y / 16), assets.tile`transparency16`)
        p2ded = 0
        tiles.placeOnRandomTile(play2, assets.tile`myTile2`)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`revive`)) {
        mySprite = sprites.create(img`
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 9 9 2 2 9 9 2 2 2 
            2 2 2 9 9 2 2 9 9 2 2 2 
            2 2 2 9 9 2 2 9 9 2 2 2 
            2 2 2 9 9 2 2 9 9 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 6 6 6 6 6 6 6 6 2 2 
            2 2 6 6 6 6 6 6 6 6 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        scene.cameraFollowSprite(mySprite)
        controller.moveSprite(mySprite, 100, 100)
        info.setLife(10)
        tiles.setTileAt(tiles.getTileLocation(play2.x / 16, play2.y / 16), assets.tile`transparency16`)
        P1ded = 0
    }
})
sprites.onOverlap(SpriteKind.FAST_BOI, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-2)
    console.log("hit")
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    tiles.setTileAt(tiles.getTileLocation(sprite.x, sprite.y), assets.tile`myTile`)
    pause(5000)
    tiles.setTileAt(tiles.getTileLocation(sprite.x, sprite.y), assets.tile`myTile2`)
    console.log("adv")
    if (Math.percentChance(10)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . 2 2 . . . 2 2 . . 
            . 2 3 2 2 . 2 2 2 2 . 
            . 2 3 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 . 
            . . 2 2 2 2 2 b 2 . . 
            . . . 2 2 2 b 2 . . . 
            . . . . 2 2 2 . . . . 
            . . . . . 2 . . . . . 
            . . . . . . . . . . . 
            `, SpriteKind.HEALTH)
        mySprite3.setPosition(sprite.x, sprite.y)
    } else {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . c . . . . . . . 
            . . c c c c c 2 2 . 
            . . c d d d 2 2 . . 
            . . c c c c 2 2 . . 
            . . c . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, SpriteKind.STRONG_KNIFE)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
        mySprite2.setVelocity(50, 0)
        mySprite2.follow(mySprite, 25)
        pause(2000)
        sprites.destroy(mySprite2, effects.confetti, 200)
    }
})
sprites.onDestroyed(SpriteKind.STRONG_KNIFE, function (sprite) {
    if (se == 1 && Math.percentChance(20)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . c . . . . . . . 
            . . c c c c c 2 2 . 
            . . c d d d 2 2 . . 
            . . c c c c 2 2 . . 
            . . c . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, SpriteKind.STRONG_KNIFE)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
        mySprite2.setVelocity(50, 0)
    }
})
sprites.onOverlap(SpriteKind.HEALTH, SpriteKind.FAST_BOI, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.HEALTH, SpriteKind.P2, function (sprite, otherSprite) {
    sprite.destroy()
    info.player2.changeLifeBy(1)
    console.log("heal")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    mySprite.destroy()
    mySprite = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 9 9 2 2 9 9 2 2 2 
        2 2 2 9 9 2 2 9 9 2 2 2 
        2 2 2 9 9 2 2 9 9 2 2 2 
        2 2 2 9 9 2 2 9 9 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 6 6 6 6 6 6 6 6 2 2 
        2 2 6 6 6 6 6 6 6 6 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
})
sprites.onOverlap(SpriteKind.SUPER_HEART, SpriteKind.FAST_BOI, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    console.log("hit")
})
controller.combos.attachCombo("AA+B", function () {
    game.splash("Hard Mode:On")
    se = 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.P2, function (sprite, otherSprite) {
    sprite.destroy()
    tiles.setTileAt(tiles.getTileLocation(sprite.x, sprite.y), assets.tile`myTile`)
    pause(5000)
    tiles.setTileAt(tiles.getTileLocation(sprite.x, sprite.y), assets.tile`myTile2`)
    console.log("adv")
    if (Math.percentChance(10)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . 2 2 . . . 2 2 . . 
            . 2 3 2 2 . 2 2 2 2 . 
            . 2 3 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 . 
            . . 2 2 2 2 2 b 2 . . 
            . . . 2 2 2 b 2 . . . 
            . . . . 2 2 2 . . . . 
            . . . . . 2 . . . . . 
            . . . . . . . . . . . 
            `, SpriteKind.HEALTH)
        mySprite3.setPosition(sprite.x, sprite.y)
    } else {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . c . . . . . . . 
            . . c c c c c 2 2 . 
            . . c d d d 2 2 . . 
            . . c c c c 2 2 . . 
            . . c . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, SpriteKind.STRONG_KNIFE)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
        mySprite2.setVelocity(50, 0)
        mySprite2.follow(otherSprite, 25)
        pause(2000)
        sprites.destroy(mySprite2, effects.confetti, 200)
    }
})
sprites.onOverlap(SpriteKind.STRONG_KNIFE, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-5)
    console.log("strong_hit")
})
sprites.onOverlap(SpriteKind.HEALTH, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(1)
    console.log("heal")
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
    console.log("hit")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`blakc`, function (sprite, location) {
    info.setScore(0)
})
sprites.onOverlap(SpriteKind.dog, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.y += -15
    sprite.follow(otherSprite)
})
sprites.onOverlap(SpriteKind.SUPER_HEART, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(5)
    console.log("heal")
})
info.onLifeZero(function () {
    if (gate == 0) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        if (info.score() >= 100) {
            game.splash("wow your good")
            game.over(false)
        } else if (info.score() >= 200) {
            game.splash("wow impressive")
            game.over(false)
        }
    } else {
        tiles.setTileAt(tiles.getTileLocation(mySprite.x / 16, mySprite.y / 16), assets.tile`revive`)
        pause(100)
        sprites.destroy(mySprite)
        P1ded = 1
        if (P1ded == 1 && p2ded == 1) {
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
            if (info.score() >= 100) {
                game.splash("wow your good")
                game.over(false)
            } else if (info.score() >= 200) {
                game.splash("wow impressive")
                game.over(false)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.HEALTH, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.bounce, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-0.5)
    console.log("hit")
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.turrent, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.STRONG_KNIFE, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
info.player2.onLifeZero(function () {
    tiles.setTileAt(tiles.getTileLocation(play2.x / 16, play2.y / 16), assets.tile`revive`)
    pause(100)
    sprites.destroy(play2)
    p2ded = 1
    if (P1ded == 1 && p2ded == 1) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        if (info.score() >= 100) {
            game.splash("wow your good")
            game.over(false)
        } else if (info.score() >= 200) {
            game.splash("wow impressive")
            game.over(false)
        }
    }
})
controller.combos.attachCombo("AAUDB", function () {
    scene.centerCameraAt(127.9, 97)
    game.showLongText("Camera Locked", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.P2, function (sprite, otherSprite) {
    sprite.destroy()
    info.player2.changeLifeBy(-1)
    console.log("hit")
})
scene.onOverlapTile(SpriteKind.bounce, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.bounce, SpriteKind.P2, function (sprite, otherSprite) {
    sprite.destroy()
    info.player2.changeLifeBy(-0.5)
    console.log("hit")
})
sprites.onOverlap(SpriteKind.SUPER_HEART, SpriteKind.STRONG_KNIFE, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    console.log("del")
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
controller.combos.attachCombo("ABA+U", function () {
    info.setScore(200)
})
sprites.onOverlap(SpriteKind.HEALTH, SpriteKind.STRONG_KNIFE, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    console.log("del")
})
scene.onOverlapTile(SpriteKind.SUPER_HEART, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
controller.combos.attachCombo("ABABAABAABAAA+U", function () {
    game.splash("why?")
    controller.moveSprite(mySprite, 0, 0)
})
scene.onOverlapTile(SpriteKind.FAST_BOI, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
controller.combos.attachCombo("ABA+D", function () {
    game.splash("Um why is you here")
    play2 = sprites.create(img`
        7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 9 9 7 7 9 9 7 7 7 
        7 7 7 9 9 7 7 9 9 7 7 7 
        7 7 7 9 9 7 7 9 9 7 7 7 
        7 7 7 9 9 7 7 9 9 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 6 6 6 6 6 6 6 6 7 7 
        7 7 6 6 6 6 6 6 6 6 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 
        `, SpriteKind.P2)
    play2.setStayInScreen(true)
    controller.player2.moveSprite(play2)
    info.player2.setLife(10)
    info.player1.setLife(10)
    gate = 1
})
let projectile: Sprite = null
let mySprite4: Sprite = null
let gate = 0
let se = 0
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let P1ded = 0
let p2ded = 0
let play2: Sprite = null
let mySprite: Sprite = null
let _12 = 0
let _5: Sprite = null
controller.combos.setExtendedComboMode(true)
controller.combos.setTriggerType(TriggerType.Continuous)
controller.combos.setTimeout(0)
tiles.setTilemap(tilemap`level1`)
info.setLife(10)
mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 9 9 2 2 9 9 2 2 2 
    2 2 2 9 9 2 2 9 9 2 2 2 
    2 2 2 9 9 2 2 9 9 2 2 2 
    2 2 2 9 9 2 2 9 9 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 6 6 6 6 6 6 6 6 2 2 
    2 2 6 6 6 6 6 6 6 6 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
game.showLongText("Press up to go up", DialogLayout.Bottom)
game.showLongText("Press down to go down ", DialogLayout.Bottom)
game.showLongText("Press left or right to go right or left", DialogLayout.Bottom)
game.showLongText("watch out for many types of knifes while you progress", DialogLayout.Bottom)
game.showLongText("and get hearts to heal", DialogLayout.Bottom)
game.showLongText("get 300 score to win", DialogLayout.Bottom)
game.showLongText("*tutorial ended*", DialogLayout.Bottom)
controller.moveSprite(mySprite, 100, 100)
game.onUpdateInterval(5000, function () {
    console.logValue("P2", p2ded)
    console.logValue("P1", P1ded)
    console.logValue("wha", _5)
    console.logValue("huh/", _12)
    console.logValue("gate", gate)
    console.logValue("P1x", mySprite.x)
    console.logValue("P1y", mySprite.y)
})
game.onUpdateInterval(5000, function () {
    if (info.score() >= 200) {
        mySprite4 = sprites.create(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . c . . . . . . . 
            . . c c c c c 4 4 . 
            . . c d d d 4 4 . . 
            . . c c c c 4 4 . . 
            . . c . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, SpriteKind.turrent)
        tiles.placeOnRandomTile(mySprite4, assets.tile`myTile0`)
        mySprite4.setVelocity(40, 0)
    }
})
game.onUpdateInterval(5000, function () {
    if (info.score() >= 250) {
        _5 = sprites.create(img`
            . . 8 8 8 8 8 . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . c . . . . . . . . 
            . . c c c c c 4 4 . . 
            . . c d d d 4 4 . . . 
            . . c c c c 4 4 . . . 
            . . c . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . 8 8 8 8 8 . . . . 
            `, SpriteKind.turrent)
        tiles.placeOnRandomTile(_5, assets.tile`myTile0`)
        _5.setVelocity(40, 0)
    }
})
game.onUpdateInterval(2000, function () {
    if (info.score() >= 50) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . c . . . . . . . 
            . . c c c c c 2 2 . 
            . . c d d d 2 2 . . 
            . . c c c c 2 2 . . 
            . . c . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, SpriteKind.STRONG_KNIFE)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
        mySprite2.setVelocity(60, 0)
        if (Math.percentChance(60)) {
            mySprite3 = sprites.create(img`
                . . . . . . . . . . . 
                . . . . . . . . . . . 
                . . 2 2 . . . 2 2 . . 
                . 2 3 2 2 . 2 2 2 2 . 
                . 2 3 2 2 2 2 2 2 2 . 
                . 2 2 2 2 2 2 2 2 2 . 
                . . 2 2 2 2 2 b 2 . . 
                . . . 2 2 2 b 2 . . . 
                . . . . 2 2 2 . . . . 
                . . . . . 2 . . . . . 
                . . . . . . . . . . . 
                `, SpriteKind.HEALTH)
            tiles.placeOnRandomTile(mySprite3, assets.tile`myTile0`)
            mySprite3.setVelocity(60, 0)
        }
    }
})
game.onUpdateInterval(2000, function () {
    sprites.destroy(sprites.createProjectileFromSprite(img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . c . . . . . . . 
        . . c c c c c 8 8 . 
        . . c 7 d 7 2 8 . . 
        . . c c c c 8 8 . . 
        . . c . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, mySprite4, 50, 50))
    sprites.destroy(sprites.createProjectileFromSprite(img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . c . . . . . . . 
        . . c c c c c 8 8 . 
        . . c d d d 8 8 . . 
        . . c c c c 8 8 . . 
        . . c . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, _5, 50, 50))
})
game.onUpdateInterval(1000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . c . . . . . . . 
        . . c c c c c c c . 
        . . c d d d d d . . 
        . . c c c c c . . . 
        . . c . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
    mySprite2.setVelocity(60, 0)
    if (Math.percentChance(50)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . 2 2 . . . 2 2 . . 
            . 2 3 2 2 . 2 2 2 2 . 
            . 2 3 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 . 
            . . 2 2 2 2 2 b 2 . . 
            . . . 2 2 2 b 2 . . . 
            . . . . 2 2 2 . . . . 
            . . . . . 2 . . . . . 
            . . . . . . . . . . . 
            `, SpriteKind.HEALTH)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile0`)
        mySprite3.setVelocity(60, 0)
    }
})
game.onUpdateInterval(1000, function () {
    if (info.score() >= 100) {
        for (let index = 0; index < 2; index++) {
            mySprite2 = sprites.create(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . c . . . . . . . 
                . . c c c c c 2 2 . 
                . . c d d d 2 2 . . 
                . . c c c c 2 2 . . 
                . . c . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `, SpriteKind.STRONG_KNIFE)
            tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
            mySprite2.setVelocity(100, 0)
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (info.score() >= 80) {
        for (let index = 0; index < 4; index++) {
            mySprite2 = sprites.create(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . c . . . . . . . 
                . . c c c c c 8 8 . 
                . . c d d d 8 8 . . 
                . . c c c c 8 8 . . 
                . . c . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `, SpriteKind.FAST_BOI)
            tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
            mySprite2.setVelocity(200, 0)
        }
        if (Math.percentChance(30)) {
            mySprite3 = sprites.create(img`
                . . . . . . . . . . . 
                . . . . . . . . . . . 
                . . 2 2 . . . 2 2 . . 
                . 2 7 7 2 . 2 7 7 2 . 
                . 2 7 4 7 7 7 4 7 2 . 
                . 2 7 4 4 4 4 4 7 2 . 
                . . 2 7 4 6 4 7 2 . . 
                . . . 2 7 4 7 2 . . . 
                . . . . 2 7 2 . . . . 
                . . . . . 2 . . . . . 
                . . . . . . . . . . . 
                `, SpriteKind.SUPER_HEART)
            tiles.placeOnRandomTile(mySprite3, assets.tile`myTile0`)
            mySprite3.setVelocity(60, 0)
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (se == 0) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(20)
    }
})
game.onUpdateInterval(1000, function () {
    if (info.score() >= 200) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . c . . . . . . . 
            . . c c c c c 8 8 . 
            . . c 7 d 7 2 8 . . 
            . . c c c c 8 8 . . 
            . . c . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, mySprite4, 50, 50)
        sprites.createProjectileFromSprite(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . c . . . . . . . 
            . . c c c c c 8 8 . 
            . . c 7 d 7 2 8 . . 
            . . c c c c 8 8 . . 
            . . c . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, mySprite4, 100, 50).follow(mySprite, 30)
    }
})
game.onUpdateInterval(1000, function () {
    if (info.score() >= 250) {
        for (let index = 0; index < 3; index++) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . c . . . . . . . 
                . . c c c c c 8 8 . 
                . . c 7 d 7 2 8 . . 
                . . c c c c 8 8 . . 
                . . c . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `, _5, 50, 50)
            sprites.createProjectileFromSprite(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . c . . . . . . . 
                . . c c c c c 8 8 . 
                . . c 7 d 7 2 8 . . 
                . . c c c c 8 8 . . 
                . . c . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `, _5, 50, 50).follow(mySprite, 50)
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (P1ded == 1 && p2ded == 1) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        if (info.score() >= 100) {
            game.splash("wow your good")
            game.over(false)
        } else if (info.score() >= 200) {
            game.splash("wow impressive")
            game.over(false)
        }
    }
})
forever(function () {
    if (se == 0) {
        if (info.score() >= 300) {
            game.over(true)
            pause(5000)
            game.reset()
        }
    } else {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . c . . . . . . . 
            . . c c c c c 8 8 . 
            . . c d d d 8 8 . . 
            . . c c c c 8 8 . . 
            . . c . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, SpriteKind.bounce)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile0`)
        mySprite3.setBounceOnWall(true)
        mySprite3.setVelocity(randint(-56, 56), 100)
        pause(2000)
        if (info.score() >= 1000) {
            game.over(true)
            pause(5000)
            game.reset()
        }
    }
})
forever(function () {
    if (_12 == 5) {
        if (info.score() >= 150) {
            mySprite3 = sprites.create(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . c . . . . . . . 
                . . c c c c c 8 8 . 
                . . c d d d 8 8 . . 
                . . c c c c 8 8 . . 
                . . c . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `, SpriteKind.bounce)
            tiles.placeOnRandomTile(mySprite3, assets.tile`myTile0`)
            mySprite3.setBounceOnWall(true)
            mySprite3.setVelocity(40, 50)
            _12 += 1
        }
    }
})
forever(function () {
    music.setTempo(Math.constrain(info.score(), 40, 200))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(311, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(311, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        }
    }
})
forever(function () {
    if (info.life() >= 1000) {
        game.splash("DIE!")
        pause(100)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        mySprite.startEffect(effects.fire, 5000)
        sprites.destroy(mySprite, effects.disintegrate, 5000)
        info.setLife(1)
    }
})
game.onUpdateInterval(500, function () {
    if (info.score() == 0) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . 2 2 . . . 2 2 . . 
            . 2 7 7 2 . 2 7 7 2 . 
            . 2 7 4 7 7 7 4 7 2 . 
            . 2 7 4 4 4 4 4 7 2 . 
            . . 2 7 4 6 4 7 2 . . 
            . . . 2 7 4 7 2 . . . 
            . . . . 2 7 2 . . . . 
            . . . . . 2 . . . . . 
            . . . . . . . . . . . 
            `, SpriteKind.SUPER_HEART)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile4`)
        mySprite3.setVelocity(60, 0)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . 2 2 . . . 2 2 . . 
            . 2 3 2 2 . 2 2 2 2 . 
            . 2 3 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 . 
            . . 2 2 2 2 2 b 2 . . 
            . . . 2 2 2 b 2 . . . 
            . . . . 2 2 2 . . . . 
            . . . . . 2 . . . . . 
            . . . . . . . . . . . 
            `, SpriteKind.HEALTH)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile4`)
        mySprite3.setVelocity(60, 0)
    }
})
game.onUpdateInterval(500, function () {
    music.setTempo(Math.constrain(info.score(), 40, 200))
})
