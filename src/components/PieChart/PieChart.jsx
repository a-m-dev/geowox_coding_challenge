import React from "react";
import { PieChart as RechartPie, Pie, Cell, Tooltip, Legend } from "recharts";
import { PROPERTY_TYPES } from "constants/PropertyTypes";

import "./styles.scss";
import PieChartManager from "./PieChartManager";

const PieChart = () => {
  const {
    data: { getChartData },
  } = PieChartManager();

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <section className="pie-chart">
        <i className="icon-chart-pie pie-chart__icon" />
        <div className="pie-chart__box">
          <RechartPie width={250} height={250}>
            <Pie
              dataKey="value"
              data={getChartData}
              cx={125}
              cy={125}
              label
              outerRadius={80}
            >
              {getChartData.map((entry, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
              <Tooltip />
            </Pie>
          </RechartPie>

          <div className="pie-chart__box-legend">
            {Object.values(PROPERTY_TYPES).map((type) => (
              <div>
                <span
                  className={`pie-chart__box-legend--${type.toLowerCase()}`}
                >
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PieChart;
