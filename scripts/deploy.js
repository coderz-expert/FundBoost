const hre=require("hardhat");
async function main(){
const CampaignFactory= await hre.ethers.getContractFactory("Campaignfactory");
const campaignFactory= await CampaignFactory.deploy();
await campaignFactory.deployed();
console.log("Campaignfactory deploy to this address: ",campaignFactory.address)
}
main().then(()=>process.exit(0)).catch((error)=>{
    console.log(error);
    process.exit(1);
});