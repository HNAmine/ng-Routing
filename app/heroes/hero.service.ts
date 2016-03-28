import {Injectable} from 'angular2/core';

export class Hero {
    constructor(public id:number, public name:string) {
    }
}

@Injectable()
export class HeroService {
    getHeroes() {
        return heroesPromise;
    }

    getHero(id:number | string) {
        return heroesPromise
            .then(heroes => heroes.filter(h => h.id === +id)[0]);
    }
}

var HEROES = [
    new Hero(11, 'Mr. Mohamed HANANE'),
    new Hero(12, 'Mme. Mina KERADI'),
    new Hero(13, 'Mr. Amine HANANE'),
    new Hero(14, 'Mr. Ayoub HANANE'),
    new Hero(15, 'Mlle. Nadia HANANE'),
    new Hero(16, 'Mr. Solayman HANANE')
];

var heroesPromise = Promise.resolve(HEROES);
