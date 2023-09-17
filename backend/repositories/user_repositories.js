const User = require('../models/users')

class UserRepository {
    constructor(model) {
        this.model = model;
    }
    create(object){
        const newUser = {
            username: object.username,
            password: object.password,
            name: object.name,
            role: "",
            offDay: "",
            note: [],
            status: false
        };
        const user = new this.model(newUser);

        return user.save();
    }
    getUser(id) {
        return this.model.findById(id)
    }
    checkExist(username){
        return this.model.findOne({username: username})
    }
    changeRole (id,role){
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $inc: { role: role} });
    }
    changeOffDay (id,offDay){
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $inc: { offDay: offDay} });
    }
    changeNote (id,note){
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $inc: { note: note} });
    }
    changeStatus (id,status){
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $inc: { status: status} });
    }
}
module.exports = new UserRepository(User)