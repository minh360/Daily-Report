const Report = require('../models/reports')

class ReportRepository {
    constructor(model) {
        this.model = model;
    }
    create(object) {
        const newReport = {
            name: object.name,
            date: object.date,
            card: object.card,
            person: object.person,
            totalBill: object.totalBill
        };
        const report = new this.model(newReport);

        return report.save();
    }
    getReport(name) {
        return this.model.find({name: name})
    }
    changeName(id, name) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $inc: { name: name } });
    }
    changeCard(id, card) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $inc: { offDay: offDay } });
    }
    changeNote(id, note) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $inc: { note: note } });
    }
}
module.exports = new ReportRepository(Report)