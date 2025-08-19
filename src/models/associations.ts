import { User } from './user.model';
import { Student } from './student.model';
import { Category } from './category.model';
import { Course } from './course.model';
import { CourseInstance } from './courseInstance.model';
import { Enrollment } from './enrollment.model';
import { Payment } from './payment.model';
import { Grade } from './grade.model';
import { Material } from './material.model';
import { CourseSubject } from './courseSubject.model';
import { InstitutionalCourse } from './institutionalCourse.model';


// Category ↔ Course
Category.hasMany(Course, { foreignKey: 'category_id' });
Course.belongsTo(Category, { foreignKey: 'category_id' });

// Course ↔ CourseInstance
Course.hasMany(CourseInstance, { foreignKey: 'course_id' });
CourseInstance.belongsTo(Course, { foreignKey: 'course_id' });

// Course ↔ Material
Course.hasMany(Material, { foreignKey: 'course_id' });
Material.belongsTo(Course, { foreignKey: 'course_id' });

// CourseInstance ↔ Enrollment
CourseInstance.hasMany(Enrollment, { foreignKey: 'course_instance_id' });
Enrollment.belongsTo(CourseInstance, { foreignKey: 'course_instance_id' });

// Student ↔ Enrollment
Student.hasMany(Enrollment, { foreignKey: 'student_id' });
Enrollment.belongsTo(Student, { foreignKey: 'student_id' });

// Enrollment ↔ Payment
Enrollment.hasMany(Payment, { foreignKey: 'enrollment_id' });
Payment.belongsTo(Enrollment, { foreignKey: 'enrollment_id' });

// Enrollment ↔ Grade
Enrollment.hasMany(Grade, { foreignKey: 'enrollment_id' });
Grade.belongsTo(Enrollment, { foreignKey: 'enrollment_id' });

// Course ↔ CourseSubject
/* Course.hasMany(InstitutionalCourse, { foreignKey: 'api_id' });
InstitutionalCourse.belongsTo(Course, { foreignKey: 'api_id' }); */

// Course ↔ CourseSubject
InstitutionalCourse.hasMany(CourseSubject, { foreignKey: 'course_id' });
CourseSubject.belongsTo(InstitutionalCourse, { foreignKey: 'course_id' });

// (Opcional) User relations → audit trail / createdBy etc. não implementado ainda

export const associateAll = () => {
  // Só executa todas as associações acima
};
