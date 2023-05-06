import PropTypes from 'prop-types';
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getUserActivity } from "../../data/api/api";
import { UserActivityTranformed } from '../../interfaces/user-transformed.interface';


interface UseGetUserActivityProps {
  userId: string;
  development: boolean;
}

/**
 * @function useGetUserActivity
 * @description this hook is used to get the user activity from the api.
 * @param {UseGetUserActivityProps} props - The props of the hook.
 * @param {string} props.userId - The id of the user to get the activity from.
 * @param {boolean} props.development - The development mode.
 * @returns {UseQueryResult<UserActivityTranformed[], unknown>} The result of the query.
 * @example
 * const { data, isLoading, error } = useGetUserActivity({ userId: "1", development: true });
 */

export const useGetUserActivity = ({ userId, development }: UseGetUserActivityProps): UseQueryResult<UserActivityTranformed[], unknown> => {
  return useQuery(["getUserActivity"], async () => {
    return await getUserActivity(userId, development);
  }, {
    enabled: Boolean(userId)
  });
}

useGetUserActivity.propTypes = {
  userId: PropTypes.string.isRequired,
  development: PropTypes.bool.isRequired
}

