import { useState } from "react"
import { ethers } from "ethers"
import CampaignFactory from '../artifacts/contracts/Campiagn.sol/Campaignfactory.json'
const test = () => {
   const [address,setAddress]=useState("")
  const  createCampiagnfromtest=async()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
    const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_ADDRESS,
        CampaignFactory.abi,
        signer
      );
        

      const campaignData = await contract.createCampaign(
        "test Campiagn",
        10,
        "https://picsum.photos/200",
        "Education",
        "hello test"
      );

      await campaignData.wait();   
console.log(campaignData.to);
      setAddress(campaignData.to);

    }
  return (
    <>
    {address}
    <div onClick={createCampiagnfromtest}>Create Campiagn</div>
    </>
  )
}

export default test