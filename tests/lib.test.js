const lib = require('../lib');

describe('absolute', () => {

    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    
    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    it('should return 0 if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });

});

describe('greet', () => {
    it('should return the greeting message', () => {
        const result = lib.greet('Mosh');
        expect(result).toMatch(/Mosh/);
        expect(result).toContain('Mosh');
    });
}); 

describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();
        expect(result).toEqual(expect.arrayContaining(['USD','AUD','EUR']));
        
    });
}); 

describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        //expect(result).toEqual({id: 1, price: 10});
        expect(result).toMatchObject({id: 1, price: 10});
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('id', 1);
    });
}); 

describe('registerUser', () => {
    it('should throw if username is falsy', () => {
        // in array we set all the values, which are considered falsy in javascript
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach(a =>{
            expect(() => {lib.registerUser(a)}).toThrow();
        });
    });

    it('should return a userobject if a valid username is passed', () => {
        const result = lib.registerUser('mosh');
        expect(result).toMatchObject({username: 'mosh'});
        expect(result.id).toBeGreaterThan(0);

    });
}); 