# Foundry Counter Project

This is a simple foundry project with a counter contract used to store and increment a value. Your first need to [install Foundry](https://book.getfoundry.sh/getting-started/installation).

## Setup

First, you need install the dependencies:
```bash
forge install
```

## Compile and local tests

You can compile and test that the counter works locally by running:
```bash
forge compile
forge test
```

## Deploy the contract and run some tests on Etherlink

### 1. Deploy and verify
You can deploy the contract directly on chain. Choose between `etherlink` and `nightly` by changing the RPC URL:
```bash
forge create --rpc-url <your_rpc_url> --private-key <your_private_key> src/Counter.sol:Counter --legacy
```

**Important:** as Etherlink doesn't support EIP-1559 for the moment, we have to add the `--legacy` at the end of the commands.

Then, you can verify the contract you just deployed with the command:
```bash
forge verify-contract --etherscan-api-key YOUCANCOPYME0000000000000000000000 --verifier-url <explorer_api_url> <contract_address> src/Counter.sol:Counter --watch
```

For the explorer api url, you need to take the eplorer url and add `/api` at the end (as Etherlink use Blockscout and this is how it works). For exemple, the Etherlink testnet is on the url `https://testnet-explorer.etherlink.com` so it means that the api url is `https://testnet-explorer.etherlink.com/api`.

### 2. Send transactions using Cast

To send transactions to the chain and test the counter you deployed, keep the address printed during the deployment above.

If you want to increment the counter, you will need to setup a wallet on cast:
```bash
cast wallet import <name_of_your_wallet> --private-key <your_private_key>
```

If you successfully created your wallet, you should see it appear with:
```bash
cast wallet list
```

**Tips:** you can delete it with:
```bash
rm -rf ~/.foundry/keystores/<name_of_your_wallet>
```

#### Value in the Counter

If you want to check the value in the counter before and/or after some transactions, you can run:
```bash
cast call --rpc-url <rpc_url> <contract_address> "number()(uint256)"
```

#### Increment

You can use cast to test your counter. If you want to use the increment, you can run:
```bash
cast send --account <name_of_your_wallet> --rpc-url <rpc_url> <contract_address> "increment()" --legacy
```

#### Set the number

If you want to use the setNumber, you can run the following command and choose the value:
```bash
cast send --account <name_of_your_wallet> --rpc-url <rpc_url> <contract_address> "setNumber(uint256)" <your_value> --legacy
```
