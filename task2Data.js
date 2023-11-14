const fs = require("fs");
const addPerson = (id, fname, lname, age, city) => {
  const allData = loadData();
  const duplicatedData = allData.filter((obj) => {
    return obj.id === id;
  });
  if (duplicatedData.length == 0) {
    allData.push({
      id,
      fname,
      lname,
      age,
      city,
    });
  } else {
    console.log("this is a Duplicated id");
  }
  saveAllData(allData);
};
//////////////////////////////////////////////////////
const loadData = () => {
  try {
    const dataJson = fs.readFileSync("task2.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};
///////////////////////////////////////////////////////
const saveAllData = (allData) => {
  const saveAllDataJson = JSON.stringify(allData);
  fs.writeFileSync("task2.json", saveAllDataJson);
};
/////////////////////////////////////////
const deletePerson = (id) => {
  const allData = loadData();
  const dataToKeep = allData.filter((obj) => {
    return obj.id !== id;
  });
  saveAllData(dataToKeep);
};
////////////////////////////////////////////////
const readData = (id) => {
  const allData = loadData();
  const DataFounded = allData.find((obj) => {
    return obj.id == id;
  });
  if (DataFounded) {
    console.log(DataFounded.id);
    console.log(
      DataFounded.fname,
      DataFounded.lname,
      DataFounded.age,
      DataFounded.city
    );
  } else {
    console.log("This id does not exist");
  }
};
/////////////////////////////////////////////////////////
const listData = (id) => {
  const allData = loadData();
  allData.forEach((obj) => {
    console.log(obj.fname, obj.lname, obj.age, obj.city);
  });
};

module.exports = {
  addPerson,
  deletePerson,
  readData,
  listData,
};
