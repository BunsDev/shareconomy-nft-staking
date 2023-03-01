import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config()

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    fantomtest: {
      url: `https://rpc.testnet.fantom.network`,
      chainId: 4002,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    fantom: {
      url: `https://rpcapi.fantom.network`,
      chainId: 250,
      accounts: [`${process.env.FANTOM_PRIVATE_KEY !== undefined ? process.env.FANTOM_PRIVATE_KEY : ""}`]
    }
  },
  etherscan: {
    apiKey: {
      polygon: process.env.ETHERSCAN_KEY !== undefined ? process.env.ETHERSCAN_KEY : "",
      fantom: process.env.FANTOMSCAN_KEY !== undefined ? process.env.FANTOMSCAN_KEY : ""
    }, 
    customChains: [
      {
        network: "fantom",
        chainId: 250,
        urls: {
          apiURL: "https://api.ftmscan.com/api",
          browserURL: "https://ftmscan.com"
        }
      }
    ]
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: { enabled: true, runs: 200 }
    }
  }
};

export default config;
