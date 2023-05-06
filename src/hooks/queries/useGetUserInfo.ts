import { UseQueryResult, useQuery } from "@tanstack/react-query";
import PropTypes from 'prop-types';
import { getUserInfo } from "../../data/api/api";
import { UserInfo } from "../../interfaces/user.interface";


interface UseGetUserActivityProps {
  userId: string;
  development: boolean;
}

/**
 * @function useGetUserInfo
 * @description this hook is used to get the user info from the api.
 * @param {UseGetUserActivityProps} props - The props of the hook.
 * @param {string} props.userId - The id of the user to get the info from.
 * @param {boolean} props.development - The development mode.
 * @returns {UseQueryResult<UserInfo, unknown>} The result of the query.
 * @example
 * const { data, isLoading, error } = useGetUserInfo({ userId: "1", development: true });
  */
export const useGetUserInfo = ({ userId, development }: UseGetUserActivityProps): UseQueryResult<UserInfo, unknown> => {
  return useQuery(["getUserInfo"], async () => {
    return await getUserInfo(userId, development);
  }, {
    enabled: Boolean(userId)
  });
}

useGetUserInfo.propTypes = {
  userId: PropTypes.string.isRequired,
  development: PropTypes.bool.isRequired
}
