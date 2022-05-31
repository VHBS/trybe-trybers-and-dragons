import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, monsters: (SimpleFighter | Fighter)[]) {
    super(player);
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.map((monster) => {
      this.player.attack(monster);
      return monster.attack(this.player);
    });
    return super.fight();
  }
}