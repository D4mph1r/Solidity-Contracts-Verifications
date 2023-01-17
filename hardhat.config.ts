import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey:
            "",
          balance: "",
        },
      ],
    },
    // goerli: {
    //   url:
    //     "https://goerli.infura.io/v3/",
    //   accounts: [
    //     {
    //       privateKey:
    //         "f274af9cd701ed1e3d679acef118887983f6f781ba06cbbfd23a1ae2ef32a25a",
    //       balance: "0.2028",
    //     },
    //   ],
    // },
    goerli: {
      url: "https://nd-406-903-342.p2pify.com/569dc1d83a8a1c5eba812c64d3d72ff8",
      accounts: [""]
    },
    polygon: {
      url: "https://matic-mainnet-archive-rpc.bwarelabs.com",
      accounts: [""]
    },
    bsc: {
      url: "https://bsc-dataseed1.binance.org/",
      accounts: [""]
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: "",
  },
};

export default config;
