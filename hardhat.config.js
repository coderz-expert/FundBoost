/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: './.env.local' });

task("accounts","Prints the list of all account",async(taskArgs,hre)=>{
  const accounts=await hre.ethers.getSigner();
  //for(const account of accounts){
    console.log(accounts);



    
  //}
})
const privateKey=process.env.NEXT_PUBLIC_PRIVATE_KEY
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: process.env.DEFAULT_NETWORK,
  networks:{
    hardhat:{},
    sepolia:{url:process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [privateKey]}
  }

};
