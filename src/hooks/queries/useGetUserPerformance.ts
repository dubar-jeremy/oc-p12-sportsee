import PropTypes from 'prop-types';
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getUserPerformance } from "../../data/api/api";
import { UserPerformanceTransformed } from '../../interfaces/user-transformed.interface';


interface UseGetUserPerformanceProps {
  userId: string;
  development: boolean;
}

/**
 * @function useGetUserPerfomance
 * @description this hook is used to get the user perfomance from the api.
 * @param {UseGetUserPerformanceProps} props - The props of the hook.
 * @param {string} props.userId - The id of the user to get the perfomance from.
 * @param {boolean} props.development - The development mode.
 * @returns {UseQueryResult<UserPerformanceTransformed[], unknown>} The result of the query.
 * @example
 * const { data, isLoading, error } = useGetUserPerfomance({ userId: "1", development: true });
  */
export const useGetUserPerfomance = ({ userId, development }: UseGetUserPerformanceProps): UseQueryResult<UserPerformanceTransformed[], unknown> => {
  return useQuery(["getUserPerfomance"], async () => {
    return await getUserPerformance(userId, development);
  }, {
    enabled: Boolean(userId)
  });
}

useGetUserPerfomance.propTypes = {
  userId: PropTypes.string.isRequired,
  development: PropTypes.bool.isRequired
}
