import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config()

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    fantom: {
      url: `https://rpc.testnet.fantom.network`,
      chainId: 4002,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    fantomtest: {
      url: `https://rpc.testnet.fantom.network`,
      chainId: 4002,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
  },
  etherscan: {
    apiKey: {
      polygon: process.env.ETHERSCAN_KEY !== undefined ? process.env.ETHERSCAN_KEY : "",
      fantomtest: process.env.FANTOMSCAN_KEY !== undefined ? process.env.FANTOMSCAN_KEY : ""
    }
  },
  gasReporter: {
    enabled: true,
    coinmarketcap: process.env.COINMARKET_KEY,
    currency: 'USD',
    token: 'FTM',
    gasPriceApi: `https://api-testnet.ftmscan.com/api?module=proxy&action=eth_gasPrice&apikey=${process.env.ETHERSCAN_KEY}`,
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: { enabled: true, runs: 200 }
    }
  }
};

export default config;
