import {AbstractDisplayObject} from '../../abstract/AbstractDisplay';
import display from '../../decorators/Display';
import Rectangle from '../support/Rectangle';

@display({
    require: ['x', 'y']
})
export default class Graphics extends AbstractDisplayObject {
    graphics: Phaser.Graphics;

    // constructor(game: Game, require: any, optional: any, id: number) {
    //     super(id);
    //     this.graphics = new Phaser.Graphics(game.realGame, require.x, require.y);
    // }

    buildRealObject(game, require, optional) {
        this.graphics = new Phaser.Graphics(game.realGame, require.x, require.y);
    }

    getRealObject(): Phaser.Graphics {
        return this.graphics;
    }

    destroy(): void {
        this.graphics.destroy(true);
    }

    set alpha(value: number) {
        this.graphics.alpha = value;
    }

    set beginFill(value: number) {
        this.graphics.beginFill(value);
    }

    set x(value: number) {
        this.graphics.x = value;
    }

    set y(value: number) {
        this.graphics.y = value;
    }

    set Rectangle (value: Rectangle) {
        this.graphics.drawShape(<any>value.getRealObject());
    }
}
