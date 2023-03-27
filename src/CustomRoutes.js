import layouts from "./layouts";
import pages from "./pages";

const CustomRoutes = [
    {
        path:"*",
        secure:false,
        exact:true,
        layout:layouts.DefaultLayout,
        component:pages.Home,
    }
];
export default CustomRoutes;