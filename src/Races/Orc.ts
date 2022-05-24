import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints:number;
  private static _racesInstances = 0;

  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.addRacesInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addRacesInstances() {
    this._racesInstances += 1;
  }

  static createdRacesInstances():number {
    return this._racesInstances;
  }
}