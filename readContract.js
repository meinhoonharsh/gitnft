const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/31ae6a1204714571a660c04d41a86107`
);

const querryBlockchain = async () => {
  //   const block = await provider.getBlockNumber();
  //   console.log("Current Block Number:", block);

  const balance = await provider.getBalance(
    "0x0b96d62349def159655ca16af82f00dde3737d4b"
  );
  console.log("Account Balance In BN:", balance);

  const balanceEther = ethers.utils.formatEther(balance);
  console.log("Account Balance In Ether:", balanceEther);

  const balanceWei = ethers.utils.parseEther(balanceEther);
  console.log(balanceWei);
};
querryBlockchain();