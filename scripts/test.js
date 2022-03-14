require("dotenv").config();
const STAGING_ALCHEMY_KEY = process.env.STAGING_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(STAGING_ALCHEMY_KEY);

const contractAddress = "0x8A89750B9048c8294D3cB436586960Df70c51c27";
const abi = require("../artifacts/contracts/Balances.sol/Balances.json");

const walletAddress = "0x07c64e12fE96209eF08034Bb1838Cc196055228E";
const tokens = [
  "0xA7085DEa56107e5a5A28cE223B3f97c39D22665B",
  "0xA7085DEa56107e5a5A28cE223B3f97c39D22665B",
];

const test = () => {
  const contract = new web3.eth.Contract(abi.abi, contractAddress);
  contract.methods
    .getBalances(walletAddress, tokens)
    .call((error, balances) => {
      if (!error) {
        console.log(balances);
        return balances;
      } else {
        console.log(error);
      }
    });
};

test();
