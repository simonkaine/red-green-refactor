import fetchQuotes from './fetchQuotes.js';

describe('fetchQuotes', () => {
    it('returns single quote from futramaAPI', async () => {
        const quotes = await fetchQuotes();

        expect(quotes).toEqual({
            name: expect.any(String),
            text: expect.any(String),
            image: expect.any(String),
        });
    });
});
