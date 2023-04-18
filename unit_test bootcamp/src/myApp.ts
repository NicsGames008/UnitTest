export class Calculator {
    static calculate(numbers: number[], operation: 'sum' | 'average'): number {
      let result = 0;
      if (operation === 'sum') {
        result = this.sum(numbers);
      } else if (operation === 'average') {
        result = this.average(numbers);
      }
      return result;
    }
  
    static sum(numbers: number[]): number {
      let result = 0;
      for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
      }
      return result;
    }
    
  
    static average(numbers: number[]): number {
      if (numbers.length === 0) {
        return 0;
      }  
      const sum = this.sum(numbers);
      return sum / numbers.length;
    }
  }