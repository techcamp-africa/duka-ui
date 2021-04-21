import {AiFillDatabase, FcSalesPerformance, AiOutlineStock} from 'react-icons/all'

export const SidebarData = [
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
    }
]