#!/usr/bin/env node

/**
 * Flash USDT Sender Bot
 * Professional cryptocurrency automation tool
 * 
 * @author Flash USDT Sender Team
 * @version 1.0.0
 * @website https://flashusdtsender.xyz
 * @support https://t.me/RecentCoders
 */

require('dotenv').config();

// ASCII Art Banner
const banner = `
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║    ███████╗██╗      █████╗ ███████╗██╗  ██╗    ██╗   ██╗     ║
║    ██╔════╝██║     ██╔══██╗██╔════╝██║  ██║    ██║   ██║     ║
║    █████╗  ██║     ███████║███████╗███████║    ██║   ██║     ║
║    ██╔══╝  ██║     ██╔══██║╚════██║██╔══██║    ██║   ██║     ║
║    ██║     ███████╗██║  ██║███████║██║  ██║    ╚██████╔╝     ║
║    ╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝     ╚═════╝      ║
║                                                               ║
║                    USDT SENDER BOT v1.0.0                    ║
║                  https://flashusdtsender.xyz                 ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
`;

console.log('\x1b[36m%s\x1b[0m', banner);
console.log('\x1b[32m🚀 Flash USDT Sender Bot - Starting...\x1b[0m');
console.log('\x1b[33m⚡ Powered by flashusdtsender.xyz\x1b[0m');
console.log('');

// Bot configuration
const config = {
  name: 'Flash USDT Sender Bot',
  version: '1.0.0',
  deployed: new Date().toISOString(),
  platform: 'GitHub',
  website: 'https://flashusdtsender.xyz',
  support: 'https://t.me/RecentCoders',
  environment: process.env.NODE_ENV || 'development',
  botToken: process.env.BOT_TOKEN || 'NOT_SET',
  apiUrl: process.env.API_URL || 'https://api.flashusdtsender.xyz',
};

// Display configuration
console.log('\x1b[34m📋 Bot Configuration:\x1b[0m');
console.table({
  'Bot Name': config.name,
  'Version': config.version,
  'Environment': config.environment,
  'Platform': config.platform,
  'Website': config.website,
  'Deployed': config.deployed,
});
console.log('');

// Environment validation
function validateEnvironment() {
  const requiredVars = ['BOT_TOKEN'];
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    console.log('\x1b[31m❌ Missing required environment variables:\x1b[0m');
    missing.forEach(varName => {
      console.log(`   • ${varName}`);
    });
    console.log('');
    console.log('\x1b[33m💡 Please check your .env file and add the missing variables.\x1b[0m');
    console.log('\x1b[33m📖 See .env.example for reference.\x1b[0m');
    return false;
  }
  
  console.log('\x1b[32m✅ Environment validation passed\x1b[0m');
  return true;
}

// Main bot function
function startBot() {
  try {
    console.log('\x1b[32m🤖 Bot is running successfully!\x1b[0m');
    console.log('');
    
    // Bot status indicator
    const statusIndicator = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString();
      console.log(`\x1b[36m[INFO] ${timestamp} - Bot is active and monitoring...\x1b[0m`);
    }, 30000); // Log every 30 seconds
    
    console.log('\x1b[33m📖 Next Steps:\x1b[0m');
    console.log('1. \x1b[37mConfigure your environment variables in .env\x1b[0m');
    console.log('2. \x1b[37mAdd your bot logic to this file\x1b[0m');
    console.log('3. \x1b[37mInstall additional dependencies as needed\x1b[0m');
    console.log('4. \x1b[37mTest your bot functionality\x1b[0m');
    console.log('5. \x1b[37mDeploy to your preferred hosting platform\x1b[0m');
    console.log('');
    
    console.log('\x1b[34m🔗 Resources:\x1b[0m');
    console.log(`• \x1b[37mDocumentation: ${config.website}\x1b[0m`);
    console.log(`• \x1b[37mSupport: ${config.support}\x1b[0m`);
    console.log('• \x1b[37mUpdates: Check our website for latest features\x1b[0m');
    console.log('');
    
    console.log('\x1b[35m⭐ Thank you for using Flash USDT Sender!\x1b[0m');
    console.log('\x1b[90m' + '='.repeat(60) + '\x1b[0m');
    
    // Keep the process running
    process.stdin.resume();
    
  } catch (error) {
    console.error('\x1b[31m❌ Error starting bot:\x1b[0m', error);
    process.exit(1);
  }
}

// Graceful shutdown
function gracefulShutdown(signal) {
  console.log(`\n\x1b[33m📴 Received ${signal}. Shutting down gracefully...\x1b[0m`);
  console.log('\x1b[32m✅ Bot stopped successfully\x1b[0m');
  process.exit(0);
}

// Error handling
process.on('uncaughtException', (error) => {
  console.error('\x1b[31m❌ Uncaught Exception:\x1b[0m', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('\x1b[31m❌ Unhandled Rejection at:\x1b[0m', promise, 'reason:', reason);
  process.exit(1);
});

// Signal handlers
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Start the bot
console.log('\x1b[36m🔍 Validating environment...\x1b[0m');
if (validateEnvironment()) {
  console.log('\x1b[36m🚀 Starting bot...\x1b[0m');
  startBot();
} else {
  console.log('\x1b[31m❌ Environment validation failed. Please fix the issues above.\x1b[0m');
  process.exit(1);
}
