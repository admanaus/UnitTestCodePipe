import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('HerosComponent', () => {
    let component: HeroesComponent;
    let HEROS;
    let mockHeroService

    beforeEach(() => {
        HEROS = [
            {id:1, name:'SpiderDude', strength: 8},
            {id:2, name: 'Wonderful Woman', strength: 24},
            {id:3, name: 'SuperDude', strength: 55}
        ]
    })

    mockHeroService = jasmine.createSpyObj(['getHeros', 'addHero', 'deleteHero']);
    mockHeroService.deleteHero.and.returnValue(of(true));

    component = new HeroesComponent(mockHeroService);

    describe('delete', () => {
        it('should remove the indicated hero from the heros list', () => {
            //arrange
            component.heroes = HEROS;

            //act
            component.delete(HEROS[2]);

            //assert
            expect(component.heroes.length).toBe(2);
            expect(component.heroes[0].name).toBe('SpiderDude');
            expect(component.heroes[0].id).toBe(1);
            expect(component.heroes[0].strength).toBe(8);
            expect(component.heroes[1].name).toBe('Wonderful Woman');


        })
    })
})