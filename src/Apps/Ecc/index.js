import registerApp from "../../Modules/registerApp";

const ECC_REMOTE = process.env.ECC_REMOTE;

console.log('process.env.ECC_REMOTE >>', process.env.ECC_REMOTE);
console.log('process.env.ASSET_PATH >>', process.env.ASSET_PATH);
const config = {
    remoteUrl: ECC_REMOTE,
    scope: 'ecc',
    module: './EccApp',
};

export default registerApp('ecc', config);
