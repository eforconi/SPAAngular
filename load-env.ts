// load-env.js
require('dotenv').config();
const { execSync } = require('child_process');

// Pass through any arguments to the nx command
const args = process.argv.slice(2).join(' ');

// Run the nx command with the loaded environment variables
execSync(`nx ${args}`, { stdio: 'inherit' });
