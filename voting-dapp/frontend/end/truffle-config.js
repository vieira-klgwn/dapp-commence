const fs = require('fs');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const secrets = JSON.parse(
  fs.readFileSync(".secrets").toString().trim()
);

module.exports = {
  networks: {
    sepolia: {
      provider: () =>
        new HDWalletProvider(
          secrets.seed,
          `https://sepolia.infura.io/v3/${secrets.projectId}`
        ),
      network_id: 11155111, // Sepolia's network ID
      gas: 5500000, // Optional: Set gas limit (adjust as needed)
      gasPrice: 20000000000, // Optional: Set gas price (20 Gwei, adjust as needed)
      confirmations: 2, // Optional: Number of confirmations to wait between deployments
      timeoutBlocks: 200, // Optional: Number of blocks before transaction timeout
      skipDryRun: true // Optional: Skip dry run before migrations
    }
  },

  compilers: {
    solc: {
      version: "0.8.20", // Already set correctly for your contracts
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },

  // Optional: Add Mocha settings if needed for testing
  mocha: {
    timeout: 100000
  },

  // Optional: Specify the network check timeout
  networkCheckTimeout: 10000
};