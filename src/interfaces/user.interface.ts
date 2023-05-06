// Row data interface
export interface User {
  id: number;
  userInfos: UserInfo;
  todayScore?: number;
  score?: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number
  }
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  age: number;
}

export interface UserSession {
  day: string;
  kilogram: number;
  calories: number;
}

export interface UserActivity {
  userId: number;
  sessions: UserSession[];
}

export interface AverageSession {
  day: number;
  sessionLength: number;
}

export interface UserAverageSession {
  userId: number;
  sessions: AverageSession[];
}

export interface UserPerformanceKind {
  [key: number]: string;
}

export interface UserPerfomanceValue {
  value: number;
  kind: number;
}

export interface UserPerformance {
  userId: number;
  kind: UserPerformanceKind;
  data: UserPerfomanceValue[];
}