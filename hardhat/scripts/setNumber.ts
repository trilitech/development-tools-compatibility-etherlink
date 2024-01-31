import { ethers } from "hardhat";

const counterAddress = ""; // address of the counter
const numberToSet = 0; // number to set

async function main() {
  const [ signer ] = await ethers.getSigners();
  if (counterAddress.length == 0) {
    console.log("Error: you forgot to set your contract address in the script file.");
  }
  const counter = await ethers.getContractAt("Counter", counterAddress, signer);

  console.log("Counter before the call:", await counter.number());
  console.log("Number used to set the Counter:", numberToSet);
  await counter.setNumber(numberToSet);
  console.log("Counter after the call:", await counter.number());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
