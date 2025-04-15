export default {
  displayName: 'letta-react',
  preset: '../../jest.preset.js',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'tsx', 'html'],
  coverageDirectory: '../../coverage/packages/letta-react',
};
