import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Admin/navbar/navbar.component';
import { FooterComponent } from './Admin/footer/footer.component';
import { HomeComponent } from './Admin/home/home.component';
import { CoursesComponent } from './Admin/courses/courses.component';
import { CourseInfoComponent } from './Admin/course-info/course-info.component';
import { ProfileComponent } from './Admin/profile/profile.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { UsersComponent } from './Admin/users/users.component';
import { UserCoursesComponent } from './Admin/user-courses/user-courses.component';
import { StudentSheetComponent } from './Admin/student-sheet/student-sheet.component';
import { AddCourseGradeComponent } from './Admin/add-course-grade/add-course-grade.component';
import { AddStudentGradeComponent } from './Admin/add-student-grade/add-student-grade.component';
import { AddCourseComponent } from './Admin/add-course/add-course.component';
import { StudentsGradeComponent } from './Admin/students-grade/students-grade.component';
import { UpdateStudentGradeComponent } from './Admin/update-student-grade/update-student-grade.component';
import { UpdateCourseComponent } from './Admin/update-course/update-course.component';
import { DeleteCourseComponent } from './Admin/delete-course/delete-course.component';
import { AddUserCourseComponent } from './Admin/add-user-course/add-user-course.component';
import { DeleteUserCourseComponent } from './Admin/delete-user-course/delete-user-course.component';
import { DeleteUserComponent } from './Admin/delete-user/delete-user.component';
import { UpdateUserComponent } from './Admin/update-user/update-user.component';
import { DeleteCourseGradeComponent } from './Admin/delete-course-grade/delete-course-grade.component';
import { UserProfileComponent } from './Admin/user-profile/user-profile.component';





import { NavbarComponents } from './Student/navbar/navbar.component';
import { FooterComponents } from './Student/footer/footer.component';
import { HomeComponents } from './Student/home/home.component';
import { CoursesComponents } from './Student/courses/courses.component';
import { ProfileComponents } from './Student/profile/profile.component';
import { AttendanceComponent } from './Student/attendance/attendance.component';
import { NotificationsComponent } from './Student/notifications/notifications.component';
import { CoursesSingleComponent } from './Student/courses-single/courses-single.component';
import { CoursesInfoComponent } from './Student/courses-info/courses-info.component';
import { GradesComponent } from './Student/grades/grades.component';
import { AssignmentatComponent } from './Student/assignmentat/assignmentat.component';

import { AttendanceSheetStudentComponent } from './Student/attendance-sheet-student/attendance-sheet-student.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    CourseInfoComponent,
    ProfileComponent,
    AddUserComponent,
    UsersComponent,
    UserCoursesComponent,
    StudentSheetComponent,
    AddCourseGradeComponent,
    AddStudentGradeComponent,
    AddCourseComponent,
    StudentsGradeComponent,
    UpdateStudentGradeComponent,
    UpdateCourseComponent,
    DeleteCourseComponent,
    AddUserCourseComponent,
    DeleteUserCourseComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    DeleteCourseGradeComponent,
    UserProfileComponent,










    NavbarComponents,
    FooterComponents,
    HomeComponents,
    CoursesComponents,
    ProfileComponents,
    AttendanceComponent,
    NotificationsComponent,
    CoursesSingleComponent,
    CoursesInfoComponent,
    GradesComponent,
    AssignmentatComponent,
    AttendanceSheetStudentComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },

      { path: 'profile', component: ProfileComponent },


      { path: 'courses', component: CoursesComponent },

      { path: 'courses/add-course', component: AddCourseComponent },

      { path: 'courses/update-course', component: UpdateCourseComponent },

      { path: 'courses/delete-course', component: DeleteCourseComponent },

      { path: 'course/info', component: CourseInfoComponent },

      { path: 'course/info/student-sheet', component: StudentSheetComponent },

      { path: 'course/info/add-course-grade', component: AddCourseGradeComponent },

      { path: 'course/info/delete-course-grade', component: DeleteCourseGradeComponent },

      { path: 'course/info/students-grades', component: StudentsGradeComponent },

      { path: 'course/info/add-student-grade', component: AddStudentGradeComponent },

      { path: 'course/info/update-student-grade', component: UpdateStudentGradeComponent },


      { path: 'users', component: UsersComponent },

      { path: 'user/courses', component: UserCoursesComponent },

      { path: 'user/add-user', component: AddUserComponent },

      { path: 'user/update-user', component: UpdateUserComponent },

      { path: 'user/delete-user', component: DeleteUserComponent },

      { path: 'user/add-delete-course', component: AddUserCourseComponent },

      { path: 'user/profile', component: UserProfileComponent },


// ------------------------------------------------Student-----------------------------

      { path: 'student', component: HomeComponents },
      { path: 'student/courses', component: CoursesComponents },
      { path: 'student/profile', component: ProfileComponents },
      { path: 'student/attendance', component: AttendanceComponent },
      { path: 'student/notifications', component: NotificationsComponent },
      { path: 'student/courses-single', component: CoursesSingleComponent },
      { path: 'student/courses-info', component: CoursesInfoComponent },
      { path: 'student/grades', component: GradesComponent },
      { path: 'student/assignmentat', component: AssignmentatComponent },
      { path: 'student/AttendanceSheetStudentComponent', component: AttendanceSheetStudentComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
