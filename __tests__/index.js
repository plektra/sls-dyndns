const index = require('../index');

describe('Executing AWS Lambda function', () => {
	describe('with empty event', () => {
		test('should return undefined.', () => {
			return index.handler({}).then(data => expect(data).toEqual(undefined));
		})
	})
});