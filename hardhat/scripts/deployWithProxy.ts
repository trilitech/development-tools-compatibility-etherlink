import { ethers, upgrades } from "hardhat";

async function main() {
    const Counter = await ethers.getContractFactory("Counter");
    const counterProxy = await upgrades.deployProxy(Counter);
    await counterProxy.waitForDeployment();
    const proxyAddress = await counterProxy.getAddress();
    const implemAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
    const adminAddress = await upgrades.erc1967.getAdminAddress(proxyAddress);
  
    console.log(`Counter (proxy) address: ${proxyAddress}`);
    console.log(`Counter (implentation / logic) address: ${implemAddress}`);
    console.log(`Counter (admin) address: ${adminAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
