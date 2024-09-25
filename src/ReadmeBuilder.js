const fs = require('fs');

const packageFile = fs.readFileSync('package.json');
const configs = JSON.stringify(JSON.parse(packageFile.toString()).contributes.configurationDefaults, null, 2)
const readmeTemplate = fs.readFileSync('src/README.template.md');
const readme = readmeTemplate.toString().replace("${configs}", configs);

const out = fs.createWriteStream('README.md');
out.write(readme);
out.end();
