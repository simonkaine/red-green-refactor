import capitalizeAndFilter from './capitalizeAndFilter';

describe('capitalizeAndFilter', () => {
    it('Returns the name property of an object', () => {
        const strings = ['baby', 'fosh', 'scary'];
        const theFunction = capitalizeAndFilter(strings);
        expect(theFunction).toEqual(['Baby', 'Scary']);
    });
});
