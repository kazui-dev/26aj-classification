import type { ClassInfo, StudentNumber } from '../types';
import {
  INFO_SYSTEMS_CLASSES,
  PROGRAMMING1_CLASSES,
  PROGRAMMING2_CLASSES,
  DATA_SCIENCE_CLASSES,
} from './classData';

/**
 * 学籍番号末尾3桁からクラス分けを判定する
 * @param studentNumber 学籍番号末尾3桁（1-126）
 * @returns 4科目のクラス情報
 */
export function classifyStudent(studentNumber: StudentNumber): ClassInfo[] {
  // 情報システムの基礎: num % 3
  const infoSystemsClass = INFO_SYSTEMS_CLASSES[studentNumber % 3];

  // コンピュータプログラミングⅠ: num % 3
  const programming1Class = PROGRAMMING1_CLASSES[studentNumber % 3];

  // コンピュータプログラミングⅡ: num % 3
  const programming2Class = PROGRAMMING2_CLASSES[studentNumber % 3];

  // 数理・データサイエンス入門: num % 4
  const dataScienceRemainder = studentNumber % 4;
  const dataScienceKey = dataScienceRemainder <= 1 ? '0,1' : '2,3';
  const dataScienceClass = DATA_SCIENCE_CLASSES[dataScienceKey];

  return [
    infoSystemsClass,
    programming1Class,
    programming2Class,
    dataScienceClass,
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

  // 範囲チェック（1-126）
  if (num < 1 || num > 126) {
    return {
      isValid: false,
      error: '1〜126の範囲で入力してください',
    };
  }

  return {
    isValid: true,
    number: num,
  };
}
