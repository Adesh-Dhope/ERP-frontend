import React from 'react'
import Header from '../layout/Header'
import DataCards from '../features/DataCards'
import PiechartParent from '../piecharts/PiechartParent'
const Dashboard = () => {
  return (
    <div>

        <Header />
        <DataCards />
        <PiechartParent />
    </div>
  )
}

export default Dashboard