import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import TopContent from '../../components/TopContent/TopContent'
import Table from '../../components/Table/Table'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dsahboard'>
        <Sidebar></Sidebar>
        <div>
            <TopContent></TopContent>
            <Table></Table>
        </div>
    </div>
  )
}

export default Dashboard