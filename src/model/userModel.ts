import { UserActivityTranformed, UserAverageSessionTransformed, UserNutritionnalInfosTransformed, UserPerformanceTransformed, UserScoreTransformed } from "../interfaces/user-transformed.interface";
import { AverageSession, User, UserActivity, UserAverageSession, UserInfo, UserPerfomanceValue, UserPerformance, UserSession } from "../interfaces/user.interface";



/**
 * @class UserModel
 * @description this model is used to extract informations from the user data and return it with the right format.
 * @constructor
*/

export class UserModel {

  /**
   * Retrieves the user information object from the given user data.
   * @param {User} data - The user data to extract information from.
   * @returns {UserInfo} The user information object.
   */
  static getUserInfo(data: User): UserInfo {
    const { userInfos } = data;

    return userInfos;
  }

  /**
   * Retrieves the user score object from the given user data.
   * @param {User} data - The user data to extract score from.
   * @returns {UserScoreTransformed} The user score object transformed.
   */
  static getUserScore(data: User): UserScoreTransformed {
    const { todayScore, score } = data;

    return {
      score: todayScore ?? score,
    }
  }

  /**
   * Retrieves the nutritionnal user information object from the given user data.
   * @param {User} data - The user data to extract nutritionnal information from.
   * @returns {UserNutritionnalInfosTransformed} The nutritionnal user information object.
   */
  static getNutrionnalUserInfos(data: User): UserNutritionnalInfosTransformed {
    const { keyData: nutrionnalInfos } = data;
    return nutrionnalInfos
  }

  /**
 * Retrieves the user activity objects array from the given user activity data.
 * @param {UserActivity} data - The user activity data to extract activity from.
 * @returns {UserActivityTranformed[]} The array of user activity objects transformed.
 */
  static getUserActivity(data: UserActivity): UserActivityTranformed[] {
    const { sessions } = data;

    const result: any = [];

    sessions.map((session: UserSession, index: number) => {
      result.push({
        sessionNumer: index + 1,
        day: session.day,
        kilogram: session.kilogram,
        calories: session.calories,
      });
    });

    return result
  }

  /**
   * Retrieves the user performance objects array from the given user performance data.
   * @param {UserPerformance} userPerformance - The user performance data to extract performance from.
   * @returns {UserPerformanceTransformed[]} The array of user performance objects transformed.
   */
  static getUserPerformance(userPerformance: UserPerformance): UserPerformanceTransformed[] {

    const result: any[] = [];

    userPerformance.data.map((data: UserPerfomanceValue) => {
      result.push({
        subject: userPerformance.kind[data.kind],
        value: data.value,
      })
    });

    return result
  }


  /**
   * Retrieves the user average session objects array from the given user average session data.
   * @param {UserAverageSession} userAverageSession - The user average session data to extract average session from.
   * @returns {UserAverageSessionTransformed[]} The array of user average session objects transformed.
   */
  static getUserAverageSession(userAverageSession: UserAverageSession): UserAverageSessionTransformed[] {
    const days: string[] = ["L", "M", "M", "J", "V", "S", "D"];

    const result: any[] = [];

    userAverageSession.sessions.map((data: AverageSession, index: number) => {
      result.push({
        day: days[index],
        length: data.sessionLength,
      })
    });

    return result;
  }
}
