// src/models/PreEnrollment.ts
import { Model, DataTypes, Sequelize, Optional } from 'sequelize';
import { Enrollment } from './enrollment.model';

interface PreEnrollmentAttributes {
  id: number;
  cpf: string;
  name: string;
  email: string;
  phone: string;
  courseId: number;
  selectedPlan: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
}

interface PreEnrollmentCreationAttributes extends Optional<PreEnrollmentAttributes, 'id'> {}

export class PreEnrollment extends Model<PreEnrollmentAttributes, PreEnrollmentCreationAttributes> implements PreEnrollmentAttributes {
  public id!: number;
  public cpf!: string;
  public name!: string;
  public email!: string;
  public phone!: string;
  public courseId!: number;
  public selectedPlan!: string;
  public status!: 'pending' | 'processing' | 'completed' | 'cancelled';

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        cpf: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        courseId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'course_id',
          comment: 'References a course in the pre-existing courses table',
        },
        selectedPlan: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'selected_plan',
        },
        status: {
          type: DataTypes.ENUM('pending', 'processing', 'completed', 'cancelled'),
          defaultValue: 'pending',
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'pre_enrollments',
        underscored: true,
      }
    );
  }

  public static associate(models: any) {
    this.hasOne(models.Enrollment, {
      foreignKey: 'preEnrollmentId',
      as: 'enrollment',
    });
  }
}