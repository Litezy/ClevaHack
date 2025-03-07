module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        firstname: { type: DataTypes.STRING, alowNull: false },
        lastname: { type: DataTypes.STRING, alowNull: false },
        email: { type: DataTypes.STRING, alowNull: false },
        phone: { type: DataTypes.STRING, alowNull: true },
        gender: { type: DataTypes.STRING, alowNull: false },
        password: { type: DataTypes.STRING, alowNull: false },
        role: { type: DataTypes.STRING, alowNull: false, defaultValue: 'student' },
    })
}