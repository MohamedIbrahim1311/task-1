const allData = require("./task2Data");
const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "to add an item",
  handler: (x) => {
    allData.addPerson(x.id, x.fname, x.lname, x.age, x.city);
  },
});
yargs.command({
  command: "delete",
  describe: "to delete an item",
  handler: (x) => {
    allData.deletePerson(x.id);
  },
});
yargs.command({
  command: "read",
  describe: "data you read ",
  builder: {
    id: {
      describe: "id for read data",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    allData.readData(x.id);
  },
});
yargs.command({
  command: "list",
  describe: "data you show  ",
  handler: () => {
    allData.listData();
  },
});
yargs.parse();
