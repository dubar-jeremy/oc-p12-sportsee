import { UseQueryResult, useQuery } from "@tanstack/react-query";
import PropTypes from 'prop-types';
import { getUserAverageSession } from "../../data/api/api";
import { UserAverageSessionTransformed } from "../../interfaces/user-transformed.interface";


interface UseGetUserActivityProps {
  userId: string;
  development: boolean;
}

/**
 * @function useGetUserAverageSession
 * @description this hook is used to get the user average session from the api.
 * @param {UseGetUserActivityProps} props - The props of the hook.
 * @param {string} props.userId - The id of the user to get the average session from.
 * @param {boolean} props.development - The development mode.
 * @returns {UseQueryResult<UserAverageSessionTransformed[], unknown>} The result of the query.
 * @example
 * const { data, isLoading, error } = useGetUserAverageSession({ userId: "1", development: true });
 */
export const useGetUserAverageSession = ({ userId, development }: UseGetUserActivityProps): UseQueryResult<UserAverageSessionTransformed[], unknown> => {
  return useQuery(["getUserAverageSession"], async () => {
    return await getUserAverageSession(userId, development);
  }, {
    enabled: Boolean(userId)
  });
}

useGetUserAverageSession.propTypes = {
  userId: PropTypes.string.isRequired,
  development: PropTypes.bool.isRequired
}

