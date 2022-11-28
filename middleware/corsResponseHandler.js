const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Authorization',
    ],
};

module.exports = corsOpts;