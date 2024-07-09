import { Navbar } from "../../components/navbar/Navbar"
import { HabitacionesByUsers } from "../../components/habitaciones/HabitacionesByUsers"

import "./dashboardPage.css"
export const DashboardPage = () => {
  return (
    <div>
    <Navbar/>
    <HabitacionesByUsers/>
    </div>
  )
}
