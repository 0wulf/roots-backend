const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function deploy() {
  const { stdout: output1 } = await exec("yarn install");
  console.log("Installing dependencies...");
  console.log(output1);

  const { stdout: output2 } = await exec("yarn db:migrate:undo:all");
  console.log("Undo migrating database...");
  console.log(output2);

  const { stdout: output3 } = await exec("yarn db:migrate");
  console.log("Migrating database...");
  console.log(output3);

  const { stdout: output4 } = await exec("yarn db:seed:undo:all");
  console.log("Unseeding database...");
  console.log(output4);

  const { stdout: output5 } = await exec("yarn db:seed");
  console.log("Seeding database...");
  console.log(output5);
}

deploy();
