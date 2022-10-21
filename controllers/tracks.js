const {tracksModel} = require('../models')

/**  // obtener lista base de datos
 * 
 * @param {*} req 
 * @param {*} res 
 */


const getItems = async (req, res) => {
const data = await tracksModel.find({});

res.send({data})
};
/** // obtener un detalle
 * 
 * @param {*} req 
 * @param {*} res 
 */ 

const getItem = (req, res) => {};

/** //  insertar un registro
 * 
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req, res) => {
    const {body} = req
    console.log(body);
    const data = await tracksModel.create(body)

    res.send({data})

};

/**  // actualizar un registro
 * 
 * @param {*} req 
 * @param {*} res 
 */

const updateItems = (req, res) => {};

/**  // eliminar un registro
 * 
 * @param {*} req 
 * @param {*} res 
 */


const deleteItems = (req, res) => {};



module.exports = { getItems, getItem, createItem, updateItems, deleteItems};


// {
//     "name": "",      
//     "album": "",
//     "cover" : "",
//     "artist": {
//       "name":"",
//     "nickname":"",
//     "nationality":""
//     },
//     "duration": {
//     "start":1,
//     "end": 0
//      },

//     "mediaId" : ""
// }