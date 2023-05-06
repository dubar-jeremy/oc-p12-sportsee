import PropTypes from 'prop-types';
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getNutrionnalUserInfos } from "../../data/api/api";
import { UserNutritionnalInfosTransformed } from '../../interfaces/user-transformed.interface';


interface UseGetUserProps {
  userId: string;
  development: boolean;
}

/**
 * @function useGetNutrionnalUserInfos
 * @description this hook is used to get the nutritionnal user informations from the api.
 * @param {UseGetUserProps} props - The props of the hook.
 * @param {string} props.userId - The id of the user to get the nutritionnal informations from.
 * @param {boolean} props.development - The development mode.
 * @returns {UseQueryResult<UserNutritionnalInfosTransformed, unknown>} The result of the query.
 * @example
 * const { data, isLoading, error } = useGetNutrionnalUserInfos({ userId: "1", development: true });
*/
export const useGetNutrionnalUserInfos = ({ userId, development }: UseGetUserProps): UseQueryResult<UserNutritionnalInfosTransformed, unknown> => {
  return useQuery(["getUser"], async () => {
    return await getNutrionnalUserInfos(userId, development);
  }, {
    enabled: Boolean(userId)
  });
}

useGetNutrionnalUserInfos.propTypes = {
  userId: PropTypes.string.isRequired,
  development: PropTypes.bool.isRequired
}
