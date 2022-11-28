const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
        'DELETE',
        'PUT'
    ],

    allowedHeaders: [
        'Content-Type',
        "Authorization"
    ],
};

module.exports = corsOpts;