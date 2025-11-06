#!/usr/bin/env node

/**
 * Simple test runner for calendar.test.ts
 * Run with: node test/run-tests.js
 */

const { execSync } = require('child_process');
const path = require('path');

console.log('🧪 Running Calendar Function Tests...\n');

try {
  // Try to run with tsx (if available)
  try {
    execSync('npx tsx test/calendar.test.ts', { 
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
  } catch (tsxError) {
    // Fallback to ts-node if tsx is not available
    try {
      execSync('npx ts-node test/calendar.test.ts', { 
        stdio: 'inherit',
        cwd: path.join(__dirname, '..')
      });
    } catch (tsNodeError) {
      console.log('⚠️  Neither tsx nor ts-node found. Please install one:');
      console.log('   npm install -D tsx');
      console.log('   or');
      console.log('   npm install -D ts-node');
      console.log('\nThen run:');
      console.log('   npx tsx test/calendar.test.ts');
      process.exit(1);
    }
  }
} catch (error) {
  console.error('❌ Tests failed:', error.message);
  process.exit(1);
}