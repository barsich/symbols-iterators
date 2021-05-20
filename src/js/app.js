/* eslint-disable no-plusplus */

import Bowman from './bowman';
import Swordsman from './swordsman';

export default class Team {
  constructor() {
    this.members = new Set();
    // this.iterator = this.members[Symbol.iterator]();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }

  // getNextTeammate() {
  //   return this.iterator.next().value;
  // }

  [Symbol.iterator]() {
    const teamArray = this.toArray();
    let current = 0;
    const last = teamArray.length - 1;

    return {
      next() {
        if (current <= last) {
          const status = {
            done: false,
            value: teamArray[current],
          };
          current++;
          return status;
        }
        return {
          done: true,
        };
      },
    };
  }
}

const team = new Team();
const bowman = new Bowman('Alex');
const swordsman = new Swordsman('Bob');
team.addAll(bowman, swordsman);
for (const member of team.members) {
  console.log(member);
}
