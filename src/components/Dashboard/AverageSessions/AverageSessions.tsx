import PropTypes from 'prop-types';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { UserAverageSessionTransformed } from '../../../interfaces/user-transformed.interface';

interface AverageSessionsProps {
  averageSessions: UserAverageSessionTransformed[]
}

/**
 * @param {AverageSessionsProps[]} averageSessions - averageSessions
 * @returns {JSX.Element} - JSX element
 * @description - Display the average sessions of the user in a line chart
 * @example
 * <AverageSessions averageSessions={averageSessions} />
 */
export const AverageSessions= ({ averageSessions }: AverageSessionsProps): JSX.Element => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={averageSessions}
        margin={{
          top: 50,
          right: 10,
          left: 10,
          bottom: 5,
        }}
        style={{ backgroundColor: 'red' }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: '10px', fill: 'white' }}
          dy={10}
        />
        <Tooltip
          content={({ payload, active }) => {
            if (active) {
              return (
                <div className='tooltip'>
                  {`${payload?.[0].payload.length} min`}
                </div>
              )
            }
            return null
          }}
          wrapperStyle={{ outline: 'none' }}
        />
        <Line
          type="monotone"
          dataKey="length"
          stroke="white"
          strokeWidth={2}
          dot={false}
        />
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          className='label'
          fill="white"
        >
          Durée moyenne des
        </text>
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          className='label'
          fill="white"
        >
          sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
}

AverageSessions.propTypes = {
  averageSessions: PropTypes.array.isRequired
};