import { ethers } from "hardhat"
import { NFTStakingAddress } from "../config"

async function main() {
  const ERC20Bytecode = await ethers.getContractFactory("MyToken");
  const ERC20 = await ERC20Bytecode.deploy(NFTStakingAddress);

  await ERC20.deployed();

  console.log(`ERC20 was deployed at ${ERC20.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// 0xb7aA6ecB2B7A292c4f1ca5833A2DED8B1591d14d main