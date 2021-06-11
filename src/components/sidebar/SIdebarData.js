import {AiFillDatabase, FcSalesPerformance, AiOutlineStock, AiFillHome} from 'react-icons/all'

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: "Inventories",
        path: "/inventories",
        icon: <AiFillDatabase/>,
        cName: 'nav-text'
    },
    {
        title: "Sales",
        path: "/sales",
        icon: <FcSalesPerformance />,
        cName: 'nav-text'
    },
    {
        title: "Stock",
        path: "/stock",
        icon: <AiOutlineStock />,
        cName: 'nav-text'
    },
]