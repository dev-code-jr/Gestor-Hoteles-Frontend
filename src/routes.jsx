import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { AuthPage } from "./pages/auth/AuthPage";
import { DashboardHotel } from "./pages/dashboardHotel";
import { DashboardPlataform } from "./pages/dashboardPlataform";
import { MyAccount } from "./pages/myAccount";
import { ReportHotels } from "./components/reports/ReportHotels";
import { ReportHotelPage } from "./pages/dashboardPlataform/ReportHotelPage";
import { EditFormUser } from "../src/components/editUser/EditFormUser";
import { TableUsuarioRegiste } from "./components/TableUsuario/TableUsuarios";
import { TableUsuarioHotel } from "./components/TableHotel/TableUsuariosAdmin";
import { TablaLista } from "./components/TableListaEs/TablaLista";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>},
    {path: '/plataformManager', element: <DashboardPlataform/>},
    {path: '/myAccount', element: <MyAccount/>},
    {path: '/hotelManager', element: <DashboardHotel/>},
    { path: '/reportHotel', element: <ReportHotelPage /> },
    { path: '/editUser', element: <EditFormUser /> },
    { path: '/usuarios', element: <TableUsuarioRegiste /> },
    { path: '/adminsHotel', element: <TableUsuarioHotel /> },
    { path: '/listaInteresados', element: <TablaLista /> },
]

export default routes