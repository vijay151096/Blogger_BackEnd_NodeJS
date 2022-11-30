const corsOpts = {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: [
        'GET',
        'POST',
        'DELETE',
        'PUT'
    ],

    allowedHeaders: [
        'Content-Type',
        "Authorization",
        "set-coookie"
    ],
};

module.exports = corsOpts;