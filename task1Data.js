const fs = require("fs")

const addPerson = (fname, lname, age , city)=>{
    const allData = loadData()
    allData.push({
        fname,
        lname,
        age,
        city 
    })
    saveAllData(allData)
}
////////////////////////
const loadData = ()=>{
    try{
        const dataJson = fs.readFileSync('task1.json').toString()
        return JSON.parse(dataJson)
    }catch{
        return []
    }
}
///////////////////
const saveAllData = (allData)=>{
    const saveAllDataJson= JSON.stringify(allData)
    fs.writeFileSync('task1.json' , saveAllDataJson)
}

///////////////////
const readData = ()=>{
    const allData =  loadData()
    allData.forEach((obj) => {
        console.log(obj.fname , obj.lname , obj.age , obj.city);
    });
}
module.exports = {

    addPerson, 
    readData
}