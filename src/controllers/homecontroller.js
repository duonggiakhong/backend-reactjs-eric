const connection = require('../config/database');
const { createUserName, getHome, userEdit, uploadUser, deleteUser } = require('../services/CRUDservices');

const getHomePage = async (req, res) => {
    let results = await getHome();
    return res.render('sample.ejs', { listDataUsers: results });
}

const postusername = (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    createUserName(email, name, city);
    res.redirect('/');
}

const getindex = (req, res) => {
    res.send('Hello World!', user)
}

const hendCreate = (req, res) => {
    res.render('userName.ejs');
}

//get user Id 
const hendEditName = async (req, res) => {
    const userId = req.params.id;
    let results = await userEdit(userId)
    let user = results && results.length > 0 ? results[0] : {}
    res.render('editName.ejs', { userEdit: user });
}

const hendUploadName = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.id

    await uploadUser(email, name, city, userId)
    res.redirect('/');
    // res.render('upload successfull')
}

//get delete id user name 
const getUserIdName = async (req, res) => {
    const userId = req.params.id;
    let results = await userEdit(userId)
    let user = results && results.length > 0 ? results[0] : {}
    res.render('delete.ejs', { userEdit: user });
}

const postDeleteName = async (req, res) => {
    let userId = req.body.id

    await deleteUser(userId)
    res.redirect('/');
}

module.exports = {
    getHomePage, getindex, postusername, hendCreate, hendEditName, hendUploadName, getUserIdName, postDeleteName
}