const { readJSON, writeJSON } = require("../../data")

module.exports = (req,res) => {
    const users = readJSON('user.json');
    const {name, surname, birthday, about} = req.body
    const usersUpdated = users.map(user => {
        if(user.id === req.session.userLogin.id){
            return {
                ...user,
                name: name.trim(),
                surname: surname.trim(),
                birthday,
                about : about.trim()
            }
        }
        return user
    })

    writeJSON(usersUpdated, 'user.json');
    return res.redirect('/')
} 

  /*Valores obtenidos desde el req.body
  nombre
  apellido
  birthday
  about  
*/

//const  {nombre, apellido, birthday, about} = req.body;

  // codigo para actualizar los datos del usuario en sesión
  //const user = users.find(user => user.id === req.session.userLogin.id)
 
//}
