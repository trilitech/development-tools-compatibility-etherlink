import {
  loadFixture
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";


// Only local tests
describe("Counter", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployCounterFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return { counter, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should initiate the value to 0", async function () {
      const { counter } = await loadFixture(deployCounterFixture);

      expect(await counter.number()).to.equal(0);
    });
  });

  describe("Methods", function () {
    it("Should set the number to the right value", async function () {
      const { counter } = await loadFixture(deployCounterFixture);
      const theUniversalAnswer = 42;

      // set the number on the counter
      await counter.setNumber(theUniversalAnswer);
      expect(await counter.number()).to.be.equal(theUniversalAnswer);
    });
    it("Should increment the number by 1", async function () {
      const { counter } = await loadFixture(deployCounterFixture);
      const initalValue = await counter.number();

      // increase the value on the counter
      await counter.increment();
      expect(await counter.number()).to.be.equal(initalValue + 1n);
    });
  });
});
