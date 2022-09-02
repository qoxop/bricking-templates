import { defineBricking } from 'bricking';

const { version, name } = require('./package.json');
const isProdMode = process.env.NODE_ENV === 'production';
const publicPath = isProdMode ? `https://files.qoxop.run/packages/${name}/${version}/` : '/';

export default defineBricking({
    entry: {
        "counter": 'src/counter/index.tsx'
    },
    doPack: true,
    output: "./dist",
    publicPath: isProdMode ? publicPath : undefined,
    browseEntry: 'src/bootstrap.tsx',
    style: {
        less: {},
    },
    assets: {
        include: [/\.png$/, /\.svg$/],
        exclude: [],
        limit: 10,
        filename: 'imgs/[hash][extname]'
    },
    basePackage: 'https://files.qoxop.run/packages/base-react/1.0.2/package.json'
})