const fs = require('fs');
const cmp_path = 'data/empresas.json';
const anu_path = 'data/anuncios.json';
const user_path = 'data/usuarios.json';
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

function getUserById(id)
{

    let user = getAllUsers().file.filter(item => item.user_id == id);
    if(user == ''){
        return "usuario no encontrado"
    }
    else
    {
        return user[0];
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

function modifyUser(id)
{
    let users = getAllUsers();
    let user = {ruta: users.ruta,
    file:[]}
    user.file = users.file.filter(item => item.user_id == id)[0];
    return user;
}

function modifyCompany(id)
{
    let empresas = getAllCompanies();
    let empresa = {ruta: empresas.ruta,
    file:[]}
    empresa.file = empresas.file.filter(item => item.cmp_id == id)[0];
    return empresa;
}

function saveUpdates(array)
{
    if(array.ruta == 'data/usuarios.json'){

        let allUsers = getAllUsers().file;
         allUsers = allUsers.map(item =>
            {
                if(array.file.user_id == item.user_id)
                {
                   item ={...array.file} 
                }
                return item;
            });
            
        fs.writeFileSync(array.ruta, JSON.stringify(allUsers));
    }

    if(array.ruta == 'data/empresas.json')
    {
        let allCompanies = getAllCompanies().file;
         allCompanies = allCompanies.map(item =>
            {
                if(array.file.cmp_id == item.cmp_id)
                {
                    item= {
                        ...array.file
                    }
                }
                return item;
            });
        fs.writeFileSync(array.path, json.stringify(allCompanies));
    }
    if(array.ruta == 'data/anuncios.json')
    {
        let allAnuncios = getAllAnuncios().file;
         allAnuncios = allAnuncios.map(item =>
            {
                if(array.file.anu_id == item.anu_id)
                {
                    item= {
                        ...array.file
                    }
                }
                return item;
            });
        fs.writeFileSync(array.path, json.stringify(allAnuncios));
    }
    
}



module.exports = {getAllCompanies,getNewId, writeFile,getCompanyById, getAllAnuncios, getAllUsers, modifyUser,saveUpdates,getUserById,modifyCompany}
