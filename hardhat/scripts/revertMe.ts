import { ethers, network } from "hardhat";

const counterAddress = ""; // address of the counter

async function main() {
  const [ signer ] = await ethers.getSigners();
  if (counterAddress.length == 0) {
    console.log("Error: you forgot to set your contract address in the script file.");
  }
  const counter = await ethers.getContractAt("Counter", counterAddress, signer);

  // This code should revert and go in the catch
  try {
    await counter.revertMe(2n, 0n);
    console.log("Error: this code should have revert!");
  } catch (error: any) {
    if (error.data && counter) {
      // successfully reverted
      const decodedError = counter.interface.parseError(error.data);
      console.log("Decoded error name:", decodedError?.name);
    } else {
      // /!\ PROBLEM TO HANDLE WITH CORE TEAM /!\
      if (network.name == "etherlink" || network.name == "nightly") {
        console.log("protection for etherlink (and nightly), problem to handle")
        return;
      }
      console.log("Error:", error);
      throw new Error("An unexpected error occured");
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
