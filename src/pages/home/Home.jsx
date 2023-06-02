import React from 'react'
import './Home.css'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { userdata } from '../../dummytData'
import WidgetsSm from '../../components/WidgetsSm/WidgetsSm'
import WidgetsLg from '../../components/WidgetsLg/WidgetsLg'

export default function home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data={userdata} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetsSm />
          <WidgetsLg />
        </div>
    </div>
  )
}
