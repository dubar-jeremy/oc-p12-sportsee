// Transformed data interface

export interface UserActivityTranformed {
    sessionNumer: number;
    day: string;
    kilogram: number;
    calories: number;
  }
  
  export interface UserNutritionnalInfosTransformed {
    calorieCount: number;
    carbohydrateCount: number
    lipidCount: number
    proteinCount: number;
  }
  
  export interface UserScoreTransformed {
    score: number | undefined;
  }
  
  export interface UserPerformanceTransformed {
    subject: string;
    value: number;
  }
  
  export interface UserAverageSessionTransformed {
    day: string;
    length: number;
  }