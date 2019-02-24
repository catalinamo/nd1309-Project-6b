module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "rinkeby.infura.io/v3/",
      port: 7545,
      network_id: "*" // Match any network id
    }

  },
  compilers: {
      solc: {
          version: "0.5.2"
      }
  }
};
