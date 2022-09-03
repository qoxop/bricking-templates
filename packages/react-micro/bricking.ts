import { defineBricking } from 'bricking';

const { version, name } = require('./package.json');
const isProdMode = process.env.NODE_ENV === 'production';
const publicPath = isProdMode ? `https://your-cdn-host/modules/${name}/${version}/` : '`http://localhost:3000/';

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
    basePackage: 'https://files.qoxop.run/packages/base-react/1.0.2/package.json'
})