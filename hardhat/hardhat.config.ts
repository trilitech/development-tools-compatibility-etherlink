import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "";
const ETHERLINK_RPC_URL =
  process.env.ETHERLINK_RPC_URL ||
  "https://node.ghostnet.etherlink.com";
const ETHERLINK_EXPLORER =
  process.env.ETHERLINK_EXPLORER ||
  "";
const ETHERLINK_API_KEY = 
  process.env.ETHERLINK_API_KEY || 
  "";
const NIGHTLY_RPC_URL =
  process.env.NIGHTLY_RPC_URL ||
  "";
const NIGHTLY_PRIVATE_KEY =
  process.env.NIGHTLY_PRIVATE_KEY ||
  "";
const NIGHTLY_CHAINID =
  Number(process.env.NIGHTLY_CHAINID) ||
  31337; // local chainId -> will raise an error
const NIGHTLY_EXPLORER =
  process.env.NIGHTLY_EXPLORER ||
  "";


const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337
    },
    etherlink: {
      chainId: 128123,
      url: ETHERLINK_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    nightly: {
      chainId: NIGHTLY_CHAINID,
      url: NIGHTLY_RPC_URL,
      accounts: [NIGHTLY_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      etherlink: ETHERLINK_API_KEY,
      nightly: ETHERLINK_API_KEY
    },
    customChains: [
      {
        network: "etherlink",
        chainId: 128123,
        urls: {
          apiURL: `${ETHERLINK_EXPLORER}api`,
          browserURL: ETHERLINK_EXPLORER
        }
      },
      {
        network: "nightly",
        chainId: NIGHTLY_CHAINID,
        urls: {
          apiURL: `${NIGHTLY_EXPLORER}api`,
          browserURL: NIGHTLY_EXPLORER
        }
      }
    ]
  }
};

export default config;
