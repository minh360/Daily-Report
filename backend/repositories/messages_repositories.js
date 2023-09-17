const Message = require('../models/messages')

class MessagesRepository {
    constructor(model) {
        this.model = model;
    }
    create(object) {
        const newMessage = {
            name: object.name,
            message: object.message,
            date: object.date
        };
        const message = new this.model(newMesage);

        return message.save();
    }
}
module.exports = new MessagesRepository(Message)