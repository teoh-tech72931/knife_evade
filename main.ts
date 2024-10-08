namespace SpriteKind {
    export const HEALTH = SpriteKind.create()
    export const STRONG_KNIFE = SpriteKind.create()
    export const FAST_BOI = SpriteKind.create()
    export const SUPER_HEART = SpriteKind.create()
    export const bounce = SpriteKind.create()
    export const turrent = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite.destroy()
    mySprite = sprites.create(img`
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
})
sprites.onOverlap(SpriteKind.HEALTH, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.destroy()
    mySprite = sprites.create(img`
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
})
sprites.onOverlap(SpriteKind.SUPER_HEART, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.FAST_BOI, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    tiles.setTileAt(tiles.getTileLocation(sprite.x, sprite.y), assets.tile`myTile`)
    pause(5000)
    tiles.setTileAt(tiles.getTileLocation(sprite.x, sprite.y), assets.tile`myTile2`)
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
        mySprite2.setVelocity(100, 0)
        mySprite2.follow(mySprite)
        pause(2000)
        sprites.destroy(mySprite2)
    }
})
sprites.onOverlap(SpriteKind.HEALTH, SpriteKind.FAST_BOI, function (sprite, otherSprite) {
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    mySprite.destroy()
    mySprite = sprites.create(img`
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
})
sprites.onOverlap(SpriteKind.SUPER_HEART, SpriteKind.FAST_BOI, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.STRONG_KNIFE, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-5)
})
sprites.onOverlap(SpriteKind.HEALTH, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.SUPER_HEART, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(5)
})
info.onLifeZero(function () {
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    if (info.score() >= 100) {
        game.splash("wow your good")
        pause(2000)
        game.over(false)
    } else if (info.score() >= 200) {
        game.splash("wow impressive")
        pause(2000)
        game.over(false)
    }
})
scene.onOverlapTile(SpriteKind.HEALTH, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.bounce, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-0.5)
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
scene.onOverlapTile(SpriteKind.bounce, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.SUPER_HEART, SpriteKind.STRONG_KNIFE, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.HEALTH, SpriteKind.STRONG_KNIFE, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.SUPER_HEART, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.FAST_BOI, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
controller.combos.attachCombo("A+B", function () {
    game.splash("Hard Mode:On")
    se = 1
})
let projectile: Sprite = null
let mySprite4: Sprite = null
let se = 0
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let _12 = 0
let _5: Sprite = null
controller.combos.setExtendedComboMode(true)
controller.combos.setTriggerType(TriggerType.Continuous)
controller.combos.setTimeout(0)
tiles.setTilemap(tilemap`level1`)
info.setLife(10)
mySprite = sprites.create(img`
    2 2 2 2 2 
    2 2 2 2 2 
    2 2 2 2 2 
    2 2 2 2 2 
    2 2 2 2 2 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
scene.cameraFollowSprite(mySprite)
game.showLongText("Press up to go up", DialogLayout.Bottom)
game.showLongText("Press down to go down ", DialogLayout.Bottom)
game.showLongText("Press left or right to go right or left", DialogLayout.Bottom)
game.showLongText("watch out for four types of knifes while you progress", DialogLayout.Bottom)
game.showLongText("and get hearts to heal", DialogLayout.Bottom)
game.showLongText("get 300 score to win", DialogLayout.Bottom)
game.showLongText("*tutorial ended*", DialogLayout.Bottom)
controller.moveSprite(mySprite)
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
game.onUpdateInterval(500, function () {
    music.setTempo(Math.constrain(info.score(), 40, 200))
})
