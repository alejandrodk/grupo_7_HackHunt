const fs = require('fs');
const cmp_path = 'data/empresas.json';
const anu_path = 'data/anuncios.json';
function getCompanyById(id)
{

    let cmp = getAllCompanies().file.filter(item => item.cmp_id == id);
    if(cmp == ''){
        return "empresa no encontrada"
    }
    else
    {
        return cmp[0];
    }
}

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

function getAllUsers()
{
    let user_file = fs.readFileSync(user_path, {encoding:'utf-8'});
    let user_json = {ruta:'',
                    file:[]
                    };
    user_json.ruta = user_path;
    if(user_file != '')
    {
        user_json.file = JSON.parse(user_file);
        return user_json;
    }
    
    return user_json;
}

function getNewId(array)
{
    let newId = 0;
    if(array.file == '')
    {
        return 1;
    }
    if(array.ruta == 'data/empresas.json'){ 
    newId = array.file[array.file.length -1];
    return newId.cmp_id +1;
    }
    if(array.ruta == 'data/usuarios.json'){ 
    newId = array.file[array.file.length -1];
        return newId.user_id +1;
    }
    if(array.ruta == 'data/anuncios.json'){ 
        newId = array.file[array.file.length -1];
            return newId.anu_id +1;
        }
    return "Error";
}

function writeFile(newFile, db)
{
    db.file.push(newFile);
    fs.writeFileSync(db.ruta,JSON.stringify(db.file));
}

function getAllAnuncios()
{
    let anu_file = fs.readFileSync(anu_path,'utf-8');
    let anuncios = {file:[],
                    path: anu_path};
    if(anu_file != '')
    {
        anuncios.file = json.parse(anu_file);
        return anuncios;
    }
    return anuncios;
}


module.exports = {getAllCompanies,getNewId, writeFile,getCompanyById, getAllAnuncios}
