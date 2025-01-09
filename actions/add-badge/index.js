const fs = require('fs');
const core = require('@actions/core');
const path = require('path');

const outcome = core.getInput('outcome');

let badgeUrl;
if (outcome === 'success') {
  badgeUrl = 'https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg';
} else {
  badgeUrl = 'https://img.shields.io/badge/test-failure-red';
}

const badgeText = `![Cypress Test Result](${badgeUrl})`;

const readmePath = path.join(process.cwd(), 'README.md');

fs.readFile(readmePath, 'utf8', (err, data) => {
  if (err) {
    core.setFailed(`Error leyendo el archivo README.md: ${err.message}`);
    return;
  }

  const regex =/RESULTADOS DE LOS ÚLTIMOS TESTS/;
  if (regex.test(data)) {
    const updatedData = data.replace(regex, `RESULTADOS DE LOS ÚLTIMOS TESTS\n\n${badgeText}`);

    fs.writeFile(readmePath, updatedData, 'utf8', (writeErr) => {
      if (writeErr) {
        core.setFailed(`Error escribiendo el archivo README.md: ${writeErr.message}`);
      } else {
        core.info('El README.md se ha actualizado correctamente con el badge.');
      }
    });
  } else {
    core.setFailed('No se encontró la sección "RESULTADOS DE LOS ÚLTIMOS TESTS" en el README.md.');
  }
});
