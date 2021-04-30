require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture struggle rice sadness coach include immense army gentle'; 
let testAccounts = [
"0x8dd5b4ff2c8d40f85786dc2ee6d1294c42f8a335e5cce3a03f3ff8206b4f9a98",
"0x9ea0f40b704173742325607177f8574d9dbe075b94dbda1349ad45ce718d9b4b",
"0x52aa25269b0d2daea62b4136a13472c6070cd6e2e552937161e49641eacbd8c0",
"0xfedc01ed0c3cc478236ce93ad7380a3b183e81fc3742c857fdbc1a962a5ffca9",
"0xb576c939d8dfdadaeedc7d272a52c13c1f3753baf58a2c8fd1d57dbec6caecd0",
"0xaf06be70debfe52bf57893e818d2e3a933f40f09d9947b6752ace7d9aa95f436",
"0xabf46455140c134f320e5235cf434b5c1e247314ebff1e7a176cf7f777957137",
"0xc1e40edc91e418ef1bfa054278e0eb7e5ff8ea0a3971fa8c4bf9c3211a15127f",
"0xc920d71d48e9d40c97beecde59f8609fdc688b079eaa6858833997d4bf00ddb6",
"0x6b0dd17a063889e52277823d323931b2edb0eb6391c178b4809329ed3b4dcb34"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
