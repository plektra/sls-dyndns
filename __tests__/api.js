const api = require('../src/api');

describe('Executing AWS Lambda function', () => {
	describe('with empty event', () => {
		test('should return undefined.', async () => {
			expect.assertions(1);
			await expect(api.handler({})).resolves.toEqual(undefined);
		})
	})
});