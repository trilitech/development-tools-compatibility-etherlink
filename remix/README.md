# Remix Counter Project

This folder contains this README which can be used as a tutorial if you do not know the Remix IDE and a simple contract solidity `Counter.sol`.

If you know how Remix works, you can copy paste the Counter contract from here to it and then deploy it on Etherlink to test it.

## MetaMask

If you want to deploy on Etherlink with Remix, the first thing you need is the MetaMask wallet. You can install it by following the [official guide](https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask).

Then you need to add the networks to your wallet. For Etherlink, you can follow the [documentation](https://docs.etherlink.com/get-started/connect-your-wallet-to-etherlink
). For the Ninghtly version, you can go [here](https://etherlink-nightly.tzalpha.net/) and either click on `Connect` or add the network manually.

## Remix

Here is a small step by step guide if you don't know how to use Remix:
1. Go on Remix: https://remix.ethereum.org.
2. Copy paste the Counter.sol file from here to Remix.
3. On the left devtools panel, click on the `Solidity compiler` then click on the button `Compile` to compile the Counter.
4. On the left devtools panel, click on the `Deploy & run transaction`. You now have differents choices:
    - You can deploy it locally by clicking on the button `Deploy`.
    - If you want to directly deploy and test it with Etherlink, you need to click on the drop list at the top of the page under `Environment` and select the first one: `Injected Provider - MetaMask`. **Select the good network on MetaMask before clicking on deploy**.Then click on the `Deploy` button and accept the transaction from the MetaMask pop-up.
5. After the deployment, whether you chose to deploy it locally or directly on chain with your MetaMask, you can interact with it at the bottom left part under `Deployed Contracts`. Remember that if you injected MetaMask, each interactions will ask you to send a transaction.