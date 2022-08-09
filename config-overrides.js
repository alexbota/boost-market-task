const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
    addWebpackAlias({
        Assets: path.resolve(__dirname, 'src/assets/'),
        Common: path.resolve(__dirname, 'src/common/'),
        Components: path.resolve(__dirname, 'src/components/'),
        Containers: path.resolve(__dirname, 'src/containers/'),
        Hoc: path.resolve(__dirname, 'src/hoc/'),
        Routes: path.resolve(__dirname, 'src/routes/')
    })
);