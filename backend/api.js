const axios = require('axios')
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
    addNewAccount: async function addNewAccount (username,password) {
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
    },
    checkExist: async function checkExist (username,passwordEnter) {
            return await axios.request({
                method: "POST",
                url: "https://vxmm.herokuapp.com/auth/sign_up/check",
                headers: {
                    'Authorization': 'token'
                },
                data: {username: username}
            })
        }
}