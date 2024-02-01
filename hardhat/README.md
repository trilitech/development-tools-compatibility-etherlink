# Hardhat Counter Project

This is a simple hardhat project with a counter contract used to store and increment a value.

## Setup

First, create a `.env` file like so and set the variables for the Nightly testnet (if you want to use it):
```
PRIVATE_KEY=<your-private-key>

ETHERLINK_RPC_URL=https://node.ghostnet.etherlink.com
ETHERLINK_EXPLORER=https://testnet-explorer.etherlink.com/
ETHERLINK_API_KEY=YOUCANCOPYME0000000000000000000000

NIGHTLY_RPC_URL=https://node.<release-date>.etherlink-nightly.tzalpha.net/
NIGHTLY_EXPLORER=https://explorer.<release-date>.etherlink-nightly.tzalpha.net/
NIGHTLY_CHAINID=<release-date>
NIGHTLY_PRIVATE_KEY=0eb9bfa77d6cd145cdc0e3d6f902ee1464aeb5f62b02e38f111c9b60cd3adab5
```

If you need informations about the Etherlink Nightly Testnet, you can go [here](https://etherlink-nightly.tzalpha.net).

Then, you need install the dependencies:
```bash
npm install
```

## Compile and local tests

You can compile and test that the counter works locally by running:
```bash
npx hardhat compile
npx hardhat test
```

## Deploy the contract

### 1. Deploy
You can deploy the contract directly on chain. Choose between `etherlink` and `nightly` then run:
```bash
npx hardhat run scripts/deploy.ts --network <etherlink or nightly>
```

### 2. Verify
Then, you can verify the contract you just deployed with the command:
```bash
npx hardhat verify <contract-address> --network <etherlink or nightly>
```

## Send transactions

To send transactions to the chain and test the counter you deployed, keep the address printed during the deployment above. You will need to add the address of your contract in each script you use.

### 3. Increment the counter

If you want to increment the counter, go in the `scripts/increment.ts` file and change the `counterAddress` variable line 3 with the address of your contract. Then run:
```bash
npx hardhat run scripts/increment.ts --network <etherlink or nightly>
```

### 4. Set the value in the counter

You can also set the number. Go in the `scripts/setNumber.ts` file and change the `counterAddress` variable line 3 with the address of your contract and the `numberToSet` line 4 with the number you want the counter to be set with. Then run:
```bash
npx hardhat run scripts/setNumber.ts --network <etherlink or nightly>
```

### 5. Test the revert

Finally, you can test the revert behavior by running:
```bash
npx hardhat run scripts/revertMe.ts --network <etherlink or nightly>
```

### 6. Test the revert

If you want to try a deployment of the counter with a proxy pattern (transparent in our case) by Openzeppelin:
```bash
npx hardhat run scripts/deployWithProxy.ts --network <etherlink or nightly>
```

