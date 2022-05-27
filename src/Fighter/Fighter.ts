import Energy from '../Energy';
import SimpleFigther from './SimpleFighter';

export default interface Fighter extends SimpleFigther{
  defense: number;
  energy?: Energy;

  special(enemy: SimpleFigther): void;
  levelUp(): void;
}