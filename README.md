This is a Dapp application based on the Ethereum blockchain, utilizing the Sepolia network.
## Getting Started

update the env.local files :
```bash
NEXT_PUBLIC_RPC_URL=     //adding RPC uRL, you can create account from alchemy.com and crete project after that you will get RPC url 
NEXT_PUBLIC_PRIVATE_KEY=  //add you private key , you can get from Metamask, click to account ->click on menu(3 dot button)->Account details-> click on show Private Key
DEFAULT_NETWORK=sepolia
NEXT_PUBLIC_ADDRESS:  // when you run npx hardhat deploy scripts/deploy.js , you will get Public address of contract
NEXT_PUBLIC_IPFS_ID=   // please IPFS id and key 
NEXT_PUBLIC_IPFS_KEY=
```
First, run the commands:

```bash
npm install
npx hardhat compile
npx hardhat deploy scripts/deploy.js
```
thaen Start server from following run this command:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



