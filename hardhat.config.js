require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
module.exports = {
  solidity: "0.8.1",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};