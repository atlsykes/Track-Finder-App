const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define(
    "Track",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          is: ["(^d{5}$)|(^d{9}$)|(^d{5}-d{4}$)"],
        },
      },
      trackType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["standard", "non-standard"]],
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()"),
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()"),
        allowNull: false,
      },
    },
    {
      tableName: "tracks",
      timestamps: false,
    }
  );

  return Track;
};
