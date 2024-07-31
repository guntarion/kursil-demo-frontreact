// react src/Route/Routes.jsx
// src/Pages/KursilPage/GenerateTopicPage.jsx
// src/Routes/Routes.jsx
import SamplePage from '../Pages/Sample Page';
// import HomeBlankPage from '../Components/Pages/PageLayout/homeblank';
import GenerateTopicPage from '../Pages/KursilPage/GenerateTopicPage';
import MainTopicPage from "../Pages/KursilPage/MainTopicPage";
import MainTopicDetailPage from "../Pages/KursilPage/MainTopicDetailPage"; 
// import Task from "../Application/Task";
// import BasicCards from "../Bonus-Ui/Cards/BasicCards/index";

export const routes = [
    {
        path: `${process.env.PUBLIC_URL}/sample-page`, Component: <SamplePage />
    },
    // { path: `${process.env.PUBLIC_URL}/home/:layout`, Component: <HomeBlankPage /> },
    { path: `${process.env.PUBLIC_URL}/kursil/generate-topic`, Component: <GenerateTopicPage /> },
    { path: `${process.env.PUBLIC_URL}/kursil/main-topics`, Component: <MainTopicPage /> },
    { path: `${process.env.PUBLIC_URL}/kursil/main-topic/:id`, Component: <MainTopicDetailPage /> },
    // { path: `${process.env.PUBLIC_URL}/app/task/:layout`, Component: <Task /> },
    // { path: `${process.env.PUBLIC_URL}/card/basiccards/:layout`, Component: <BasicCards /> },
];



