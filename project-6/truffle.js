var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "spirit supply whale amount human item harsh scare congress discover talent hamster";

module.exports = {
  networks: {
    development: {
		host: "127.0.0.1",
		port: 8545,
		network_id: "*" // Match any network id
    },
    rinkeby: {
		provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/f2b842b1f06745c8b1c7285167047e5d"),
		network_id: 4,
		from: "0x27d8d15cbc94527cadf5ec14b69519ae23288b95",
		gas: 4612388
    }
  },
  compilers: {
		solc: {
			version: "0.5.2"
		}
	}
};
