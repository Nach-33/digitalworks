import React from 'react'
import { useParams } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
    const { user_id } = useParams();
    return (
        <div>Dashboard for {user_id}</div>
    )
}

export default Dashboard