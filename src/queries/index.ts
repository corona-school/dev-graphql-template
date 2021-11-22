import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library. */
  Decimal: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BoolFieldUpdateOperationsInput = {
  readonly set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  readonly equals?: InputMaybe<Scalars['Boolean']>;
  readonly not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  readonly equals?: InputMaybe<Scalars['Boolean']>;
  readonly not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BytesNullableFilter = {
  readonly equals?: InputMaybe<Scalars['Byte']>;
  readonly not?: InputMaybe<NestedBytesNullableFilter>;
};

export type CertificateCreationInput = {
  readonly activities: Scalars['String'];
  readonly endDate: Scalars['Float'];
  readonly hoursPerWeek: Scalars['Float'];
  readonly hoursTotal: Scalars['Float'];
  readonly medium: Scalars['String'];
  readonly ongoingLessons: Scalars['Boolean'];
  readonly state: Scalars['String'];
  readonly subjects: Scalars['String'];
};

export type Concrete_Notification = {
  readonly __typename?: 'Concrete_notification';
  readonly context: Scalars['JSON'];
  readonly contextID?: Maybe<Scalars['String']>;
  readonly error?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly notificationID: Scalars['Int'];
  readonly sentAt: Scalars['DateTime'];
  readonly state: Scalars['Int'];
  readonly userId: Scalars['String'];
};

export type Concrete_NotificationOrderByInput = {
  readonly context?: InputMaybe<SortOrder>;
  readonly contextID?: InputMaybe<SortOrder>;
  readonly error?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly notificationID?: InputMaybe<SortOrder>;
  readonly sentAt?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
};

export enum Concrete_NotificationScalarFieldEnum {
  Context = 'context',
  ContextId = 'contextID',
  Error = 'error',
  Id = 'id',
  NotificationId = 'notificationID',
  SentAt = 'sentAt',
  State = 'state',
  UserId = 'userId'
}

export type Concrete_NotificationWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Concrete_NotificationWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Concrete_NotificationWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Concrete_NotificationWhereInput>>;
  readonly context?: InputMaybe<JsonFilter>;
  readonly contextID?: InputMaybe<StringNullableFilter>;
  readonly error?: InputMaybe<StringNullableFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly notificationID?: InputMaybe<IntFilter>;
  readonly sentAt?: InputMaybe<DateTimeFilter>;
  readonly state?: InputMaybe<IntFilter>;
  readonly userId?: InputMaybe<StringFilter>;
};

export type Concrete_NotificationWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['Int']>;
};

export type Course = {
  readonly __typename?: 'Course';
  readonly allowContact: Scalars['Boolean'];
  readonly category: Course_Category_Enum;
  readonly correspondentId?: Maybe<Scalars['Int']>;
  readonly courseState: Course_Coursestate_Enum;
  readonly createdAt: Scalars['DateTime'];
  readonly description: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly image?: Maybe<Scalars['String']>;
  readonly imageKey?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly outline: Scalars['String'];
  readonly publicRanking: Scalars['Int'];
  readonly screeningComment?: Maybe<Scalars['String']>;
  readonly subcourses: ReadonlyArray<Subcourse>;
  readonly updatedAt: Scalars['DateTime'];
};

export type CourseListRelationFilter = {
  readonly every?: InputMaybe<CourseWhereInput>;
  readonly none?: InputMaybe<CourseWhereInput>;
  readonly some?: InputMaybe<CourseWhereInput>;
};

export type CourseOrderByInput = {
  readonly allowContact?: InputMaybe<SortOrder>;
  readonly category?: InputMaybe<SortOrder>;
  readonly correspondentId?: InputMaybe<SortOrder>;
  readonly courseState?: InputMaybe<SortOrder>;
  readonly createdAt?: InputMaybe<SortOrder>;
  readonly description?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly imageKey?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly outline?: InputMaybe<SortOrder>;
  readonly publicRanking?: InputMaybe<SortOrder>;
  readonly screeningComment?: InputMaybe<SortOrder>;
  readonly updatedAt?: InputMaybe<SortOrder>;
};

export type CourseRelationFilter = {
  readonly is?: InputMaybe<CourseWhereInput>;
  readonly isNot?: InputMaybe<CourseWhereInput>;
};

export enum CourseScalarFieldEnum {
  AllowContact = 'allowContact',
  Category = 'category',
  CorrespondentId = 'correspondentId',
  CourseState = 'courseState',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  ImageKey = 'imageKey',
  Name = 'name',
  Outline = 'outline',
  PublicRanking = 'publicRanking',
  ScreeningComment = 'screeningComment',
  UpdatedAt = 'updatedAt'
}

export type CourseWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<CourseWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CourseWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CourseWhereInput>>;
  readonly allowContact?: InputMaybe<BoolFilter>;
  readonly category?: InputMaybe<Enumcourse_Category_EnumFilter>;
  readonly correspondentId?: InputMaybe<IntNullableFilter>;
  readonly courseState?: InputMaybe<Enumcourse_Coursestate_EnumFilter>;
  readonly course_guest?: InputMaybe<Course_GuestListRelationFilter>;
  readonly course_instructors_student?: InputMaybe<Course_Instructors_StudentListRelationFilter>;
  readonly course_tags_course_tag?: InputMaybe<Course_Tags_Course_TagListRelationFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly description?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly imageKey?: InputMaybe<StringNullableFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly outline?: InputMaybe<StringFilter>;
  readonly publicRanking?: InputMaybe<IntFilter>;
  readonly screeningComment?: InputMaybe<StringNullableFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly subcourse?: InputMaybe<SubcourseListRelationFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CourseWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['Int']>;
};

export type Course_Attendance_LogListRelationFilter = {
  readonly every?: InputMaybe<Course_Attendance_LogWhereInput>;
  readonly none?: InputMaybe<Course_Attendance_LogWhereInput>;
  readonly some?: InputMaybe<Course_Attendance_LogWhereInput>;
};

export type Course_Attendance_LogWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Course_Attendance_LogWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Course_Attendance_LogWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Course_Attendance_LogWhereInput>>;
  readonly attendedTime?: InputMaybe<IntNullableFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly ip?: InputMaybe<StringNullableFilter>;
  readonly lecture?: InputMaybe<LectureRelationFilter>;
  readonly lectureId?: InputMaybe<IntNullableFilter>;
  readonly pupil?: InputMaybe<PupilRelationFilter>;
  readonly pupilId?: InputMaybe<IntNullableFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Course_GuestListRelationFilter = {
  readonly every?: InputMaybe<Course_GuestWhereInput>;
  readonly none?: InputMaybe<Course_GuestWhereInput>;
  readonly some?: InputMaybe<Course_GuestWhereInput>;
};

export type Course_GuestWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Course_GuestWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Course_GuestWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Course_GuestWhereInput>>;
  readonly course?: InputMaybe<CourseRelationFilter>;
  readonly courseId?: InputMaybe<IntNullableFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstname?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly inviterId?: InputMaybe<IntNullableFilter>;
  readonly lastname?: InputMaybe<StringFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly token?: InputMaybe<StringFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Course_Instructors_StudentListRelationFilter = {
  readonly every?: InputMaybe<Course_Instructors_StudentWhereInput>;
  readonly none?: InputMaybe<Course_Instructors_StudentWhereInput>;
  readonly some?: InputMaybe<Course_Instructors_StudentWhereInput>;
};

export type Course_Instructors_StudentWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Course_Instructors_StudentWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Course_Instructors_StudentWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Course_Instructors_StudentWhereInput>>;
  readonly course?: InputMaybe<CourseRelationFilter>;
  readonly courseId?: InputMaybe<IntFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly studentId?: InputMaybe<IntFilter>;
};

export type Course_Participation_CertificateListRelationFilter = {
  readonly every?: InputMaybe<Course_Participation_CertificateWhereInput>;
  readonly none?: InputMaybe<Course_Participation_CertificateWhereInput>;
  readonly some?: InputMaybe<Course_Participation_CertificateWhereInput>;
};

export type Course_Participation_CertificateWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Course_Participation_CertificateWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Course_Participation_CertificateWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Course_Participation_CertificateWhereInput>>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly issuerId?: InputMaybe<IntNullableFilter>;
  readonly pupil?: InputMaybe<PupilRelationFilter>;
  readonly pupilId?: InputMaybe<IntNullableFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly subcourse?: InputMaybe<SubcourseRelationFilter>;
  readonly subcourseId?: InputMaybe<IntNullableFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Course_TagRelationFilter = {
  readonly is?: InputMaybe<Course_TagWhereInput>;
  readonly isNot?: InputMaybe<Course_TagWhereInput>;
};

export type Course_TagWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Course_TagWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Course_TagWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Course_TagWhereInput>>;
  readonly category?: InputMaybe<StringFilter>;
  readonly course_tags_course_tag?: InputMaybe<Course_Tags_Course_TagListRelationFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly identifier?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
};

export type Course_Tags_Course_TagListRelationFilter = {
  readonly every?: InputMaybe<Course_Tags_Course_TagWhereInput>;
  readonly none?: InputMaybe<Course_Tags_Course_TagWhereInput>;
  readonly some?: InputMaybe<Course_Tags_Course_TagWhereInput>;
};

export type Course_Tags_Course_TagWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Course_Tags_Course_TagWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Course_Tags_Course_TagWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Course_Tags_Course_TagWhereInput>>;
  readonly course?: InputMaybe<CourseRelationFilter>;
  readonly courseId?: InputMaybe<IntFilter>;
  readonly courseTagId?: InputMaybe<IntFilter>;
  readonly course_tag?: InputMaybe<Course_TagRelationFilter>;
};

export type DateTimeFilter = {
  readonly equals?: InputMaybe<Scalars['DateTime']>;
  readonly gt?: InputMaybe<Scalars['DateTime']>;
  readonly gte?: InputMaybe<Scalars['DateTime']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly lt?: InputMaybe<Scalars['DateTime']>;
  readonly lte?: InputMaybe<Scalars['DateTime']>;
  readonly not?: InputMaybe<NestedDateTimeFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  readonly equals?: InputMaybe<Scalars['DateTime']>;
  readonly gt?: InputMaybe<Scalars['DateTime']>;
  readonly gte?: InputMaybe<Scalars['DateTime']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly lt?: InputMaybe<Scalars['DateTime']>;
  readonly lte?: InputMaybe<Scalars['DateTime']>;
  readonly not?: InputMaybe<NestedDateTimeNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTime']>>;
};

export type DecimalFilter = {
  readonly equals?: InputMaybe<Scalars['Decimal']>;
  readonly gt?: InputMaybe<Scalars['Decimal']>;
  readonly gte?: InputMaybe<Scalars['Decimal']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Decimal']>>;
  readonly lt?: InputMaybe<Scalars['Decimal']>;
  readonly lte?: InputMaybe<Scalars['Decimal']>;
  readonly not?: InputMaybe<NestedDecimalFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Decimal']>>;
};

export type Enumcourse_Category_EnumFilter = {
  readonly equals?: InputMaybe<Course_Category_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Course_Category_Enum>>;
  readonly not?: InputMaybe<NestedEnumcourse_Category_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Course_Category_Enum>>;
};

export type Enumcourse_Coursestate_EnumFilter = {
  readonly equals?: InputMaybe<Course_Coursestate_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Course_Coursestate_Enum>>;
  readonly not?: InputMaybe<NestedEnumcourse_Coursestate_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Course_Coursestate_Enum>>;
};

export type Enumexpert_Data_Allowed_EnumFilter = {
  readonly equals?: InputMaybe<Expert_Data_Allowed_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Expert_Data_Allowed_Enum>>;
  readonly not?: InputMaybe<NestedEnumexpert_Data_Allowed_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Expert_Data_Allowed_Enum>>;
};

export type Enummatch_Source_EnumFilter = {
  readonly equals?: InputMaybe<Match_Source_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Match_Source_Enum>>;
  readonly not?: InputMaybe<NestedEnummatch_Source_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Match_Source_Enum>>;
};

export type Enumproject_Field_With_Grade_Restriction_Projectfield_EnumFilter = {
  readonly equals?: InputMaybe<Project_Field_With_Grade_Restriction_Projectfield_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Project_Field_With_Grade_Restriction_Projectfield_Enum>>;
  readonly not?: InputMaybe<NestedEnumproject_Field_With_Grade_Restriction_Projectfield_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Project_Field_With_Grade_Restriction_Projectfield_Enum>>;
};

export type Enumpupil_Languages_EnumNullableListFilter = {
  readonly equals?: InputMaybe<ReadonlyArray<Pupil_Languages_Enum>>;
  readonly has?: InputMaybe<Pupil_Languages_Enum>;
  readonly hasEvery?: InputMaybe<ReadonlyArray<Pupil_Languages_Enum>>;
  readonly hasSome?: InputMaybe<ReadonlyArray<Pupil_Languages_Enum>>;
  readonly isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Enumpupil_Learninggermansince_EnumNullableFilter = {
  readonly equals?: InputMaybe<Pupil_Learninggermansince_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Pupil_Learninggermansince_Enum>>;
  readonly not?: InputMaybe<NestedEnumpupil_Learninggermansince_EnumNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Pupil_Learninggermansince_Enum>>;
};

export type Enumpupil_Projectfields_EnumNullableListFilter = {
  readonly equals?: InputMaybe<ReadonlyArray<Pupil_Projectfields_Enum>>;
  readonly has?: InputMaybe<Pupil_Projectfields_Enum>;
  readonly hasEvery?: InputMaybe<ReadonlyArray<Pupil_Projectfields_Enum>>;
  readonly hasSome?: InputMaybe<ReadonlyArray<Pupil_Projectfields_Enum>>;
  readonly isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Enumpupil_Registrationsource_EnumFilter = {
  readonly equals?: InputMaybe<Pupil_Registrationsource_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Pupil_Registrationsource_Enum>>;
  readonly not?: InputMaybe<NestedEnumpupil_Registrationsource_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Pupil_Registrationsource_Enum>>;
};

export type Enumpupil_Schooltype_EnumFilter = {
  readonly equals?: InputMaybe<Pupil_Schooltype_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Pupil_Schooltype_Enum>>;
  readonly not?: InputMaybe<NestedEnumpupil_Schooltype_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Pupil_Schooltype_Enum>>;
};

export type Enumpupil_State_EnumFilter = {
  readonly equals?: InputMaybe<Pupil_State_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Pupil_State_Enum>>;
  readonly not?: InputMaybe<NestedEnumpupil_State_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Pupil_State_Enum>>;
};

export type Enumschool_Schooltype_EnumFilter = {
  readonly equals?: InputMaybe<School_Schooltype_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<School_Schooltype_Enum>>;
  readonly not?: InputMaybe<NestedEnumschool_Schooltype_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<School_Schooltype_Enum>>;
};

export type Enumschool_State_EnumNullableFilter = {
  readonly equals?: InputMaybe<School_State_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<School_State_Enum>>;
  readonly not?: InputMaybe<NestedEnumschool_State_EnumNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<School_State_Enum>>;
};

export type Enumstudent_Languages_EnumNullableListFilter = {
  readonly equals?: InputMaybe<ReadonlyArray<Student_Languages_Enum>>;
  readonly has?: InputMaybe<Student_Languages_Enum>;
  readonly hasEvery?: InputMaybe<ReadonlyArray<Student_Languages_Enum>>;
  readonly hasSome?: InputMaybe<ReadonlyArray<Student_Languages_Enum>>;
  readonly isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Enumstudent_Module_EnumNullableFilter = {
  readonly equals?: InputMaybe<Student_Module_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Student_Module_Enum>>;
  readonly not?: InputMaybe<NestedEnumstudent_Module_EnumNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Student_Module_Enum>>;
};

export type Enumstudent_Registrationsource_EnumFilter = {
  readonly equals?: InputMaybe<Student_Registrationsource_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Student_Registrationsource_Enum>>;
  readonly not?: InputMaybe<NestedEnumstudent_Registrationsource_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Student_Registrationsource_Enum>>;
};

export type Enumstudent_State_EnumNullableFilter = {
  readonly equals?: InputMaybe<Student_State_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Student_State_Enum>>;
  readonly not?: InputMaybe<NestedEnumstudent_State_EnumNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Student_State_Enum>>;
};

export type Expert_DataRelationFilter = {
  readonly is?: InputMaybe<Expert_DataWhereInput>;
  readonly isNot?: InputMaybe<Expert_DataWhereInput>;
};

export type Expert_DataWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Expert_DataWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Expert_DataWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Expert_DataWhereInput>>;
  readonly active?: InputMaybe<BoolFilter>;
  readonly allowed?: InputMaybe<Enumexpert_Data_Allowed_EnumFilter>;
  readonly contactEmail?: InputMaybe<StringFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly description?: InputMaybe<StringNullableFilter>;
  readonly expert_data_expertise_tags_expertise_tag?: InputMaybe<Expert_Data_Expertise_Tags_Expertise_TagListRelationFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly studentId?: InputMaybe<IntNullableFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Expert_Data_Expertise_Tags_Expertise_TagListRelationFilter = {
  readonly every?: InputMaybe<Expert_Data_Expertise_Tags_Expertise_TagWhereInput>;
  readonly none?: InputMaybe<Expert_Data_Expertise_Tags_Expertise_TagWhereInput>;
  readonly some?: InputMaybe<Expert_Data_Expertise_Tags_Expertise_TagWhereInput>;
};

export type Expert_Data_Expertise_Tags_Expertise_TagWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Expert_Data_Expertise_Tags_Expertise_TagWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Expert_Data_Expertise_Tags_Expertise_TagWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Expert_Data_Expertise_Tags_Expertise_TagWhereInput>>;
  readonly expertDataId?: InputMaybe<IntFilter>;
  readonly expert_data?: InputMaybe<Expert_DataRelationFilter>;
  readonly expertiseTagId?: InputMaybe<IntFilter>;
  readonly expertise_tag?: InputMaybe<Expertise_TagRelationFilter>;
};

export type Expertise_TagRelationFilter = {
  readonly is?: InputMaybe<Expertise_TagWhereInput>;
  readonly isNot?: InputMaybe<Expertise_TagWhereInput>;
};

export type Expertise_TagWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Expertise_TagWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Expertise_TagWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Expertise_TagWhereInput>>;
  readonly expert_data_expertise_tags_expertise_tag?: InputMaybe<Expert_Data_Expertise_Tags_Expertise_TagListRelationFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly name?: InputMaybe<StringFilter>;
};

export type Instructor_ScreeningListRelationFilter = {
  readonly every?: InputMaybe<Instructor_ScreeningWhereInput>;
  readonly none?: InputMaybe<Instructor_ScreeningWhereInput>;
  readonly some?: InputMaybe<Instructor_ScreeningWhereInput>;
};

export type Instructor_ScreeningRelationFilter = {
  readonly is?: InputMaybe<Instructor_ScreeningWhereInput>;
  readonly isNot?: InputMaybe<Instructor_ScreeningWhereInput>;
};

export type Instructor_ScreeningWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Instructor_ScreeningWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Instructor_ScreeningWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Instructor_ScreeningWhereInput>>;
  readonly comment?: InputMaybe<StringNullableFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly knowsCoronaSchoolFrom?: InputMaybe<StringNullableFilter>;
  readonly screener?: InputMaybe<ScreenerRelationFilter>;
  readonly screenerId?: InputMaybe<IntNullableFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly studentId?: InputMaybe<IntNullableFilter>;
  readonly success?: InputMaybe<BoolFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IntFieldUpdateOperationsInput = {
  readonly decrement?: InputMaybe<Scalars['Int']>;
  readonly divide?: InputMaybe<Scalars['Int']>;
  readonly increment?: InputMaybe<Scalars['Int']>;
  readonly multiply?: InputMaybe<Scalars['Int']>;
  readonly set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  readonly equals?: InputMaybe<Scalars['Int']>;
  readonly gt?: InputMaybe<Scalars['Int']>;
  readonly gte?: InputMaybe<Scalars['Int']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly lt?: InputMaybe<Scalars['Int']>;
  readonly lte?: InputMaybe<Scalars['Int']>;
  readonly not?: InputMaybe<NestedIntFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

export type IntNullableFilter = {
  readonly equals?: InputMaybe<Scalars['Int']>;
  readonly gt?: InputMaybe<Scalars['Int']>;
  readonly gte?: InputMaybe<Scalars['Int']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly lt?: InputMaybe<Scalars['Int']>;
  readonly lte?: InputMaybe<Scalars['Int']>;
  readonly not?: InputMaybe<NestedIntNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

export type JsonFilter = {
  readonly equals?: InputMaybe<Scalars['JSON']>;
  readonly not?: InputMaybe<Scalars['JSON']>;
};

export type Jufo_Verification_TransmissionRelationFilter = {
  readonly is?: InputMaybe<Jufo_Verification_TransmissionWhereInput>;
  readonly isNot?: InputMaybe<Jufo_Verification_TransmissionWhereInput>;
};

export type Jufo_Verification_TransmissionWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Jufo_Verification_TransmissionWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Jufo_Verification_TransmissionWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Jufo_Verification_TransmissionWhereInput>>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly studentId?: InputMaybe<IntNullableFilter>;
  readonly uuid?: InputMaybe<StringFilter>;
};

export type Lecture = {
  readonly __typename?: 'Lecture';
  readonly createdAt: Scalars['DateTime'];
  readonly duration: Scalars['Int'];
  readonly id: Scalars['Int'];
  readonly instructorId?: Maybe<Scalars['Int']>;
  readonly start: Scalars['DateTime'];
  readonly subcourseId?: Maybe<Scalars['Int']>;
  readonly updatedAt: Scalars['DateTime'];
};

export type LectureListRelationFilter = {
  readonly every?: InputMaybe<LectureWhereInput>;
  readonly none?: InputMaybe<LectureWhereInput>;
  readonly some?: InputMaybe<LectureWhereInput>;
};

export type LectureOrderByInput = {
  readonly createdAt?: InputMaybe<SortOrder>;
  readonly duration?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly instructorId?: InputMaybe<SortOrder>;
  readonly start?: InputMaybe<SortOrder>;
  readonly subcourseId?: InputMaybe<SortOrder>;
  readonly updatedAt?: InputMaybe<SortOrder>;
};

export type LectureRelationFilter = {
  readonly is?: InputMaybe<LectureWhereInput>;
  readonly isNot?: InputMaybe<LectureWhereInput>;
};

export enum LectureScalarFieldEnum {
  CreatedAt = 'createdAt',
  Duration = 'duration',
  Id = 'id',
  InstructorId = 'instructorId',
  Start = 'start',
  SubcourseId = 'subcourseId',
  UpdatedAt = 'updatedAt'
}

export type LectureWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<LectureWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<LectureWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<LectureWhereInput>>;
  readonly course_attendance_log?: InputMaybe<Course_Attendance_LogListRelationFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly duration?: InputMaybe<IntFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly instructorId?: InputMaybe<IntNullableFilter>;
  readonly start?: InputMaybe<DateTimeFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly subcourse?: InputMaybe<SubcourseRelationFilter>;
  readonly subcourseId?: InputMaybe<IntNullableFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LectureWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['Int']>;
};

export type Log = {
  readonly __typename?: 'Log';
  readonly createdAt: Scalars['DateTime'];
  readonly data: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly logtype: Log_Logtype_Enum;
  readonly user: Scalars['String'];
};

export type Match = {
  readonly __typename?: 'Match';
  readonly createdAt: Scalars['DateTime'];
  readonly dissolveReason?: Maybe<Scalars['Int']>;
  readonly dissolved: Scalars['Boolean'];
  readonly feedbackToPupilMail: Scalars['Boolean'];
  readonly feedbackToStudentMail: Scalars['Boolean'];
  readonly followUpToPupilMail: Scalars['Boolean'];
  readonly followUpToStudentMail: Scalars['Boolean'];
  readonly id: Scalars['Int'];
  readonly proposedTime?: Maybe<Scalars['DateTime']>;
  readonly pupil: Pupil;
  readonly pupilId?: Maybe<Scalars['Int']>;
  readonly source: Match_Source_Enum;
  readonly student: Student;
  readonly studentId?: Maybe<Scalars['Int']>;
  readonly subjectsFormatted: ReadonlyArray<Subject>;
  readonly updatedAt: Scalars['DateTime'];
  readonly uuid: Scalars['String'];
};

export type MatchListRelationFilter = {
  readonly every?: InputMaybe<MatchWhereInput>;
  readonly none?: InputMaybe<MatchWhereInput>;
  readonly some?: InputMaybe<MatchWhereInput>;
};

export type MatchOrderByInput = {
  readonly createdAt?: InputMaybe<SortOrder>;
  readonly dissolveReason?: InputMaybe<SortOrder>;
  readonly dissolved?: InputMaybe<SortOrder>;
  readonly feedbackToPupilMail?: InputMaybe<SortOrder>;
  readonly feedbackToStudentMail?: InputMaybe<SortOrder>;
  readonly followUpToPupilMail?: InputMaybe<SortOrder>;
  readonly followUpToStudentMail?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly proposedTime?: InputMaybe<SortOrder>;
  readonly pupilId?: InputMaybe<SortOrder>;
  readonly source?: InputMaybe<SortOrder>;
  readonly studentId?: InputMaybe<SortOrder>;
  readonly updatedAt?: InputMaybe<SortOrder>;
  readonly uuid?: InputMaybe<SortOrder>;
};

export enum MatchScalarFieldEnum {
  CreatedAt = 'createdAt',
  DissolveReason = 'dissolveReason',
  Dissolved = 'dissolved',
  FeedbackToPupilMail = 'feedbackToPupilMail',
  FeedbackToStudentMail = 'feedbackToStudentMail',
  FollowUpToPupilMail = 'followUpToPupilMail',
  FollowUpToStudentMail = 'followUpToStudentMail',
  Id = 'id',
  ProposedTime = 'proposedTime',
  PupilId = 'pupilId',
  Source = 'source',
  StudentId = 'studentId',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

export type MatchWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<MatchWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<MatchWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<MatchWhereInput>>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly dissolveReason?: InputMaybe<IntNullableFilter>;
  readonly dissolved?: InputMaybe<BoolFilter>;
  readonly feedbackToPupilMail?: InputMaybe<BoolFilter>;
  readonly feedbackToStudentMail?: InputMaybe<BoolFilter>;
  readonly followUpToPupilMail?: InputMaybe<BoolFilter>;
  readonly followUpToStudentMail?: InputMaybe<BoolFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly proposedTime?: InputMaybe<DateTimeNullableFilter>;
  readonly pupil?: InputMaybe<PupilRelationFilter>;
  readonly pupilId?: InputMaybe<IntNullableFilter>;
  readonly source?: InputMaybe<Enummatch_Source_EnumFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly studentId?: InputMaybe<IntNullableFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
  readonly uuid?: InputMaybe<StringFilter>;
};

export type MatchWhereUniqueInput = {
  readonly UQ_MATCH?: InputMaybe<MatchUq_MatchCompoundUniqueInput>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly uuid?: InputMaybe<Scalars['String']>;
};

export type Me = {
  readonly __typename?: 'Me';
  readonly email?: Maybe<Scalars['String']>;
  readonly firstname?: Maybe<Scalars['String']>;
  readonly lastname?: Maybe<Scalars['String']>;
  readonly pupil?: Maybe<Pupil>;
  readonly screener?: Maybe<Screener>;
  readonly student?: Maybe<Student>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly loginLegacy: Scalars['Boolean'];
  readonly loginPassword: Scalars['Boolean'];
  readonly logout: Scalars['Boolean'];
  readonly matchAdd: Scalars['Boolean'];
  readonly matchDissolve: Scalars['Boolean'];
  readonly notificationActivate: Scalars['Boolean'];
  readonly notificationCreate: Scalars['Boolean'];
  readonly notificationImport: Scalars['String'];
  readonly notificationUpdate: Scalars['Boolean'];
  readonly participationCertificateAsPDF: Scalars['String'];
  readonly participationCertificateCreate: Scalars['Boolean'];
  readonly participationCertificateSign: Scalars['Boolean'];
  readonly pupilActivate: Scalars['Boolean'];
  readonly pupilCreateMatchRequest: Scalars['Boolean'];
  readonly pupilDeactivate: Scalars['Boolean'];
  readonly pupilDeleteMatchRequest: Scalars['Boolean'];
  readonly pupilJoinSubcourse: Scalars['Boolean'];
  readonly pupilJoinSubcourseWaitinglist: Scalars['Boolean'];
  readonly pupilLeaveSubcourse: Scalars['Boolean'];
  readonly pupilLeaveSubcourseWaitinglist: Scalars['Boolean'];
  readonly pupilResendVerificationMail: Scalars['Boolean'];
  readonly tutoringInterestConfirm: Scalars['Boolean'];
  readonly tutoringInterestRefuse: Scalars['Boolean'];
};


export type MutationLoginLegacyArgs = {
  authToken: Scalars['String'];
};


export type MutationLoginPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationMatchAddArgs = {
  pupilId: Scalars['Float'];
  studentId: Scalars['Float'];
};


export type MutationMatchDissolveArgs = {
  dissolveReason: Scalars['Float'];
  matchId: Scalars['Float'];
};


export type MutationNotificationActivateArgs = {
  active: Scalars['Boolean'];
  notificationId: Scalars['Float'];
};


export type MutationNotificationCreateArgs = {
  notification: NotificationCreateInput;
};


export type MutationNotificationImportArgs = {
  apply?: InputMaybe<Scalars['Boolean']>;
  notifications: ReadonlyArray<NotificationInput>;
  overwrite?: InputMaybe<Scalars['Boolean']>;
};


export type MutationNotificationUpdateArgs = {
  notificationId: Scalars['Float'];
  update: NotificationUpdateInput;
};


export type MutationParticipationCertificateAsPdfArgs = {
  language: Scalars['String'];
  uuid: Scalars['String'];
};


export type MutationParticipationCertificateCreateArgs = {
  certificateData: CertificateCreationInput;
  pupilId: Scalars['Float'];
};


export type MutationParticipationCertificateSignArgs = {
  certificateId: Scalars['String'];
  signatureLocation: Scalars['String'];
  signatureParent?: InputMaybe<Scalars['String']>;
  signaturePupil?: InputMaybe<Scalars['String']>;
};


export type MutationPupilActivateArgs = {
  pupilId: Scalars['Float'];
};


export type MutationPupilCreateMatchRequestArgs = {
  pupilId: Scalars['Float'];
};


export type MutationPupilDeactivateArgs = {
  pupilId: Scalars['Float'];
};


export type MutationPupilDeleteMatchRequestArgs = {
  pupilId: Scalars['Float'];
};


export type MutationPupilJoinSubcourseArgs = {
  pupilId: Scalars['Float'];
  subcourseId: Scalars['Float'];
};


export type MutationPupilJoinSubcourseWaitinglistArgs = {
  pupilId: Scalars['Float'];
  subcourseId: Scalars['Float'];
};


export type MutationPupilLeaveSubcourseArgs = {
  pupilId: Scalars['Float'];
  subcourseId: Scalars['Float'];
};


export type MutationPupilLeaveSubcourseWaitinglistArgs = {
  pupilId: Scalars['Float'];
  subcourseId: Scalars['Float'];
};


export type MutationPupilResendVerificationMailArgs = {
  pupilId: Scalars['Float'];
};


export type MutationTutoringInterestConfirmArgs = {
  token: Scalars['String'];
};


export type MutationTutoringInterestRefuseArgs = {
  token: Scalars['String'];
};

export type NestedBoolFilter = {
  readonly equals?: InputMaybe<Scalars['Boolean']>;
  readonly not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  readonly equals?: InputMaybe<Scalars['Boolean']>;
  readonly not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedBytesNullableFilter = {
  readonly equals?: InputMaybe<Scalars['Byte']>;
  readonly not?: InputMaybe<NestedBytesNullableFilter>;
};

export type NestedDateTimeFilter = {
  readonly equals?: InputMaybe<Scalars['DateTime']>;
  readonly gt?: InputMaybe<Scalars['DateTime']>;
  readonly gte?: InputMaybe<Scalars['DateTime']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly lt?: InputMaybe<Scalars['DateTime']>;
  readonly lte?: InputMaybe<Scalars['DateTime']>;
  readonly not?: InputMaybe<NestedDateTimeFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  readonly equals?: InputMaybe<Scalars['DateTime']>;
  readonly gt?: InputMaybe<Scalars['DateTime']>;
  readonly gte?: InputMaybe<Scalars['DateTime']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly lt?: InputMaybe<Scalars['DateTime']>;
  readonly lte?: InputMaybe<Scalars['DateTime']>;
  readonly not?: InputMaybe<NestedDateTimeNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTime']>>;
};

export type NestedDecimalFilter = {
  readonly equals?: InputMaybe<Scalars['Decimal']>;
  readonly gt?: InputMaybe<Scalars['Decimal']>;
  readonly gte?: InputMaybe<Scalars['Decimal']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Decimal']>>;
  readonly lt?: InputMaybe<Scalars['Decimal']>;
  readonly lte?: InputMaybe<Scalars['Decimal']>;
  readonly not?: InputMaybe<NestedDecimalFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Decimal']>>;
};

export type NestedEnumcourse_Category_EnumFilter = {
  readonly equals?: InputMaybe<Course_Category_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Course_Category_Enum>>;
  readonly not?: InputMaybe<NestedEnumcourse_Category_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Course_Category_Enum>>;
};

export type NestedEnumcourse_Coursestate_EnumFilter = {
  readonly equals?: InputMaybe<Course_Coursestate_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Course_Coursestate_Enum>>;
  readonly not?: InputMaybe<NestedEnumcourse_Coursestate_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Course_Coursestate_Enum>>;
};

export type NestedEnumexpert_Data_Allowed_EnumFilter = {
  readonly equals?: InputMaybe<Expert_Data_Allowed_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Expert_Data_Allowed_Enum>>;
  readonly not?: InputMaybe<NestedEnumexpert_Data_Allowed_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Expert_Data_Allowed_Enum>>;
};

export type NestedEnummatch_Source_EnumFilter = {
  readonly equals?: InputMaybe<Match_Source_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Match_Source_Enum>>;
  readonly not?: InputMaybe<NestedEnummatch_Source_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Match_Source_Enum>>;
};

export type NestedEnumproject_Field_With_Grade_Restriction_Projectfield_EnumFilter = {
  readonly equals?: InputMaybe<Project_Field_With_Grade_Restriction_Projectfield_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Project_Field_With_Grade_Restriction_Projectfield_Enum>>;
  readonly not?: InputMaybe<NestedEnumproject_Field_With_Grade_Restriction_Projectfield_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Project_Field_With_Grade_Restriction_Projectfield_Enum>>;
};

export type NestedEnumpupil_Learninggermansince_EnumNullableFilter = {
  readonly equals?: InputMaybe<Pupil_Learninggermansince_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Pupil_Learninggermansince_Enum>>;
  readonly not?: InputMaybe<NestedEnumpupil_Learninggermansince_EnumNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Pupil_Learninggermansince_Enum>>;
};

export type NestedEnumpupil_Registrationsource_EnumFilter = {
  readonly equals?: InputMaybe<Pupil_Registrationsource_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Pupil_Registrationsource_Enum>>;
  readonly not?: InputMaybe<NestedEnumpupil_Registrationsource_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Pupil_Registrationsource_Enum>>;
};

export type NestedEnumpupil_Schooltype_EnumFilter = {
  readonly equals?: InputMaybe<Pupil_Schooltype_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Pupil_Schooltype_Enum>>;
  readonly not?: InputMaybe<NestedEnumpupil_Schooltype_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Pupil_Schooltype_Enum>>;
};

export type NestedEnumpupil_State_EnumFilter = {
  readonly equals?: InputMaybe<Pupil_State_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Pupil_State_Enum>>;
  readonly not?: InputMaybe<NestedEnumpupil_State_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Pupil_State_Enum>>;
};

export type NestedEnumschool_Schooltype_EnumFilter = {
  readonly equals?: InputMaybe<School_Schooltype_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<School_Schooltype_Enum>>;
  readonly not?: InputMaybe<NestedEnumschool_Schooltype_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<School_Schooltype_Enum>>;
};

export type NestedEnumschool_State_EnumNullableFilter = {
  readonly equals?: InputMaybe<School_State_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<School_State_Enum>>;
  readonly not?: InputMaybe<NestedEnumschool_State_EnumNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<School_State_Enum>>;
};

export type NestedEnumstudent_Module_EnumNullableFilter = {
  readonly equals?: InputMaybe<Student_Module_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Student_Module_Enum>>;
  readonly not?: InputMaybe<NestedEnumstudent_Module_EnumNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Student_Module_Enum>>;
};

export type NestedEnumstudent_Registrationsource_EnumFilter = {
  readonly equals?: InputMaybe<Student_Registrationsource_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Student_Registrationsource_Enum>>;
  readonly not?: InputMaybe<NestedEnumstudent_Registrationsource_EnumFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Student_Registrationsource_Enum>>;
};

export type NestedEnumstudent_State_EnumNullableFilter = {
  readonly equals?: InputMaybe<Student_State_Enum>;
  readonly in?: InputMaybe<ReadonlyArray<Student_State_Enum>>;
  readonly not?: InputMaybe<NestedEnumstudent_State_EnumNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Student_State_Enum>>;
};

export type NestedIntFilter = {
  readonly equals?: InputMaybe<Scalars['Int']>;
  readonly gt?: InputMaybe<Scalars['Int']>;
  readonly gte?: InputMaybe<Scalars['Int']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly lt?: InputMaybe<Scalars['Int']>;
  readonly lte?: InputMaybe<Scalars['Int']>;
  readonly not?: InputMaybe<NestedIntFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  readonly equals?: InputMaybe<Scalars['Int']>;
  readonly gt?: InputMaybe<Scalars['Int']>;
  readonly gte?: InputMaybe<Scalars['Int']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly lt?: InputMaybe<Scalars['Int']>;
  readonly lte?: InputMaybe<Scalars['Int']>;
  readonly not?: InputMaybe<NestedIntNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

export type NestedStringFilter = {
  readonly contains?: InputMaybe<Scalars['String']>;
  readonly endsWith?: InputMaybe<Scalars['String']>;
  readonly equals?: InputMaybe<Scalars['String']>;
  readonly gt?: InputMaybe<Scalars['String']>;
  readonly gte?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly lt?: InputMaybe<Scalars['String']>;
  readonly lte?: InputMaybe<Scalars['String']>;
  readonly not?: InputMaybe<NestedStringFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  readonly contains?: InputMaybe<Scalars['String']>;
  readonly endsWith?: InputMaybe<Scalars['String']>;
  readonly equals?: InputMaybe<Scalars['String']>;
  readonly gt?: InputMaybe<Scalars['String']>;
  readonly gte?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly lt?: InputMaybe<Scalars['String']>;
  readonly lte?: InputMaybe<Scalars['String']>;
  readonly not?: InputMaybe<NestedStringNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly startsWith?: InputMaybe<Scalars['String']>;
};

export type Notification = {
  readonly __typename?: 'Notification';
  readonly active: Scalars['Boolean'];
  readonly cancelledOnAction: ReadonlyArray<Scalars['String']>;
  readonly category: ReadonlyArray<Scalars['String']>;
  readonly delay?: Maybe<Scalars['Int']>;
  readonly description: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly interval?: Maybe<Scalars['Int']>;
  readonly mailjetTemplateId?: Maybe<Scalars['Int']>;
  readonly onActions: ReadonlyArray<Scalars['String']>;
  readonly recipient: Scalars['Int'];
};

export type NotificationCreateInput = {
  readonly active: Scalars['Boolean'];
  readonly cancelledOnAction?: InputMaybe<NotificationCreatecancelledOnActionInput>;
  readonly category?: InputMaybe<NotificationCreatecategoryInput>;
  readonly delay?: InputMaybe<Scalars['Int']>;
  readonly description: Scalars['String'];
  readonly interval?: InputMaybe<Scalars['Int']>;
  readonly mailjetTemplateId?: InputMaybe<Scalars['Int']>;
  readonly onActions?: InputMaybe<NotificationCreateonActionsInput>;
  readonly recipient: Scalars['Int'];
};

export type NotificationCreatecancelledOnActionInput = {
  readonly set: ReadonlyArray<Scalars['String']>;
};

export type NotificationCreatecategoryInput = {
  readonly set: ReadonlyArray<Scalars['String']>;
};

export type NotificationCreateonActionsInput = {
  readonly set: ReadonlyArray<Scalars['String']>;
};

export type NotificationInput = {
  readonly active: Scalars['Boolean'];
  readonly cancelledOnAction: ReadonlyArray<Scalars['String']>;
  readonly category: ReadonlyArray<Scalars['String']>;
  readonly delay?: InputMaybe<Scalars['Int']>;
  readonly description: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly interval?: InputMaybe<Scalars['Int']>;
  readonly mailjetTemplateId: Scalars['Int'];
  readonly onActions: ReadonlyArray<Scalars['String']>;
  readonly recipient: Scalars['Int'];
};

export type NotificationOrderByInput = {
  readonly active?: InputMaybe<SortOrder>;
  readonly cancelledOnAction?: InputMaybe<SortOrder>;
  readonly category?: InputMaybe<SortOrder>;
  readonly delay?: InputMaybe<SortOrder>;
  readonly description?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly interval?: InputMaybe<SortOrder>;
  readonly mailjetTemplateId?: InputMaybe<SortOrder>;
  readonly onActions?: InputMaybe<SortOrder>;
  readonly recipient?: InputMaybe<SortOrder>;
};

export enum NotificationScalarFieldEnum {
  Active = 'active',
  CancelledOnAction = 'cancelledOnAction',
  Category = 'category',
  Delay = 'delay',
  Description = 'description',
  Id = 'id',
  Interval = 'interval',
  MailjetTemplateId = 'mailjetTemplateId',
  OnActions = 'onActions',
  Recipient = 'recipient'
}

export type NotificationUpdateInput = {
  readonly active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  readonly cancelledOnAction?: InputMaybe<NotificationUpdatecancelledOnActionInput>;
  readonly category?: InputMaybe<NotificationUpdatecategoryInput>;
  readonly delay?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  readonly description?: InputMaybe<StringFieldUpdateOperationsInput>;
  readonly interval?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  readonly mailjetTemplateId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  readonly onActions?: InputMaybe<NotificationUpdateonActionsInput>;
  readonly recipient?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type NotificationUpdatecancelledOnActionInput = {
  readonly push?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly set?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

export type NotificationUpdatecategoryInput = {
  readonly push?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly set?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

export type NotificationUpdateonActionsInput = {
  readonly push?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly set?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

export type NotificationWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<NotificationWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<NotificationWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<NotificationWhereInput>>;
  readonly active?: InputMaybe<BoolFilter>;
  readonly cancelledOnAction?: InputMaybe<StringNullableListFilter>;
  readonly category?: InputMaybe<StringNullableListFilter>;
  readonly delay?: InputMaybe<IntNullableFilter>;
  readonly description?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly interval?: InputMaybe<IntNullableFilter>;
  readonly mailjetTemplateId?: InputMaybe<IntNullableFilter>;
  readonly onActions?: InputMaybe<StringNullableListFilter>;
  readonly recipient?: InputMaybe<IntFilter>;
};

export type NotificationWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['Int']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  readonly decrement?: InputMaybe<Scalars['Int']>;
  readonly divide?: InputMaybe<Scalars['Int']>;
  readonly increment?: InputMaybe<Scalars['Int']>;
  readonly multiply?: InputMaybe<Scalars['Int']>;
  readonly set?: InputMaybe<Scalars['Int']>;
};

export type Participation_Certificate = {
  readonly __typename?: 'Participation_certificate';
  readonly categories: Scalars['String'];
  readonly certificateDate: Scalars['DateTime'];
  readonly endDate: Scalars['DateTime'];
  readonly hoursPerWeek: Scalars['Decimal'];
  readonly hoursTotal: Scalars['Decimal'];
  readonly id: Scalars['Int'];
  readonly medium: Scalars['String'];
  readonly ongoingLessons: Scalars['Boolean'];
  readonly pupilId?: Maybe<Scalars['Int']>;
  readonly signatureDate?: Maybe<Scalars['DateTime']>;
  readonly signatureLocation?: Maybe<Scalars['String']>;
  readonly signatureParent?: Maybe<Scalars['Byte']>;
  readonly signaturePupil?: Maybe<Scalars['Byte']>;
  readonly startDate: Scalars['DateTime'];
  readonly state: Scalars['String'];
  readonly studentId?: Maybe<Scalars['Int']>;
  readonly subjects: Scalars['String'];
  readonly subjectsFormatted: ReadonlyArray<Scalars['String']>;
  readonly uuid: Scalars['String'];
};

export type Participation_CertificateListRelationFilter = {
  readonly every?: InputMaybe<Participation_CertificateWhereInput>;
  readonly none?: InputMaybe<Participation_CertificateWhereInput>;
  readonly some?: InputMaybe<Participation_CertificateWhereInput>;
};

export type Participation_CertificateWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Participation_CertificateWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Participation_CertificateWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Participation_CertificateWhereInput>>;
  readonly categories?: InputMaybe<StringFilter>;
  readonly certificateDate?: InputMaybe<DateTimeFilter>;
  readonly endDate?: InputMaybe<DateTimeFilter>;
  readonly hoursPerWeek?: InputMaybe<DecimalFilter>;
  readonly hoursTotal?: InputMaybe<DecimalFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly medium?: InputMaybe<StringFilter>;
  readonly ongoingLessons?: InputMaybe<BoolFilter>;
  readonly pupil?: InputMaybe<PupilRelationFilter>;
  readonly pupilId?: InputMaybe<IntNullableFilter>;
  readonly signatureDate?: InputMaybe<DateTimeNullableFilter>;
  readonly signatureLocation?: InputMaybe<StringNullableFilter>;
  readonly signatureParent?: InputMaybe<BytesNullableFilter>;
  readonly signaturePupil?: InputMaybe<BytesNullableFilter>;
  readonly startDate?: InputMaybe<DateTimeFilter>;
  readonly state?: InputMaybe<StringFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly studentId?: InputMaybe<IntNullableFilter>;
  readonly subjects?: InputMaybe<StringFilter>;
  readonly uuid?: InputMaybe<StringFilter>;
};

export type Project_Coaching_ScreeningListRelationFilter = {
  readonly every?: InputMaybe<Project_Coaching_ScreeningWhereInput>;
  readonly none?: InputMaybe<Project_Coaching_ScreeningWhereInput>;
  readonly some?: InputMaybe<Project_Coaching_ScreeningWhereInput>;
};

export type Project_Coaching_ScreeningRelationFilter = {
  readonly is?: InputMaybe<Project_Coaching_ScreeningWhereInput>;
  readonly isNot?: InputMaybe<Project_Coaching_ScreeningWhereInput>;
};

export type Project_Coaching_ScreeningWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Project_Coaching_ScreeningWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Project_Coaching_ScreeningWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Project_Coaching_ScreeningWhereInput>>;
  readonly comment?: InputMaybe<StringNullableFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly knowsCoronaSchoolFrom?: InputMaybe<StringNullableFilter>;
  readonly screener?: InputMaybe<ScreenerRelationFilter>;
  readonly screenerId?: InputMaybe<IntNullableFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly studentId?: InputMaybe<IntNullableFilter>;
  readonly success?: InputMaybe<BoolFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Project_Field_With_Grade_RestrictionListRelationFilter = {
  readonly every?: InputMaybe<Project_Field_With_Grade_RestrictionWhereInput>;
  readonly none?: InputMaybe<Project_Field_With_Grade_RestrictionWhereInput>;
  readonly some?: InputMaybe<Project_Field_With_Grade_RestrictionWhereInput>;
};

export type Project_Field_With_Grade_RestrictionWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Project_Field_With_Grade_RestrictionWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Project_Field_With_Grade_RestrictionWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Project_Field_With_Grade_RestrictionWhereInput>>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly max?: InputMaybe<IntNullableFilter>;
  readonly min?: InputMaybe<IntNullableFilter>;
  readonly projectField?: InputMaybe<Enumproject_Field_With_Grade_Restriction_Projectfield_EnumFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly studentId?: InputMaybe<IntFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Project_Match = {
  readonly __typename?: 'Project_match';
  readonly createdAt: Scalars['DateTime'];
  readonly dissolveReason?: Maybe<Scalars['Int']>;
  readonly dissolved: Scalars['Boolean'];
  readonly id: Scalars['Int'];
  readonly pupil: Pupil;
  readonly pupilId?: Maybe<Scalars['Int']>;
  readonly student: Student;
  readonly studentId?: Maybe<Scalars['Int']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly uuid: Scalars['String'];
};

export type Project_MatchListRelationFilter = {
  readonly every?: InputMaybe<Project_MatchWhereInput>;
  readonly none?: InputMaybe<Project_MatchWhereInput>;
  readonly some?: InputMaybe<Project_MatchWhereInput>;
};

export type Project_MatchOrderByInput = {
  readonly createdAt?: InputMaybe<SortOrder>;
  readonly dissolveReason?: InputMaybe<SortOrder>;
  readonly dissolved?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly pupilId?: InputMaybe<SortOrder>;
  readonly studentId?: InputMaybe<SortOrder>;
  readonly updatedAt?: InputMaybe<SortOrder>;
  readonly uuid?: InputMaybe<SortOrder>;
};

export enum Project_MatchScalarFieldEnum {
  CreatedAt = 'createdAt',
  DissolveReason = 'dissolveReason',
  Dissolved = 'dissolved',
  Id = 'id',
  PupilId = 'pupilId',
  StudentId = 'studentId',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

export type Project_MatchWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Project_MatchWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Project_MatchWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Project_MatchWhereInput>>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly dissolveReason?: InputMaybe<IntNullableFilter>;
  readonly dissolved?: InputMaybe<BoolFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly pupil?: InputMaybe<PupilRelationFilter>;
  readonly pupilId?: InputMaybe<IntNullableFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly studentId?: InputMaybe<IntNullableFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
  readonly uuid?: InputMaybe<StringFilter>;
};

export type Project_MatchWhereUniqueInput = {
  readonly UQ_PJ_MATCH?: InputMaybe<Project_MatchUq_Pj_MatchCompoundUniqueInput>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly uuid?: InputMaybe<Scalars['String']>;
};

export type Pupil = {
  readonly __typename?: 'Pupil';
  readonly active: Scalars['Boolean'];
  readonly authToken?: Maybe<Scalars['String']>;
  readonly authTokenSent?: Maybe<Scalars['DateTime']>;
  readonly authTokenUsed: Scalars['Boolean'];
  readonly concreteNotifications: ReadonlyArray<Concrete_Notification>;
  readonly createdAt: Scalars['DateTime'];
  readonly email: Scalars['String'];
  readonly firstname?: Maybe<Scalars['String']>;
  readonly grade?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly isJufoParticipant: Scalars['String'];
  readonly isParticipant: Scalars['Boolean'];
  readonly isProjectCoachee: Scalars['Boolean'];
  readonly isPupil: Scalars['Boolean'];
  readonly languages: ReadonlyArray<Pupil_Languages_Enum>;
  readonly lastUpdatedSettingsViaBlocker?: Maybe<Scalars['DateTime']>;
  readonly lastname?: Maybe<Scalars['String']>;
  readonly learningGermanSince?: Maybe<Pupil_Learninggermansince_Enum>;
  readonly logs: ReadonlyArray<Log>;
  readonly matchingPriority: Scalars['Int'];
  readonly msg?: Maybe<Scalars['String']>;
  readonly newsletter: Scalars['Boolean'];
  readonly openMatchRequestCount: Scalars['Int'];
  readonly openProjectMatchRequestCount: Scalars['Int'];
  readonly participationCertificatesToSign: ReadonlyArray<Participation_Certificate>;
  readonly projectFields: ReadonlyArray<Pupil_Projectfields_Enum>;
  readonly projectMemberCount: Scalars['Int'];
  readonly registrationSource: Pupil_Registrationsource_Enum;
  readonly schoolId?: Maybe<Scalars['Int']>;
  readonly schooltype: Pupil_Schooltype_Enum;
  readonly state: Pupil_State_Enum;
  readonly subcoursesJoined: ReadonlyArray<Subcourse>;
  readonly subcoursesWaitingList: ReadonlyArray<Subcourse>;
  readonly subjects?: Maybe<Scalars['String']>;
  readonly subjectsFormatted: ReadonlyArray<Subject>;
  readonly teacherEmailAddress?: Maybe<Scalars['String']>;
  readonly tutoringInterestConfirmation?: Maybe<Pupil_Tutoring_Interest_Confirmation_Request>;
  readonly updatedAt: Scalars['DateTime'];
  readonly verification?: Maybe<Scalars['String']>;
  readonly verifiedAt?: Maybe<Scalars['DateTime']>;
  readonly wix_creation_date: Scalars['DateTime'];
  readonly wix_id: Scalars['String'];
};

export type PupilListRelationFilter = {
  readonly every?: InputMaybe<PupilWhereInput>;
  readonly none?: InputMaybe<PupilWhereInput>;
  readonly some?: InputMaybe<PupilWhereInput>;
};

export type PupilOrderByInput = {
  readonly active?: InputMaybe<SortOrder>;
  readonly authToken?: InputMaybe<SortOrder>;
  readonly authTokenSent?: InputMaybe<SortOrder>;
  readonly authTokenUsed?: InputMaybe<SortOrder>;
  readonly createdAt?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstname?: InputMaybe<SortOrder>;
  readonly grade?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly isJufoParticipant?: InputMaybe<SortOrder>;
  readonly isParticipant?: InputMaybe<SortOrder>;
  readonly isProjectCoachee?: InputMaybe<SortOrder>;
  readonly isPupil?: InputMaybe<SortOrder>;
  readonly languages?: InputMaybe<SortOrder>;
  readonly lastUpdatedSettingsViaBlocker?: InputMaybe<SortOrder>;
  readonly lastname?: InputMaybe<SortOrder>;
  readonly learningGermanSince?: InputMaybe<SortOrder>;
  readonly matchingPriority?: InputMaybe<SortOrder>;
  readonly msg?: InputMaybe<SortOrder>;
  readonly newsletter?: InputMaybe<SortOrder>;
  readonly openMatchRequestCount?: InputMaybe<SortOrder>;
  readonly openProjectMatchRequestCount?: InputMaybe<SortOrder>;
  readonly projectFields?: InputMaybe<SortOrder>;
  readonly projectMemberCount?: InputMaybe<SortOrder>;
  readonly registrationSource?: InputMaybe<SortOrder>;
  readonly schoolId?: InputMaybe<SortOrder>;
  readonly schooltype?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<SortOrder>;
  readonly subjects?: InputMaybe<SortOrder>;
  readonly teacherEmailAddress?: InputMaybe<SortOrder>;
  readonly updatedAt?: InputMaybe<SortOrder>;
  readonly verification?: InputMaybe<SortOrder>;
  readonly verifiedAt?: InputMaybe<SortOrder>;
  readonly wix_creation_date?: InputMaybe<SortOrder>;
  readonly wix_id?: InputMaybe<SortOrder>;
};

export type PupilRelationFilter = {
  readonly is?: InputMaybe<PupilWhereInput>;
  readonly isNot?: InputMaybe<PupilWhereInput>;
};

export enum PupilScalarFieldEnum {
  Active = 'active',
  AuthToken = 'authToken',
  AuthTokenSent = 'authTokenSent',
  AuthTokenUsed = 'authTokenUsed',
  CreatedAt = 'createdAt',
  Email = 'email',
  Firstname = 'firstname',
  Grade = 'grade',
  Id = 'id',
  IsJufoParticipant = 'isJufoParticipant',
  IsParticipant = 'isParticipant',
  IsProjectCoachee = 'isProjectCoachee',
  IsPupil = 'isPupil',
  Languages = 'languages',
  LastUpdatedSettingsViaBlocker = 'lastUpdatedSettingsViaBlocker',
  Lastname = 'lastname',
  LearningGermanSince = 'learningGermanSince',
  MatchingPriority = 'matchingPriority',
  Msg = 'msg',
  Newsletter = 'newsletter',
  OpenMatchRequestCount = 'openMatchRequestCount',
  OpenProjectMatchRequestCount = 'openProjectMatchRequestCount',
  ProjectFields = 'projectFields',
  ProjectMemberCount = 'projectMemberCount',
  RegistrationSource = 'registrationSource',
  SchoolId = 'schoolId',
  Schooltype = 'schooltype',
  State = 'state',
  Subjects = 'subjects',
  TeacherEmailAddress = 'teacherEmailAddress',
  UpdatedAt = 'updatedAt',
  Verification = 'verification',
  VerifiedAt = 'verifiedAt',
  WixCreationDate = 'wix_creation_date',
  WixId = 'wix_id'
}

export type PupilWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<PupilWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<PupilWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<PupilWhereInput>>;
  readonly active?: InputMaybe<BoolFilter>;
  readonly authToken?: InputMaybe<StringNullableFilter>;
  readonly authTokenSent?: InputMaybe<DateTimeNullableFilter>;
  readonly authTokenUsed?: InputMaybe<BoolFilter>;
  readonly course_attendance_log?: InputMaybe<Course_Attendance_LogListRelationFilter>;
  readonly course_participation_certificate?: InputMaybe<Course_Participation_CertificateListRelationFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstname?: InputMaybe<StringNullableFilter>;
  readonly grade?: InputMaybe<StringNullableFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly isJufoParticipant?: InputMaybe<StringFilter>;
  readonly isParticipant?: InputMaybe<BoolFilter>;
  readonly isProjectCoachee?: InputMaybe<BoolFilter>;
  readonly isPupil?: InputMaybe<BoolFilter>;
  readonly languages?: InputMaybe<Enumpupil_Languages_EnumNullableListFilter>;
  readonly lastUpdatedSettingsViaBlocker?: InputMaybe<DateTimeNullableFilter>;
  readonly lastname?: InputMaybe<StringNullableFilter>;
  readonly learningGermanSince?: InputMaybe<Enumpupil_Learninggermansince_EnumNullableFilter>;
  readonly match?: InputMaybe<MatchListRelationFilter>;
  readonly matchingPriority?: InputMaybe<IntFilter>;
  readonly msg?: InputMaybe<StringNullableFilter>;
  readonly newsletter?: InputMaybe<BoolFilter>;
  readonly openMatchRequestCount?: InputMaybe<IntFilter>;
  readonly openProjectMatchRequestCount?: InputMaybe<IntFilter>;
  readonly participation_certificate?: InputMaybe<Participation_CertificateListRelationFilter>;
  readonly projectFields?: InputMaybe<Enumpupil_Projectfields_EnumNullableListFilter>;
  readonly projectMemberCount?: InputMaybe<IntFilter>;
  readonly project_match?: InputMaybe<Project_MatchListRelationFilter>;
  readonly pupil_tutoring_interest_confirmation_request?: InputMaybe<Pupil_Tutoring_Interest_Confirmation_RequestRelationFilter>;
  readonly registrationSource?: InputMaybe<Enumpupil_Registrationsource_EnumFilter>;
  readonly school?: InputMaybe<SchoolRelationFilter>;
  readonly schoolId?: InputMaybe<IntNullableFilter>;
  readonly schooltype?: InputMaybe<Enumpupil_Schooltype_EnumFilter>;
  readonly state?: InputMaybe<Enumpupil_State_EnumFilter>;
  readonly subcourse_participants_pupil?: InputMaybe<Subcourse_Participants_PupilListRelationFilter>;
  readonly subcourse_waiting_list_pupil?: InputMaybe<Subcourse_Waiting_List_PupilListRelationFilter>;
  readonly subjects?: InputMaybe<StringNullableFilter>;
  readonly teacherEmailAddress?: InputMaybe<StringNullableFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
  readonly verification?: InputMaybe<StringNullableFilter>;
  readonly verifiedAt?: InputMaybe<DateTimeNullableFilter>;
  readonly wix_creation_date?: InputMaybe<DateTimeFilter>;
  readonly wix_id?: InputMaybe<StringFilter>;
};

export type PupilWhereUniqueInput = {
  readonly authToken?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly verification?: InputMaybe<Scalars['String']>;
  readonly wix_id?: InputMaybe<Scalars['String']>;
};

export type Pupil_Tutoring_Interest_Confirmation_Request = {
  readonly __typename?: 'Pupil_tutoring_interest_confirmation_request';
  readonly createdAt: Scalars['DateTime'];
  readonly id: Scalars['Int'];
  readonly pupilId?: Maybe<Scalars['Int']>;
  readonly reminderSentDate?: Maybe<Scalars['DateTime']>;
  readonly status: Scalars['String'];
  readonly token: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
};

export type Pupil_Tutoring_Interest_Confirmation_RequestRelationFilter = {
  readonly is?: InputMaybe<Pupil_Tutoring_Interest_Confirmation_RequestWhereInput>;
  readonly isNot?: InputMaybe<Pupil_Tutoring_Interest_Confirmation_RequestWhereInput>;
};

export type Pupil_Tutoring_Interest_Confirmation_RequestWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Pupil_Tutoring_Interest_Confirmation_RequestWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Pupil_Tutoring_Interest_Confirmation_RequestWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Pupil_Tutoring_Interest_Confirmation_RequestWhereInput>>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly pupil?: InputMaybe<PupilRelationFilter>;
  readonly pupilId?: InputMaybe<IntNullableFilter>;
  readonly reminderSentDate?: InputMaybe<DateTimeNullableFilter>;
  readonly status?: InputMaybe<StringFilter>;
  readonly token?: InputMaybe<StringFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly concrete_notifications: ReadonlyArray<Concrete_Notification>;
  readonly courses: ReadonlyArray<Course>;
  readonly lectures: ReadonlyArray<Lecture>;
  readonly matches: ReadonlyArray<Match>;
  readonly me: Me;
  readonly notifications: ReadonlyArray<Notification>;
  readonly project_matches: ReadonlyArray<Project_Match>;
  readonly pupils: ReadonlyArray<Pupil>;
  readonly subcourses: ReadonlyArray<Subcourse>;
};


export type QueryConcrete_NotificationsArgs = {
  cursor?: InputMaybe<Concrete_NotificationWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<Concrete_NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<Concrete_NotificationOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Concrete_NotificationWhereInput>;
};


export type QueryCoursesArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CourseOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryLecturesArgs = {
  cursor?: InputMaybe<LectureWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<LectureScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<LectureOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LectureWhereInput>;
};


export type QueryMatchesArgs = {
  cursor?: InputMaybe<MatchWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<MatchScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<MatchOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MatchWhereInput>;
};


export type QueryNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<NotificationOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryProject_MatchesArgs = {
  cursor?: InputMaybe<Project_MatchWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<Project_MatchScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<Project_MatchOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Project_MatchWhereInput>;
};


export type QueryPupilsArgs = {
  cursor?: InputMaybe<PupilWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<PupilScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<PupilOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PupilWhereInput>;
};


export type QuerySubcoursesArgs = {
  cursor?: InputMaybe<SubcourseWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<SubcourseScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<SubcourseOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubcourseWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Range = {
  readonly __typename?: 'Range';
  readonly field: Scalars['Int'];
  readonly min: Scalars['Int'];
};

export type SchoolRelationFilter = {
  readonly is?: InputMaybe<SchoolWhereInput>;
  readonly isNot?: InputMaybe<SchoolWhereInput>;
};

export type SchoolWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<SchoolWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<SchoolWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<SchoolWhereInput>>;
  readonly activeCooperation?: InputMaybe<BoolFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly emailDomain?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly pupil?: InputMaybe<PupilListRelationFilter>;
  readonly schooltype?: InputMaybe<Enumschool_Schooltype_EnumFilter>;
  readonly state?: InputMaybe<Enumschool_State_EnumNullableFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
  readonly website?: InputMaybe<StringNullableFilter>;
};

export type Screener = {
  readonly __typename?: 'Screener';
  readonly active: Scalars['Boolean'];
  readonly authToken?: Maybe<Scalars['String']>;
  readonly authTokenSent?: Maybe<Scalars['DateTime']>;
  readonly authTokenUsed: Scalars['Boolean'];
  readonly createdAt: Scalars['DateTime'];
  readonly email: Scalars['String'];
  readonly firstname?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly lastname?: Maybe<Scalars['String']>;
  readonly oldNumberID?: Maybe<Scalars['Int']>;
  readonly password: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
  readonly verification?: Maybe<Scalars['String']>;
  readonly verified?: Maybe<Scalars['Boolean']>;
  readonly verifiedAt?: Maybe<Scalars['DateTime']>;
};

export type ScreenerRelationFilter = {
  readonly is?: InputMaybe<ScreenerWhereInput>;
  readonly isNot?: InputMaybe<ScreenerWhereInput>;
};

export type ScreenerWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ScreenerWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ScreenerWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ScreenerWhereInput>>;
  readonly active?: InputMaybe<BoolFilter>;
  readonly authToken?: InputMaybe<StringNullableFilter>;
  readonly authTokenSent?: InputMaybe<DateTimeNullableFilter>;
  readonly authTokenUsed?: InputMaybe<BoolFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstname?: InputMaybe<StringNullableFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly instructor_screening?: InputMaybe<Instructor_ScreeningListRelationFilter>;
  readonly lastname?: InputMaybe<StringNullableFilter>;
  readonly oldNumberID?: InputMaybe<IntNullableFilter>;
  readonly password?: InputMaybe<StringFilter>;
  readonly project_coaching_screening?: InputMaybe<Project_Coaching_ScreeningListRelationFilter>;
  readonly screening?: InputMaybe<ScreeningListRelationFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
  readonly verification?: InputMaybe<StringNullableFilter>;
  readonly verified?: InputMaybe<BoolNullableFilter>;
  readonly verifiedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ScreeningListRelationFilter = {
  readonly every?: InputMaybe<ScreeningWhereInput>;
  readonly none?: InputMaybe<ScreeningWhereInput>;
  readonly some?: InputMaybe<ScreeningWhereInput>;
};

export type ScreeningRelationFilter = {
  readonly is?: InputMaybe<ScreeningWhereInput>;
  readonly isNot?: InputMaybe<ScreeningWhereInput>;
};

export type ScreeningWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ScreeningWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ScreeningWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ScreeningWhereInput>>;
  readonly comment?: InputMaybe<StringNullableFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly knowsCoronaSchoolFrom?: InputMaybe<StringNullableFilter>;
  readonly screener?: InputMaybe<ScreenerRelationFilter>;
  readonly screenerId?: InputMaybe<IntNullableFilter>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly studentId?: InputMaybe<IntNullableFilter>;
  readonly success?: InputMaybe<BoolFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  readonly set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  readonly contains?: InputMaybe<Scalars['String']>;
  readonly endsWith?: InputMaybe<Scalars['String']>;
  readonly equals?: InputMaybe<Scalars['String']>;
  readonly gt?: InputMaybe<Scalars['String']>;
  readonly gte?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly lt?: InputMaybe<Scalars['String']>;
  readonly lte?: InputMaybe<Scalars['String']>;
  readonly mode?: InputMaybe<QueryMode>;
  readonly not?: InputMaybe<NestedStringFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  readonly contains?: InputMaybe<Scalars['String']>;
  readonly endsWith?: InputMaybe<Scalars['String']>;
  readonly equals?: InputMaybe<Scalars['String']>;
  readonly gt?: InputMaybe<Scalars['String']>;
  readonly gte?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly lt?: InputMaybe<Scalars['String']>;
  readonly lte?: InputMaybe<Scalars['String']>;
  readonly mode?: InputMaybe<QueryMode>;
  readonly not?: InputMaybe<NestedStringNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  readonly equals?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly has?: InputMaybe<Scalars['String']>;
  readonly hasEvery?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly hasSome?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Student = {
  readonly __typename?: 'Student';
  readonly active: Scalars['Boolean'];
  readonly authToken?: Maybe<Scalars['String']>;
  readonly authTokenSent?: Maybe<Scalars['DateTime']>;
  readonly authTokenUsed: Scalars['Boolean'];
  readonly createdAt: Scalars['DateTime'];
  readonly email: Scalars['String'];
  readonly feedback?: Maybe<Scalars['String']>;
  readonly firstname?: Maybe<Scalars['String']>;
  readonly hasJufoCertificate?: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['Int'];
  readonly isInstructor: Scalars['Boolean'];
  readonly isProjectCoach: Scalars['Boolean'];
  readonly isStudent: Scalars['Boolean'];
  readonly isUniversityStudent?: Maybe<Scalars['Boolean']>;
  readonly jufoPastParticipationConfirmed?: Maybe<Scalars['Boolean']>;
  readonly jufoPastParticipationInfo?: Maybe<Scalars['String']>;
  readonly languages: ReadonlyArray<Student_Languages_Enum>;
  readonly lastSentInstructorScreeningInvitationDate?: Maybe<Scalars['DateTime']>;
  readonly lastSentJufoAlumniScreeningInvitationDate?: Maybe<Scalars['DateTime']>;
  readonly lastSentScreeningInvitationDate?: Maybe<Scalars['DateTime']>;
  readonly lastUpdatedSettingsViaBlocker?: Maybe<Scalars['DateTime']>;
  readonly lastname?: Maybe<Scalars['String']>;
  readonly module?: Maybe<Student_Module_Enum>;
  readonly moduleHours?: Maybe<Scalars['Int']>;
  readonly msg?: Maybe<Scalars['String']>;
  readonly newsletter: Scalars['Boolean'];
  readonly openMatchRequestCount: Scalars['Int'];
  readonly openProjectMatchRequestCount: Scalars['Int'];
  readonly participationCertificates: ReadonlyArray<Participation_Certificate>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly registrationSource: Student_Registrationsource_Enum;
  readonly sentInstructorScreeningReminderCount: Scalars['Int'];
  readonly sentJufoAlumniScreeningReminderCount: Scalars['Int'];
  readonly sentScreeningReminderCount: Scalars['Int'];
  readonly state?: Maybe<Student_State_Enum>;
  readonly subjects?: Maybe<Scalars['String']>;
  readonly supportsInDaZ?: Maybe<Scalars['Boolean']>;
  readonly university?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly verification?: Maybe<Scalars['String']>;
  readonly verifiedAt?: Maybe<Scalars['DateTime']>;
  readonly wasJufoParticipant?: Maybe<Scalars['String']>;
  readonly wix_creation_date: Scalars['DateTime'];
  readonly wix_id: Scalars['String'];
};

export type StudentRelationFilter = {
  readonly is?: InputMaybe<StudentWhereInput>;
  readonly isNot?: InputMaybe<StudentWhereInput>;
};

export type StudentWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<StudentWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<StudentWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<StudentWhereInput>>;
  readonly active?: InputMaybe<BoolFilter>;
  readonly authToken?: InputMaybe<StringNullableFilter>;
  readonly authTokenSent?: InputMaybe<DateTimeNullableFilter>;
  readonly authTokenUsed?: InputMaybe<BoolFilter>;
  readonly course?: InputMaybe<CourseListRelationFilter>;
  readonly course_guest?: InputMaybe<Course_GuestListRelationFilter>;
  readonly course_instructors_student?: InputMaybe<Course_Instructors_StudentListRelationFilter>;
  readonly course_participation_certificate?: InputMaybe<Course_Participation_CertificateListRelationFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly expert_data?: InputMaybe<Expert_DataRelationFilter>;
  readonly feedback?: InputMaybe<StringNullableFilter>;
  readonly firstname?: InputMaybe<StringNullableFilter>;
  readonly hasJufoCertificate?: InputMaybe<BoolNullableFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly instructor_screening?: InputMaybe<Instructor_ScreeningRelationFilter>;
  readonly isInstructor?: InputMaybe<BoolFilter>;
  readonly isProjectCoach?: InputMaybe<BoolFilter>;
  readonly isStudent?: InputMaybe<BoolFilter>;
  readonly isUniversityStudent?: InputMaybe<BoolNullableFilter>;
  readonly jufoPastParticipationConfirmed?: InputMaybe<BoolNullableFilter>;
  readonly jufoPastParticipationInfo?: InputMaybe<StringNullableFilter>;
  readonly jufo_verification_transmission?: InputMaybe<Jufo_Verification_TransmissionRelationFilter>;
  readonly languages?: InputMaybe<Enumstudent_Languages_EnumNullableListFilter>;
  readonly lastSentInstructorScreeningInvitationDate?: InputMaybe<DateTimeNullableFilter>;
  readonly lastSentJufoAlumniScreeningInvitationDate?: InputMaybe<DateTimeNullableFilter>;
  readonly lastSentScreeningInvitationDate?: InputMaybe<DateTimeNullableFilter>;
  readonly lastUpdatedSettingsViaBlocker?: InputMaybe<DateTimeNullableFilter>;
  readonly lastname?: InputMaybe<StringNullableFilter>;
  readonly lecture?: InputMaybe<LectureListRelationFilter>;
  readonly match?: InputMaybe<MatchListRelationFilter>;
  readonly module?: InputMaybe<Enumstudent_Module_EnumNullableFilter>;
  readonly moduleHours?: InputMaybe<IntNullableFilter>;
  readonly msg?: InputMaybe<StringNullableFilter>;
  readonly newsletter?: InputMaybe<BoolFilter>;
  readonly openMatchRequestCount?: InputMaybe<IntFilter>;
  readonly openProjectMatchRequestCount?: InputMaybe<IntFilter>;
  readonly participation_certificate?: InputMaybe<Participation_CertificateListRelationFilter>;
  readonly phone?: InputMaybe<StringNullableFilter>;
  readonly project_coaching_screening?: InputMaybe<Project_Coaching_ScreeningRelationFilter>;
  readonly project_field_with_grade_restriction?: InputMaybe<Project_Field_With_Grade_RestrictionListRelationFilter>;
  readonly project_match?: InputMaybe<Project_MatchListRelationFilter>;
  readonly registrationSource?: InputMaybe<Enumstudent_Registrationsource_EnumFilter>;
  readonly screening?: InputMaybe<ScreeningRelationFilter>;
  readonly sentInstructorScreeningReminderCount?: InputMaybe<IntFilter>;
  readonly sentJufoAlumniScreeningReminderCount?: InputMaybe<IntFilter>;
  readonly sentScreeningReminderCount?: InputMaybe<IntFilter>;
  readonly state?: InputMaybe<Enumstudent_State_EnumNullableFilter>;
  readonly subcourse_instructors_student?: InputMaybe<Subcourse_Instructors_StudentListRelationFilter>;
  readonly subjects?: InputMaybe<StringNullableFilter>;
  readonly supportsInDaZ?: InputMaybe<BoolNullableFilter>;
  readonly university?: InputMaybe<StringNullableFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
  readonly verification?: InputMaybe<StringNullableFilter>;
  readonly verifiedAt?: InputMaybe<DateTimeNullableFilter>;
  readonly wasJufoParticipant?: InputMaybe<StringNullableFilter>;
  readonly wix_creation_date?: InputMaybe<DateTimeFilter>;
  readonly wix_id?: InputMaybe<StringFilter>;
};

export type Subcourse = {
  readonly __typename?: 'Subcourse';
  readonly cancelled: Scalars['Boolean'];
  readonly course: Course;
  readonly courseId?: Maybe<Scalars['Int']>;
  readonly createdAt: Scalars['DateTime'];
  readonly id: Scalars['Int'];
  readonly joinAfterStart: Scalars['Boolean'];
  readonly lectures: ReadonlyArray<Lecture>;
  readonly maxGrade: Scalars['Int'];
  readonly maxParticipants: Scalars['Int'];
  readonly minGrade: Scalars['Int'];
  readonly participants: ReadonlyArray<Pupil>;
  readonly participantsCount: Scalars['Float'];
  readonly published: Scalars['Boolean'];
  readonly updatedAt: Scalars['DateTime'];
};

export type SubcourseListRelationFilter = {
  readonly every?: InputMaybe<SubcourseWhereInput>;
  readonly none?: InputMaybe<SubcourseWhereInput>;
  readonly some?: InputMaybe<SubcourseWhereInput>;
};

export type SubcourseOrderByInput = {
  readonly cancelled?: InputMaybe<SortOrder>;
  readonly courseId?: InputMaybe<SortOrder>;
  readonly createdAt?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly joinAfterStart?: InputMaybe<SortOrder>;
  readonly maxGrade?: InputMaybe<SortOrder>;
  readonly maxParticipants?: InputMaybe<SortOrder>;
  readonly minGrade?: InputMaybe<SortOrder>;
  readonly published?: InputMaybe<SortOrder>;
  readonly updatedAt?: InputMaybe<SortOrder>;
};

export type SubcourseRelationFilter = {
  readonly is?: InputMaybe<SubcourseWhereInput>;
  readonly isNot?: InputMaybe<SubcourseWhereInput>;
};

export enum SubcourseScalarFieldEnum {
  Cancelled = 'cancelled',
  CourseId = 'courseId',
  CreatedAt = 'createdAt',
  Id = 'id',
  JoinAfterStart = 'joinAfterStart',
  MaxGrade = 'maxGrade',
  MaxParticipants = 'maxParticipants',
  MinGrade = 'minGrade',
  Published = 'published',
  UpdatedAt = 'updatedAt'
}

export type SubcourseWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<SubcourseWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<SubcourseWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<SubcourseWhereInput>>;
  readonly cancelled?: InputMaybe<BoolFilter>;
  readonly course?: InputMaybe<CourseRelationFilter>;
  readonly courseId?: InputMaybe<IntNullableFilter>;
  readonly course_participation_certificate?: InputMaybe<Course_Participation_CertificateListRelationFilter>;
  readonly createdAt?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<IntFilter>;
  readonly joinAfterStart?: InputMaybe<BoolFilter>;
  readonly lecture?: InputMaybe<LectureListRelationFilter>;
  readonly maxGrade?: InputMaybe<IntFilter>;
  readonly maxParticipants?: InputMaybe<IntFilter>;
  readonly minGrade?: InputMaybe<IntFilter>;
  readonly published?: InputMaybe<BoolFilter>;
  readonly subcourse_instructors_student?: InputMaybe<Subcourse_Instructors_StudentListRelationFilter>;
  readonly subcourse_participants_pupil?: InputMaybe<Subcourse_Participants_PupilListRelationFilter>;
  readonly subcourse_waiting_list_pupil?: InputMaybe<Subcourse_Waiting_List_PupilListRelationFilter>;
  readonly updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SubcourseWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['Int']>;
};

export type Subcourse_Instructors_StudentListRelationFilter = {
  readonly every?: InputMaybe<Subcourse_Instructors_StudentWhereInput>;
  readonly none?: InputMaybe<Subcourse_Instructors_StudentWhereInput>;
  readonly some?: InputMaybe<Subcourse_Instructors_StudentWhereInput>;
};

export type Subcourse_Instructors_StudentWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Subcourse_Instructors_StudentWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Subcourse_Instructors_StudentWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Subcourse_Instructors_StudentWhereInput>>;
  readonly student?: InputMaybe<StudentRelationFilter>;
  readonly studentId?: InputMaybe<IntFilter>;
  readonly subcourse?: InputMaybe<SubcourseRelationFilter>;
  readonly subcourseId?: InputMaybe<IntFilter>;
};

export type Subcourse_Participants_PupilListRelationFilter = {
  readonly every?: InputMaybe<Subcourse_Participants_PupilWhereInput>;
  readonly none?: InputMaybe<Subcourse_Participants_PupilWhereInput>;
  readonly some?: InputMaybe<Subcourse_Participants_PupilWhereInput>;
};

export type Subcourse_Participants_PupilWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Subcourse_Participants_PupilWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Subcourse_Participants_PupilWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Subcourse_Participants_PupilWhereInput>>;
  readonly pupil?: InputMaybe<PupilRelationFilter>;
  readonly pupilId?: InputMaybe<IntFilter>;
  readonly subcourse?: InputMaybe<SubcourseRelationFilter>;
  readonly subcourseId?: InputMaybe<IntFilter>;
};

export type Subcourse_Waiting_List_PupilListRelationFilter = {
  readonly every?: InputMaybe<Subcourse_Waiting_List_PupilWhereInput>;
  readonly none?: InputMaybe<Subcourse_Waiting_List_PupilWhereInput>;
  readonly some?: InputMaybe<Subcourse_Waiting_List_PupilWhereInput>;
};

export type Subcourse_Waiting_List_PupilWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<Subcourse_Waiting_List_PupilWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<Subcourse_Waiting_List_PupilWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<Subcourse_Waiting_List_PupilWhereInput>>;
  readonly pupil?: InputMaybe<PupilRelationFilter>;
  readonly pupilId?: InputMaybe<IntFilter>;
  readonly subcourse?: InputMaybe<SubcourseRelationFilter>;
  readonly subcourseId?: InputMaybe<IntFilter>;
};

export type Subject = {
  readonly __typename?: 'Subject';
  readonly grade: Range;
  readonly name: Scalars['String'];
};

export enum Course_Category_Enum {
  Club = 'club',
  Coaching = 'coaching',
  Revision = 'revision'
}

export enum Course_Coursestate_Enum {
  Allowed = 'allowed',
  Cancelled = 'cancelled',
  Created = 'created',
  Denied = 'denied',
  Submitted = 'submitted'
}

export enum Expert_Data_Allowed_Enum {
  No = 'no',
  Pending = 'pending',
  Yes = 'yes'
}

export enum Log_Logtype_Enum {
  AccessedByScreener = 'accessedByScreener',
  BbbMeeting = 'bbbMeeting',
  CancelledCourse = 'cancelledCourse',
  CancelledSubcourse = 'cancelledSubcourse',
  CertificateRequest = 'certificateRequest',
  ContactExpert = 'contactExpert',
  ContactMentor = 'contactMentor',
  CreatedCourse = 'createdCourse',
  CreatedCourseAttendanceLog = 'createdCourseAttendanceLog',
  DeActivate = 'deActivate',
  FetchedFromWix = 'fetchedFromWix',
  InstructorIssuedCertificate = 'instructorIssuedCertificate',
  MatchDissolve = 'matchDissolve',
  Misc = 'misc',
  ParticipantJoinedCourse = 'participantJoinedCourse',
  ParticipantJoinedWaitingList = 'participantJoinedWaitingList',
  ParticipantLeftCourse = 'participantLeftCourse',
  ParticipantLeftWaitingList = 'participantLeftWaitingList',
  ProjectMatchDissolve = 'projectMatchDissolve',
  PupilInterestConfirmationRequestReminderSent = 'pupilInterestConfirmationRequestReminderSent',
  PupilInterestConfirmationRequestSent = 'pupilInterestConfirmationRequestSent',
  PupilInterestConfirmationRequestStatusChange = 'pupilInterestConfirmationRequestStatusChange',
  UpdatePersonal = 'updatePersonal',
  UpdateProjectFields = 'updateProjectFields',
  UpdateStudentDescription = 'updateStudentDescription',
  UpdateSubjects = 'updateSubjects',
  UpdatedByScreener = 'updatedByScreener',
  UserAccessedCourseWhileAuthenticated = 'userAccessedCourseWhileAuthenticated',
  VerificationRequets = 'verificationRequets',
  Verified = 'verified'
}

export type MatchUq_MatchCompoundUniqueInput = {
  readonly pupilId: Scalars['Int'];
  readonly studentId: Scalars['Int'];
};

export enum Match_Source_Enum {
  Imported = 'imported',
  Matchedexternal = 'matchedexternal',
  Matchedinternal = 'matchedinternal'
}

export enum Project_Field_With_Grade_Restriction_Projectfield_Enum {
  Arbeitswelt = 'Arbeitswelt',
  Biologie = 'Biologie',
  Chemie = 'Chemie',
  GeoUndRaumwissenschaften = 'Geo_und_Raumwissenschaften',
  MathematikInformatik = 'Mathematik_Informatik',
  Physik = 'Physik',
  Technik = 'Technik'
}

export type Project_MatchUq_Pj_MatchCompoundUniqueInput = {
  readonly pupilId: Scalars['Int'];
  readonly studentId: Scalars['Int'];
};

export enum Pupil_Languages_Enum {
  Albanisch = 'Albanisch',
  Andere = 'Andere',
  Arabisch = 'Arabisch',
  Armenisch = 'Armenisch',
  Aserbaidschanisch = 'Aserbaidschanisch',
  Bosnisch = 'Bosnisch',
  Bulgarisch = 'Bulgarisch',
  Chinesisch = 'Chinesisch',
  Deutsch = 'Deutsch',
  Englisch = 'Englisch',
  FranzSisch = 'Franz_sisch',
  Italienisch = 'Italienisch',
  Kasachisch = 'Kasachisch',
  Kurdisch = 'Kurdisch',
  Polnisch = 'Polnisch',
  Portugiesisch = 'Portugiesisch',
  Russisch = 'Russisch',
  Spanisch = 'Spanisch',
  TRkisch = 'T_rkisch',
  Ukrainisch = 'Ukrainisch',
  Vietnamesisch = 'Vietnamesisch'
}

export enum Pupil_Learninggermansince_Enum {
  LessThanOne = 'less_than_one',
  MoreThanFour = 'more_than_four',
  OneToTwo = 'one_to_two',
  TwoToFour = 'two_to_four'
}

export enum Pupil_Projectfields_Enum {
  Arbeitswelt = 'Arbeitswelt',
  Biologie = 'Biologie',
  Chemie = 'Chemie',
  GeoUndRaumwissenschaften = 'Geo_und_Raumwissenschaften',
  MathematikInformatik = 'Mathematik_Informatik',
  Physik = 'Physik',
  Technik = 'Technik'
}

export enum Pupil_Registrationsource_Enum {
  Cooperation = 'cooperation',
  Drehtuer = 'drehtuer',
  Normal = 'normal',
  Other = 'other'
}

export enum Pupil_Schooltype_Enum {
  Berufsschule = 'berufsschule',
  FRderschule = 'f_rderschule',
  Gesamtschule = 'gesamtschule',
  Grundschule = 'grundschule',
  Gymnasium = 'gymnasium',
  Hauptschule = 'hauptschule',
  Other = 'other',
  Realschule = 'realschule'
}

export enum Pupil_State_Enum {
  Bb = 'bb',
  Be = 'be',
  Bw = 'bw',
  By = 'by',
  Hb = 'hb',
  He = 'he',
  Hh = 'hh',
  Mv = 'mv',
  Ni = 'ni',
  Nw = 'nw',
  Other = 'other',
  Rp = 'rp',
  Sh = 'sh',
  Sl = 'sl',
  Sn = 'sn',
  St = 'st',
  Th = 'th'
}

export enum School_Schooltype_Enum {
  Berufsschule = 'berufsschule',
  FRderschule = 'f_rderschule',
  Gesamtschule = 'gesamtschule',
  Grundschule = 'grundschule',
  Gymnasium = 'gymnasium',
  Hauptschule = 'hauptschule',
  Other = 'other',
  Realschule = 'realschule'
}

export enum School_State_Enum {
  Bb = 'bb',
  Be = 'be',
  Bw = 'bw',
  By = 'by',
  Hb = 'hb',
  He = 'he',
  Hh = 'hh',
  Mv = 'mv',
  Ni = 'ni',
  Nw = 'nw',
  Other = 'other',
  Rp = 'rp',
  Sh = 'sh',
  Sl = 'sl',
  Sn = 'sn',
  St = 'st',
  Th = 'th'
}

export enum Student_Languages_Enum {
  Albanisch = 'Albanisch',
  Andere = 'Andere',
  Arabisch = 'Arabisch',
  Armenisch = 'Armenisch',
  Aserbaidschanisch = 'Aserbaidschanisch',
  Bosnisch = 'Bosnisch',
  Bulgarisch = 'Bulgarisch',
  Chinesisch = 'Chinesisch',
  Deutsch = 'Deutsch',
  Englisch = 'Englisch',
  FranzSisch = 'Franz_sisch',
  Italienisch = 'Italienisch',
  Kasachisch = 'Kasachisch',
  Kurdisch = 'Kurdisch',
  Polnisch = 'Polnisch',
  Portugiesisch = 'Portugiesisch',
  Russisch = 'Russisch',
  Spanisch = 'Spanisch',
  TRkisch = 'T_rkisch',
  Ukrainisch = 'Ukrainisch',
  Vietnamesisch = 'Vietnamesisch'
}

export enum Student_Module_Enum {
  Internship = 'internship',
  Other = 'other',
  Seminar = 'seminar'
}

export enum Student_Registrationsource_Enum {
  Cooperation = 'cooperation',
  Drehtuer = 'drehtuer',
  Normal = 'normal',
  Other = 'other'
}

export enum Student_State_Enum {
  Bb = 'bb',
  Be = 'be',
  Bw = 'bw',
  By = 'by',
  Hb = 'hb',
  He = 'he',
  Hh = 'hh',
  Mv = 'mv',
  Ni = 'ni',
  Nw = 'nw',
  Other = 'other',
  Rp = 'rp',
  Sh = 'sh',
  Sl = 'sl',
  Sn = 'sn',
  St = 'st',
  Th = 'th'
}

export type LoginLegacyMutationVariables = Exact<{
  authtoken: Scalars['String'];
}>;


export type LoginLegacyMutation = { readonly __typename?: 'Mutation', readonly loginLegacy: boolean };

export type LoginPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginPasswordMutation = { readonly __typename?: 'Mutation', readonly loginPassword: boolean };

export type UserQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQueryQuery = { readonly __typename?: 'Query', readonly me: { readonly __typename?: 'Me', readonly firstname?: string | null | undefined, readonly lastname?: string | null | undefined } };


export const LoginLegacyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginLegacy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authtoken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginLegacy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authtoken"}}}]}]}}]} as unknown as DocumentNode<LoginLegacyMutation, LoginLegacyMutationVariables>;
export const LoginPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginPasswordMutation, LoginPasswordMutationVariables>;
export const UserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}}]}}]} as unknown as DocumentNode<UserQueryQuery, UserQueryQueryVariables>;