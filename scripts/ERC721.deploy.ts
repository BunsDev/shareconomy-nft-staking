import { ethers } from "hardhat"
import { NFTStakingAddress } from "../config"

async function main() {
  const ERC721Bytecode = await ethers.getContractFactory("MyNFTS");
  const ERC721 = await ERC721Bytecode.deploy(NFTStakingAddress);

  await ERC721.deployed();

  console.log(`ERC721 was deployed at ${ERC721.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// 0x2FAED5a4A39f7Ea058F90DB3FBbC4f3F5e7B0e57 main