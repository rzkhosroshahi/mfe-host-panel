import registerApp from "../../Modules/registerApp";

const ECC_REMOTE = process.env.ECC_REMOTE;

const config = {
    remoteUrl: ECC_REMOTE,
    scope: 'ecc',
    module: './EccApp',
};

export default registerApp('ecc', config);
