import PropTypes from 'prop-types';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label, ResponsiveContainer } from "recharts";
import { UserActivityTranformed } from '../../../interfaces/user-transformed.interface';

interface ActivityProps {
  userActivity: UserActivityTranformed[]
}

/**
 * @param {UserActivityTranformed[]} userActivity - userActivity
 * @returns {JSX.Element} - JSX element
 * @description - Display the user activity in a bar chart with the calories and the kilogram of the user for each sessions
 * @example
 * <Activity userActivity={userActivity} />
 */
export const Activity = ({ userActivity }: ActivityProps): JSX.Element => {

  return (
    <div className="barChartContainer">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={400}
          height={300}
          data={userActivity}
          margin={{
            top: 5,
            left: 20,
            bottom: 5
          }}
        >
          <Legend verticalAlign="top" align="right" height={40}
            wrapperStyle={{
              top: 15,
              right: 30,
              fontSize: 18,
            }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={({ payload }) => {
            if (payload && payload.length) {
              return (
                <div style={{ backgroundColor: "#ff0000", padding: "5px", color: "#ffffff" }}>
                  <p>{payload[0].value}kg</p>
                  <p>{payload[1].value}cal</p>
                </div>
              );
            }
            return null;
          }}
          wrapperStyle={{ outline: 'none' }}
          />
          <Legend />
          <XAxis
            dataKey="sessionNumer"
            tick={{ fontSize: '10px' }}
            dy={10}
          />
          <YAxis
            orientation="right"
            tick={{ fontSize: '10px', fill: '#282D30' }}
            domain={['dataMin - 2', 'dataMax + 2']}
          />
          <YAxis
            hide={true}
            orientation="left"
            tick={{ fontSize: '10px', fill: '#e60000' }}
            yAxisId="right"
          />

          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={6}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#e60000"
            barSize={6}
            radius={[10, 10, 0, 0]}
            yAxisId="right"
          />
          <text
            x={20}
            y={20}
            fontSize={18}
            dominantBaseline="hanging"
          >
            Activité quotidienne
          </text>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

Activity.propTypes = {
  userActivity: PropTypes.array.isRequired
}