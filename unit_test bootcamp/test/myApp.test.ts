import {expect} from 'chai';
import {Calculator} from '../src/myApp';



describe('Calculator', ()=> {
    var number:number[];

    
    describe('#calculate()', () =>{

        it('should return the sum f 2+2 thats 4:', () => {
            expect(Calculator.calculate([2,2], 'sum')).to.equal(4);
        });
    });
        
    describe('#calculate()', () =>{

        it('should return the average of 2 and 4 thats 3:', () => {
            expect(Calculator.calculate([2,4], 'average')).to.equal(3);
        });
    });


    describe('#sum()', () =>{

        it('should return the sum of 1 + 2 thats 3:', () => {
            expect(Calculator.sum([1,2])).to.equal(3);
        });
    }); 

    describe('#average()', () =>{

        it('should return the avrg of 2 and 2 thats 2 ', () => {
            expect(Calculator.average([2,2])).to.equal(2);
        });
    });
});