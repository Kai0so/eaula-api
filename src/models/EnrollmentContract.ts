// src/models/EnrollmentContract.ts
import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface EnrollmentContractAttributes {
  id: number;
  enrollmentId: number;
  pdfUrl?: string;
  signedPdfUrl?: string;
  signatureData?: string;
  signedAt?: Date;
}

interface EnrollmentContractCreationAttributes extends Optional<EnrollmentContractAttributes, 'id'> {}

export class EnrollmentContract extends Model<EnrollmentContractAttributes, EnrollmentContractCreationAttributes> implements EnrollmentContractAttributes {
  public id!: number;
  public enrollmentId!: number;
  public pdfUrl?: string;
  public signedPdfUrl?: string;
  public signatureData?: string;
  public signedAt?: Date;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        enrollmentId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: 'enrollments', key: 'id' },
          field: 'enrollment_id',
        },
        pdfUrl: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'pdf_url',
        },
        signedPdfUrl: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'signed_pdf_url',
        },
        signatureData: {
          type: DataTypes.TEXT('long'),
          allowNull: true,
          field: 'signature_data',
        },
        signedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          field: 'signed_at',
        },
      },
      {
        sequelize,
        tableName: 'enrollment_contracts',
        timestamps: true,
        underscored: true,
      }
    );
  }

  public static associate(models: any) {
    this.belongsTo(models.Enrollment, { foreignKey: 'enrollmentId', as: 'enrollment' });
  }
}