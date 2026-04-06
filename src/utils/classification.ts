import type { ClassInfo, StudentNumber, SemesterClasses } from '../types';
import {
  FOUNDATIONS_OF_INFORMATION_SYSTEMS_CLASSES,
  COMPUTER_PROGRAMMING_1_CLASSES,
  COMPUTER_PROGRAMMING_2_CLASSES,
  INTRODUCTION_TO_MATHEMATICS_AND_DATA_SCIENCE_CLASSES,
  FOUNDATIONS_OF_INFORMATION_AND_COMMUNICATION_CLASSES,
  DIGITAL_CIRCUIT_CLASSES,
  COMPUTER_PROGRAMMING_3_CLASSES,
  PROBABILITY_AND_STATISTICS_CLASSES,
} from './classData';

/**
 * 学籍番号末尾3桁からクラス分けを判定する
 * @param studentNumber 学籍番号末尾3桁（1-999）
 * @returns 学期ごとにグループ化されたクラス情報
 */
export function classifyStudent(studentNumber: StudentNumber): SemesterClasses[] {
  // 1年前期
  const firstSemesterClasses: ClassInfo[] = [
    FOUNDATIONS_OF_INFORMATION_SYSTEMS_CLASSES[studentNumber % 3],
    COMPUTER_PROGRAMMING_1_CLASSES[studentNumber % 3],
    COMPUTER_PROGRAMMING_2_CLASSES[studentNumber % 3],
    INTRODUCTION_TO_MATHEMATICS_AND_DATA_SCIENCE_CLASSES[
      studentNumber % 4 <= 1 ? '0,1' : '2,3'
    ],
  ];

  // 1年後期
  const secondSemesterClasses: ClassInfo[] = [
    FOUNDATIONS_OF_INFORMATION_AND_COMMUNICATION_CLASSES[studentNumber % 2],
    DIGITAL_CIRCUIT_CLASSES[studentNumber % 3],
    COMPUTER_PROGRAMMING_3_CLASSES[studentNumber % 3],
    PROBABILITY_AND_STATISTICS_CLASSES[studentNumber % 2],
  ];

  return [
    {
      semester: '1年前期',
      classes: firstSemesterClasses,
    },
    {
      semester: '1年後期',
      classes: secondSemesterClasses,
    },
  ];
}

/**
 * 入力値が有効な学籍番号末尾3桁かどうかを検証
 * @param value 入力値
 * @returns 検証結果
 */
export function validateStudentNumber(value: string): {
  isValid: boolean;
  error?: string;
  number?: StudentNumber;
} {
  // 空文字チェック
  if (!value.trim()) {
    return {
      isValid: false,
      error: '学籍番号末尾3桁を入力してください',
    };
  }

  // 数値チェック
  const num = parseInt(value, 10);
  if (isNaN(num)) {
    return {
      isValid: false,
      error: '数値を入力してください',
    };
  }

  // 範囲チェック（1-999）
  if (num < 1 || num > 999) {
    return {
      isValid: false,
      error: '1〜999の範囲で入力してください',
    };
  }

  return {
    isValid: true,
    number: num,
  };
}
