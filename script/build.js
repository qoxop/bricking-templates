const path = require('path');
const fs = require('fs-extra');
const { spawnSync } = require('child_process');

require('dotenv').config();
const BaseDistPath = path.join(process.cwd(), './dist/base');
const BasePackagesPath = path.join(process.cwd(), './packages/base');
const ModuleDistPath = path.join(process.cwd(), './dist/module');
const ModulePackagesPath = path.join(process.cwd(), './packages/module');

fs.emptyDirSync(BaseDistPath);
fs.emptyDirSync(ModuleDistPath);

fs.readdirSync(BasePackagesPath, 'utf-8').map(dir =>path.join(BasePackagesPath, dir)).forEach(packagePath =>  {
  try {
    const { name } = require(path.join(packagePath, 'package.json'));
    spawnSync('pnpm', ['run', 'build'], { stdio: 'inherit', cwd: packagePath });
    fs.move(
      path.join(packagePath, 'dist/packages'),
      path.join(BaseDistPath, name)
    );
  } catch (error) {
    console.warn('package.json no exists ~');
  }
})

fs.readdirSync(ModulePackagesPath, 'utf-8').map(dir => path.join(ModulePackagesPath, dir)).forEach(packagePath => {
  console.log(packagePath)
  try {
    const { name } = require(path.join(packagePath, 'package.json'));
    spawnSync('pnpm', ['run', 'build'], { stdio: 'inherit', cwd: packagePath });
    fs.move(
      path.join(packagePath, 'dist'),
      path.join(ModuleDistPath, name)
    );
  } catch (error) {
    console.warn('package.json no exists ~');
  }
})