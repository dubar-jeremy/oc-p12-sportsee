import apiConfig from "../../configs/api.config";
import { UserActivityTranformed, UserAverageSessionTransformed, UserNutritionnalInfosTransformed, UserPerformanceTransformed, UserScoreTransformed } from "../../interfaces/user-transformed.interface";
import { userActivity, userAverageSession, userPerformance, users } from "../mock/users";
import { UserInfo } from "../../interfaces/user.interface";
import { UserModel } from "../../model/userModel";


export const getUserInfo = async (userId: string, development: boolean): Promise<UserInfo> => {

  if (development) {
    const response = users.find(user => user.id === parseInt(userId));
    if (!response) throw new Error('User not found in development mode');
    return new Promise(resolve => resolve(UserModel.getUserInfo(response)));
  }

  const response = await apiConfig.get(`/user/${userId}`);
  return UserModel.getUserInfo(response.data.data);
}

export const getUserScore = async (userId: string, development: boolean): Promise<UserScoreTransformed> => {

  if (development) {
    const response = users.find(user => user.id === parseInt(userId));
    if (!response) throw new Error('User not found in development mode');
    return new Promise(resolve => resolve(UserModel.getUserScore(response)));
  }

  const response = await apiConfig.get(`/user/${userId}`);
  return UserModel.getUserScore(response.data.data);
}

export const getNutrionnalUserInfos = async (userId: string, development: boolean): Promise<UserNutritionnalInfosTransformed> => {

  if (development) {
    const response = users.find(user => user.id === parseInt(userId));
    if (!response) throw new Error('User not found in development mode');
    return new Promise(resolve => resolve(UserModel.getNutrionnalUserInfos(response)));
  }

  const response = await apiConfig.get(`/user/${userId}`);
  return UserModel.getNutrionnalUserInfos(response.data.data);
}

export const getUserActivity = async (userId: string, development: boolean): Promise<UserActivityTranformed[]> => {

  if (development) {
    const response = userActivity.find(user => user.userId === parseInt(userId));
    if (!response) throw new Error('User activity not found in development mode');

    return new Promise(resolve => resolve(UserModel.getUserActivity(response)));
  }


  const response = await apiConfig.get(`/user/${userId}/activity`);
  return UserModel.getUserActivity(response.data.data);
}

export const getUserPerformance = async (userId: string, development: boolean): Promise<UserPerformanceTransformed[]> => {

  if (development) {
    const response = userPerformance.find(user => user.userId === parseInt(userId));
    if (!response) throw new Error('User not found in development mode');
    return new Promise(resolve => resolve(UserModel.getUserPerformance(response)));
  }

  const response = await apiConfig.get(`/user/${userId}/performance`);
  return UserModel.getUserPerformance(response.data.data);
}

export const getUserAverageSession = async (userId: string, development: boolean): Promise<UserAverageSessionTransformed[]> => {

  if (development) {
    const response = userAverageSession.find(user => user.userId === parseInt(userId));
    if (!response) throw new Error('User not found in development mode');
    return new Promise(resolve => resolve(UserModel.getUserAverageSession(response)));
  }

  const response = await apiConfig.get(`/user/${userId}/average-sessions`);
  return UserModel.getUserAverageSession(response.data.data);
}
