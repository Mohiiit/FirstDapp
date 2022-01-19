const assert = require('assert');
const anchor = require('@project-serum/anchor');
const { SystemProgram } = anchor.web3;

describe('mycalculatordapp', () => {
  const provider = anchor.Provider.local();
  anchor.setProvider(provider);

  const calculator = anchor.web3.Keypair.generate();
  const program = anchor.workspace.Mycalculatordapp;

  it('Creates a calculator', async () => {

  });

  it("Adds two numbers", async function() {

  });

  it('Multiplies two numbers', async function() {

  })

  it('Subtracts two numbers', async function() {

  });

  it('Divides two numbers', async function() {

  });
});