import type { ClassInfo } from '../types';

// 情報システムの基礎のクラス情報
export const INFO_SYSTEMS_CLASSES: Record<number, ClassInfo> = {
  0: {
    subject: '情報システムの基礎',
    dayTime: '水曜2限',
    teacher: '荒川 俊也、中村 繁成',
    classroom: '5号館5302教室',
  },
  1: {
    subject: '情報システムの基礎',
    dayTime: '水曜2限',
    teacher: '川勝 真喜',
    classroom: '5号館5301教室',
  },
  2: {
    subject: '情報システムの基礎',
    dayTime: '水曜2限',
    teacher: '大山 航',
    classroom: '5号館5304教室',
  },
};

// コンピュータプログラミングⅠのクラス情報
export const PROGRAMMING1_CLASSES: Record<number, ClassInfo> = {
  0: {
    subject: 'コンピュータプログラミングⅠ',
    dayTime: '火曜3限',
    teacher: '小濱 隆司',
    classroom: '5号館5908AJ科ネットクラスルーム(C)',
  },
  1: {
    subject: 'コンピュータプログラミングⅠ',
    dayTime: '火曜3限',
    teacher: '宮川 治',
    classroom: '5号館5910AJ科ネットクラスルーム(B)',
  },
  2: {
    subject: 'コンピュータプログラミングⅠ',
    dayTime: '火曜3限',
    teacher: '阿部 清彦',
    classroom: '5号館5911AJ科ネットクラスルーム(A)',
  },
};

// コンピュータプログラミングⅡのクラス情報
export const PROGRAMMING2_CLASSES: Record<number, ClassInfo> = {
  0: {
    subject: 'コンピュータプログラミングⅡ',
    dayTime: '木曜4限',
    teacher: '小濱 隆司',
    classroom: '5号館5908AJ科ネットクラスルーム(C)',
  },
  1: {
    subject: 'コンピュータプログラミングⅡ',
    dayTime: '木曜4限',
    teacher: '宮川 治',
    classroom: '5号館5910AJ科ネットクラスルーム(B)',
  },
  2: {
    subject: 'コンピュータプログラミングⅡ',
    dayTime: '木曜4限',
    teacher: '阿部 清彦',
    classroom: '5号館5911AJ科ネットクラスルーム(A)',
  },
};

// 数理・データサイエンス入門のクラス情報
export const DATA_SCIENCE_CLASSES: Record<string, ClassInfo> = {
  '0,1': {
    subject: '数理・データサイエンス入門',
    dayTime: '木曜3限',
    teacher: '望月 義彦、朱 金暁',
    classroom: '2号館2901教室',
  },
  '2,3': {
    subject: '数理・データサイエンス入門',
    dayTime: '木曜3限',
    teacher: '川勝 真喜',
    classroom: '5号館5401教室',
  },
};
