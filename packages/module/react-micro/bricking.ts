import { defineBricking } from 'bricking';

const { name } = require('./package.json');
const isProdMode = process.env.NODE_ENV === 'production';
const publicPath = isProdMode ? `${process.env.CDN_HOST}/module/${name}/` : '`http://localhost:3000/';

export default defineBricking({
    entry: {
        'counter': './src/counter/index.tsx'
    },
    doPack: true,
    output: "./dist",
    publicPath,
    browseEntry: 'src/bootstrap.tsx',
    style: {
        less: {},
    },
    assets: {
        include: [/\.png$/, /\.svg$/],
        limit: 10,
        filename: 'imgs/[hash][extname]'
    },
    /**
     * 基座包
     */
    basePackage: 'https://files.qoxop.run/packages/react-base/1.0.3/package.json'
})