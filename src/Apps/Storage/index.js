import registerReactApp from "../../Modules/registerReactApp";

const loadApp = () => {
    return import('storage/StorageApp')
};

export default registerReactApp('StorageApp', loadApp);
