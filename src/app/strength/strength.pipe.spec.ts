import {StrengthPipe} from './strength.pipe';

describe('StrengthPipe', () => {
  it('should display weak if strength is less than 5', () => {
      //arrange
      const pipe = new StrengthPipe();
    
      //act
      var result = pipe.transform(5);
    
      //assert
      expect(result).toEqual('5 (weak)');
  });

  it('should display strong if strength is 10', () => {
    //arrange
    const pipe = new StrengthPipe();

    //acy and assert
    expect(pipe.transform(10)).toEqual('10 (strong)');
  });
});