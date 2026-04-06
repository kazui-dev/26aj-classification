// クラス情報の型定義
export interface ClassInfo {
  subject: string;
  dayTime: string;
  teacher: string;
  classroom: string;
}

// 学籍番号末尾3桁の型
export type StudentNumber = number;

// 学期の型定義
export type Semester = '1年前期' | '1年後期';

// 学期ごとのクラス情報
export interface SemesterClasses {
  semester: Semester;
  classes: ClassInfo[];
}
