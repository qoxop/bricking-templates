# Bricking 微模块模板 — React 版

## 开发

运行微模块项目
```sh
yarn run dev
```

微模块运行所需的基础依赖包是在运行时提供的，这些依赖包无需参与构建，但是为了更好的开发体验，可以选择性在本地进行安装，以提供更好的类型提醒和校验。
```sh
yarn bricking install
# 提供一个可选列表，让你选择所需依赖包,
# 也可以手动指定包名，跳过交互过程
# yarn bricking install @types/react
```

## 构建
```sh
yarn run build
```
默认将构建产物输出到 `dist` 目录，其中 `package.json` 包含了当前微模块的项目的所有信息。
```sh
.
├── README.md
├── bootstrap-c7836486.js
├── bundle-bootstrapC7836486_f487d3b6.css
├── bundle-counter966b4f58_2610f5b9.css
├── counter-966b4f58.js
├── counter.d.ts
├── imgs
│   └── 222dbf77.svg
├── index.html
├── micro-react.zip
└── package.json
```

## 配置

[👉 bricking 配置文档](https://github.com/qoxop/bricking/blob/main/packages/bricking/README.md)

## FAQ

### 如何新增一个微模块导出

`bricking` 支持在一个项目中导出多个微模块，具体步骤如下:

1. 在 `bricking.ts` 文件中新增一个 entry 字段，指向对应的模块文件
  ```ts
  export default defineBricking({
      entry: {
          'counter': './src/counter/index.tsx',
          'todo': './src/todo/index.tsx' // new
      },
      //......
    }
  ```
2. 在 `tsconfig.json` 中配置模块别名，⚠️ 别名名称需要与  `bricking.ts` 中的保持一致 ⚠️

  ```json
    {
      "compilerOptions": {
        "paths": {
          "counter": ["./src/counter/index.tsx"],
          "todo": ["./src/todo/index.tsx"]
        }
      }
    }
  ```
3. 确保项目中对该模块的引用都是通过别名引用的
