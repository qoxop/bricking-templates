function readPackage(pkg, context) {
  if (pkg.dependencies.typescript) {
    context.log('change typescript version~')
    pkg.dependencies.typescript = '4.8.2';
  }
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}