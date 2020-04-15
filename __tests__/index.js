const index = require('../src');

describe('Executing AWS Lambda function', () => {
	describe('with empty event', () => {
		test('should return undefined.', async () => {
			expect.assertions(1);
			await expect(index.handler({})).resolves.toEqual(undefined);
		})
	})
});