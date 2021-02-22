require("dotenv").config();

module.exports = {
    url: process.env.DATABASE_URL,
    config: {
        dialect: "mysql",
        define: {
            timestamp: true,
            underscored: true
        },
    },
};

/*module.exports = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_BD,
    dialect: "mysql",
    define: {
        timestamp: true,
        underscored: true
    }
};*/