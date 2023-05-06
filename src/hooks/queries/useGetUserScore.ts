import PropTypes from 'prop-types';
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getUserScore } from "../../data/api/api";
import { UserScoreTransformed } from '../../interfaces/user-transformed.interface';


interface UseGetUserActivityProps {
  userId: string;
  development: boolean;
}

/**
 * @function useGetUserScore
 * @description this hook is used to get the user score from the api.
 * @param {UseGetUserActivityProps} props - The props of the hook.
 * @param {string} props.userId - The id of the user to get the score from.
 * @param {boolean} props.development - The development mode.
 * @returns {UseQueryResult<UserScoreTransformed, unknown>} The result of the query.
 * @example
 * const { data, isLoading, error } = useGetUserScore({ userId: "1", development: true });
 */
export const useGetUserScore = ({ userId, development }: UseGetUserActivityProps): UseQueryResult<UserScoreTransformed, unknown> => {
  return useQuery(["getUserScore"], async () => {
    return await getUserScore(userId, development);
  }, {
    enabled: Boolean(userId)
  });
}

useGetUserScore.propTypes = {
  userId: PropTypes.string.isRequired,
  development: PropTypes.bool.isRequired
}
