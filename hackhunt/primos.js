const Sequelize = require('sequelize');
const sequelize = require('./database/models');


var primo = [];
var contador = 0;
for(var i = 1; i<=100; i++)
{
    for(var j = 1; j<=i;j++)
    {
        if(i%j==0)
        {
            contador = contador + 1;
        }
    }
    if(contador == 2)
    {
        primo.push(i);
    }
    contador = 0;
}

sequelize.sequelize.query("Select * from empresa")
.then(res =>{console.log(res)});