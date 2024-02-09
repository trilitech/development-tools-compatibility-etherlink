# MetaMask tool

This is a basic step-by-step tutorial to test the compatibility between MetaMask and Etherlink network. Follow the steps bellow to install and test it.

## 1. Setup MetaMask

If you want to use MetaMask with Etherlink, the first thing you need is the MetaMask wallet. You can install it by following the [official guide](https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask).

Then you need to add the networks to your wallet. For Etherlink, you can follow the [documentation](https://docs.etherlink.com/get-started/connect-your-wallet-to-etherlink
). For the Ninghtly version, you can go [here](https://etherlink-nightly.tzalpha.net/) and either click on `Connect` or add the network manually.

## 2. Tests simple transactions

The first test you can do is to send yourself some funds:
1. Open your MetaMask
2. Select the Etherlink network you want to test
3. Click on ``Send`` under your balance
4. You can either copy/paste your address or select it under `Your accounts`
5. Choose an amount and click on `Next` then `Confirm`

## 3. Interacting with dApp

You can try to interact with a dApp connected to Etherlink that use MetaMask. If you don't know any, I recommend you to use the [official explorer](https://testnet-explorer.etherlink.com/) for Etherlink.

If you already deployed a counter from the other previous scenarios, you can go and interact with them following the link: https://testnet-explorer.etherlink.com/address/YOUR-CONTRACT-ADDRESS?tab=write_contract

Remember to modify the link above with your own contract address if you have one. Otherwise you can use [this one](https://testnet-explorer.etherlink.com/address/0x2940F96AA07445Fee8D5308F000ae86f30E8cFe2?tab=write_contract).

Once you are on the explorer, you can connect your MetaMask to the app so you can interact with the counter directly:
1. Click on the `Connect wallet` button
2. Click on the `increment` drop down
3. Click on the `write` button and accept the transaction

## 4. Metamask handle failed transactions

Here, the goal is to test that Metamask handle correctly a transaction that will fail.

In order to have a failed transaction in Metamask, you can call the method `setIsMeReverting()` from the contract `RevertTransaction.sol` deployed on the explorer. If you don't want to deploy one, [here](https://testnet-explorer.etherlink.com/address/0xD8ac6B38fC96493053Bb61C5426994fE186e1e52?tab=write_contract) is one!

You need to do the same steps as for the point 3. above on this contract. The transaction will failed, then you can send to youtself some tokens to be sure that the transaction and Metamask are ok after a transaction is failed.