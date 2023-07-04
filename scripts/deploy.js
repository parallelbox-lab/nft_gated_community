const main = async () => {
  try {
   const nftContactFactory = await hre.ethers.getContractFactory('PunkNft');
   const nftContract = await nftContactFactory.deploy();
   await nftContract.deployed();
    console.log("deployed to :", nftContract.address);
    process.exit(0);

  } catch (e) {
    console.log(e);
    process.exit(1);
    
  }
}

main();