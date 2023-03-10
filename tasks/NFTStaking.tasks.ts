import { task } from "hardhat/config";

const contractAddress = "0xD7c77596AfD7181C0E76D94f7C38aCDE474CbaD9"

task("stake", "")
    .setAction(async (taskArgs, hre) => {
        const Instance = await hre.ethers.getContractAt("NFTStaking", contractAddress)
        const info = await Instance.stake(1, [1,2]);
        console.log(info)
    })