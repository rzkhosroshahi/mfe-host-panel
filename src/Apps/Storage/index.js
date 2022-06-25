import registerApp from "../../Modules/registerApp";

const STORAGE_REMOTE = process.env.STORAGE_REMOTE;

const config = {
    remoteUrl: STORAGE_REMOTE,
    scope: 'storage',
    module: './StorageApp',
};

export default registerApp('StorageApp', config, 'reactApp');
