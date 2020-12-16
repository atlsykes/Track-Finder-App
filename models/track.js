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
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isInt: true,
        },
      },
      trackType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["standard", "non-standard"]],
        },
      },
      details: {
        type: DataTypes.STRING,
        allowNull: false,
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
