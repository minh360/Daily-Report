const axios = require('axios')
const bcryptjs = require('bcryptjs');
module.exports = {
    getUsername: async function getUsername (idUser) {
        return await axios.request({
            method: "GET",
            url: "https://vxmm.herokuapp.com/auth/" + idUser,
            headers: {
                'Authorization': 'token'
            }
        })
    },
    addNewAccount: function addNewAccount (username,password) {
        bcryptjs.hash(password, saltRounds, function(err, hash) {
            return await axios.request({
                method: "POST",
                url: "https://thuyettrinh.herokuapp.com/auth/sign_up",
                headers: {
                    'Authorization': 'token'
                },
                data: {
                    username: username,
                    password: hash
                }
            })
        });
    },
    checkExist: async function checkExist (username,passwordEnter) {
        if (passwordEnter){

        }
        bcryptjs.compare(obj.passwordEnter, obj.passwordData, function(err, result) {
            return await axios.request({
                method: "POST",
                url: "https://vxmm.herokuapp.com/auth/sign_up/check",
                headers: {
                    'Authorization': 'token'
                },
                data: {username: username}
            })
        })
        
    },
}