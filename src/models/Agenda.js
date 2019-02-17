const msql = require('mysql');

const AgendaSchema = new msql.Schema({
    title: {
        type: String,
        require: true,
    },
    descrition: {
        type: String,
        require: true,
    },
    dateStart: {
        type: Date,
        require: true,
    },
    dateEnd: {
        type: Date,
        require: true,
    },
    image: {
        type: String,
        require: false,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});
msql.model('Agenda', AgendaSchema);
