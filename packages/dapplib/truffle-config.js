require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad inner arm broken tenant'; 
let testAccounts = [
"0x8548ffdf50b2c294f6a12f3e16d71400c874dceba6ba2f56e05755fb09ea4161",
"0xfb96647928c1dd4922131483f9c0127fa373612fd136c244f8d8ae9825b309a3",
"0xc4c233c2a6d62aed28b404a3e64f6504ebcc1bd4a8d7a44987477235169617fe",
"0x37dd2dc60ded0ab5b6f15fc7de2f7416dbd73e9fe2baecb3a6657c75ecd22024",
"0xd3b5c7c4d6621e8c1daa070743bcf6e7275cda4a59c0e2a16153cf92b442ef17",
"0x73b53c7b2998aecd4d8b6441a61a0443ef4d67ce5818f92e4be0c2dabb8458e1",
"0x9056af0cbb09e533efc308b95e438517f1291749b2fa4b30a0a02d3326b1ea5f",
"0xd90ca920cd863c111470f23cdd6c42b34aaf4b99e71063088d048c5ab2774575",
"0x58edccb0984dcdcb8401023990017452faf14b3ce8260a959f2eaf553978bbfb",
"0x708303293271e97bcfeb2d0f90a3809c3bd643e37edb4f5b26a46305055a8eb8"
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
