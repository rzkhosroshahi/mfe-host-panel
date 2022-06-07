import registerApp from "../../Modules/registerApp";

const loadApp = () => {
    return import('ecc/EccApp');
};

export default registerApp('ecc', loadApp);
