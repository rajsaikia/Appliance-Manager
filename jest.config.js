module.exports = {
	roots: ['<rootDir>'],
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	testMatch: [
		'<rootDir>/src/**/*.test.{js, jsx}',
		'<rootDir>/test/**/*.test.js',
	],
	testEnvironment: 'jest-environment-jsdom',
	moduleDirectories: ['node_modules', '/test/'],
	moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
	testPathIgnorePatterns: ['/node_modules/', '/public/'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	collectCoverageFrom: [
		'src/**/*.js',
		'!src/**/story.js',
		'!src/registerServiceWorker.js',
	],
	resetMocks: true,
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist'],
	moduleNameMapper: {
		'^styled-components(.*)$': '<rootDir>/node_modules/styled-components',
		'^react-redux(.*)$': '<rootDir>/node_modules/react-redux',
		'^translations(.*)$': '<rootDir>/src/translations$1',
		'\\.(css|scss|sass|less)$': 'identity-obj-proxy',
		'^jest/utils$': '<rootDir>/jest/utils.js',
		'^jest/mocks$': '<rootDir>/jest/mocks.js',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/jest/assetsTransformer.js',
	},
	modulePaths: ['<rootDir>/src', '<rootDir>/jest'],
	modulePathIgnorePatterns: ['<rootDir>/dist'],
};
