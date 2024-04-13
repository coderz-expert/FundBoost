import { useState } from "react"
import { ethers } from "ethers"
import CampaignFactory from '../artifacts/contracts/Campiagn.sol/Campaignfactory.json'
const test = () => {
   const [address,setAddress]=useState("")
  const  createCampiagnfromtest=async()=>{
    const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_RPC_URL
      );
    
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_ADDRESS,
        CampaignFactory.abi,
        provider
      );
    
      const getAllCampaigns = contract.filters.campaignCreated();
      const AllCampaigns = await contract.queryFilter(getAllCampaigns);
      console.log(AllCampaigns);
      const AllData = AllCampaigns.map((e) => {
        return {
          title: e.args.title,
          image: "https://picsum.photos/200",
          owner: e.args.owner,
          timeStamp: parseInt(e.args.timestamp),
          amount: ethers.utils.formatEther(e.args.requiredAmount),
          address: e.args.campaignAddress
        }
      });

    }
  return (
    <>
    {address}
    <div onClick={createCampiagnfromtest}>Create Campiagn</div>
    </>
  )
}

export default test