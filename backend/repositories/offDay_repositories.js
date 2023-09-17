const OffDay = require('../models/offDay')

class OffDayRepository {
    constructor(model) {
        this.model = model;
    }
    create(object){
        const newOffDay = {
            name: object.name,
            date: object.date,
            note: object.note,
        };
        const offDay = new this.model(newOffDay);

        return offDay.save();
    }
    getOffDay(name) {
        return this.model.find({name: name})
    }
    changeName (id,name){
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $inc: { name: name} });
    }
    changeDate (id,date){
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $inc: { date: date} });
    }
    changeNote (id,note){
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $inc: { note: note} });
    }
}
module.exports = new OffDayRepository(OffDay)