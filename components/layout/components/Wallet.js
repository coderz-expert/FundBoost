import styled from 'styled-components'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react';


function Wallet() {
    const [address,setAddress]=useState("");
    const [balance,setBalance]=useState("");
const checkWalletConnect= async()=>{
  console.log("Metamask is not connected");
  const accounts = await window.ethereum.request({method: 'eth_accounts'});       
  if (accounts.length) {
   
    setAddress(accounts[0]);

    const provider= new ethers.providers.Web3Provider(window.ethereum,"any");

    const account=provider.getSigner();
    const Balance=await account.getBalance(); 
    setBalance(ethers.utils.formatEther(Balance));
     console.log(`You're connected to: ${accounts[0]}`);
  } else {
     console.log("Metamask is not connected");
  }
  
}

const connectWallet = async() => {
        await window.ethereum.request({method:"eth_requestAccounts"});
        const provider= new ethers.providers.Web3Provider(window.ethereum,"any");
        console.log(provider.network);

                   
       // if(provider.network !=="sepolia")
       // {
            // await window.ethereum.request({
            //     method: "wallet_addEthereumChain",
            //     params: [{
            //       chainId: "0xaa36a7",
            //       rpcUrls: ["https://sepolia.infura.io/v3/"],
            //       chainName: "Sepolia test network",
            //       nativeCurrency: {
            //         name: "SepoliaETH",
            //         symbol: "ETH",
            //         decimals: 18
            //       },
            //       blockExplorerUrls: ["https://sepolia.etherscan.io/"]
            //     }]
            //   });
              const account=provider.getSigner();
              const Address=await account.getAddress();  
              const Balance=await account.getBalance();      
              setAddress(Address);
              setBalance(ethers.utils.formatEther(Balance));
        //}
   


}
const handleAccountChange = async (...args) => {
  // you can console to see the args
  const accounts = args[0] ;
  // if no accounts that means we are not connected
  if (accounts.length === 0) {
    console.log("Please connect to metamask");
     } else if (accounts[0] !== address) {
      const provider= new ethers.providers.Web3Provider(window.ethereum,"any");

      const account=provider.getSigner();
      const Balance=await account.getBalance(); 
      setBalance(ethers.utils.formatEther(Balance));
     setAddress(accounts[0])
  }
};
useEffect(() => {

  checkWalletConnect();

},[]); 
useEffect(() => {
  ethereum?.on("accountsChanged", handleAccountChange);
  return () => {
    ethereum?.removeListener("accountsChanged", handleAccountChange);
  };
});
return (
    <ConnectWalletWrapper onClick={connectWallet}>
      {balance == '' ? <Balance></Balance> : <Balance>{balance.slice(0,4)} ETH</Balance> }
      {address == '' ? <Address>Connect Wallet</Address> : <Address>{address.slice(0,6)}...{address.slice(39)}</Address>}
    </ConnectWalletWrapper>
  );
};

const ConnectWalletWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 5px 9px;
  height: 100%;
  color: ${(props) => props.theme.color};
  border-radius: 10px;
  margin-right: 15px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 8px;
  text-align:center;
  cursor: pointer;
`;

const Address = styled.h2`
    background-color: ${(props) => props.theme.bgSubDiv};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px 0 5px;
    border-radius: 10px;
`

const Balance = styled.h2`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`

export default Wallet;