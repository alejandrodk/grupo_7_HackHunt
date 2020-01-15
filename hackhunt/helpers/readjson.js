const fs = require('fs');
const cmp_path = 'data/empresas.json';


function getAllCompanies()
{
    let cmp_file = fs.readFileSync(cmp_path, {encoding:'utf-8'});
    let cmp_json = {ruta:'',
                    file:[]
                    };
    cmp_json.ruta = cmp_path;
    if(cmp_file != '')
    {
        cmp_json.file = JSON.parse(cmp_file);
        return cmp_json;
    }
    
    return cmp_json;
}

function getNewId(array)
{
    let newId = 0;
    if(array == '')
    {
        return 1;
    }
    if(array.cmp_id != undefined){ 
    newId = array.pop();
    return newId.cmp_id +1;
    }
    if(array.user_id != undefined){ 
    newId = array.pop();
        return newId.user_id +1;
    }
    return "Error";
}

function writeFile(newFile, db)
{
    db.file.push(newFile);
    fs.writeFileSync(db.ruta,JSON.stringify(db.file));
}

module.exports = {getAllCompanies,getNewId, writeFile}