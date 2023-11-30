const {check, body} = require('express-validator');

module.exports = [
    check('model')
        .notEmpty().withMessage('El modelo del producto es obligatorio'),   
    check('color')
        .notEmpty().withMessage('El color del producto es obligatorio'),    
    check('technicalSpecifications')
        .notEmpty().withMessage('Las especificaciones tecnicas del producto son obligatorio'),    
    check('brand')
        .notEmpty().withMessage('La marca es requerida'),
        check('section')
        .notEmpty().withMessage('La sección es requerida'),
    check('price')
        .notEmpty().withMessage('Debes indicar el precio').bail()
        .isDecimal().withMessage('El precio debe ser un número'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({
            min : 20,
            max : 800
        }).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
    body('images')
        .custom((value, {req}) => {
           if(req.files.length){
                return true
           }
           return false
        }).withMessage('No has subido ninguna imagen')
]