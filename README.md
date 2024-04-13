This is a Dapp application based on the Ethereum blockchain, utilizing the Sepolia network.
## Getting Started

Before you begin, make sure to update the `env.local` files with the following configurations:
```bash
NEXT_PUBLIC_RPC_URL=     // Add the RPC URL here. You can create an account from alchemy.com and create a project. After that, you will receive the RPC URL.
NEXT_PUBLIC_PRIVATE_KEY=  // Add your private key here. You can get it from Metamask by clicking on your account, then on the menu (3-dot button), selecting Account details, and clicking on show Private Key.
DEFAULT_NETWORK=sepolia
NEXT_PUBLIC_ADDRESS=  // When you run `npx hardhat deploy scripts/deploy.js`, you will receive the public address of the contract.
NEXT_PUBLIC_IPFS_ID=   // Please add IPFS id and key.
NEXT_PUBLIC_IPFS_KEY=
```
Once you've updated the configurations, run the following commands:

```bash
npm install
npx hardhat compile
npx hardhat deploy scripts/deploy.js
```
After deploying the contracts, start the server by running the following command:
```bash
npm run dev
```

You can now view the result by opening http://localhost:3000 in your browser.



