module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            isolatedModules: false,
        },
    },
    moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json'],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    testEnvironment: 'node',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    testMatch: ['**/__test__/**/*.test.(ts|tsx)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    },
}
