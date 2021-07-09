// import Character from './character';


export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(сhar) {
    if (this.members.has(сhar)) {
      throw new Error('Такой персонаж уже существует');
    } else {
      this.members.add(сhar);
    }
  }

  addAll(...args) {
    args.forEach((char) => {
      this.members.add(char);
    });
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}
