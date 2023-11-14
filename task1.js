const allData = require("./task1Data");
const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "to add an item",
  handler: (x) => {
    allData.addPerson(x.fname, x.lname, x.age, x.city);
  },
});
yargs.command({
  command: "read",
  describe: "data you need to read",
  handler: () => {
    allData.readData();
  },
});
yargs.parse();
