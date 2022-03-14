async function main() {
  const contract = await ethers.getContractFactory("Balances");
  const deploy = await contract.deploy();
  await deploy.deployed();
  console.log("Contract deployed to address:", deploy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
