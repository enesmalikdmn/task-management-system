import MainLayout from "../layouts/MainLayout";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TaskList from "../../components/TaskList";
import TaskDetails from "../../components/TaskDetails";

const HomePage = () => {
  return (
    <MainLayout
      header={<Header />}
      sidebar={<Sidebar />}
      taskList={<TaskList />}
      taskDetails={<TaskDetails />}
    />
  );
};

export default HomePage;
