import registerApp from "../../Modules/registerApp";

const loadApp = () => {
    return import('storage/StorageApp')
};

export default registerApp('StorageApp', loadApp, 'reactApp');
