const api = require('../src/auth');

describe('Executing auth function', () => {
	describe('without authorization header', () => {
		test('should return Unauthorized.', async () => {
			expect.assertions(1);
			await expect(api.handler({})).resolves.toEqual("Unauthorized");
		});
	});

	describe('with authorization header having wrong credentials', () => {
		test('should return Unauthorized.', async () => {
			await expect(api.handler({
				"headers": {
					"Authorization": "Basic dXNlcjpzYWxh"
				}
			})).resolves.toEqual("Unauthorized");
		});
	});
});