import { ethers } from "hardhat";

async function main() {
  const NFTStakingBytecode = await ethers.getContractFactory("NFTStaking");
  const NFTStaking = await NFTStakingBytecode.deploy();

  await NFTStaking.deployed();

  console.log(`NFTStaking was deployed at ${NFTStaking.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// 0x575A41FEb4FEb8169f0eC18b6C29379D867954db main