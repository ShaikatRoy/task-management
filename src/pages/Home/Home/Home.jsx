import TaskForm from "./TaskForm";

const Home = () => {
    return (
       <>
        <div>
            <h2 className="text-center font-thin text-5xl text-cyan-700 mt-20">Task Management</h2>
        </div>
        <TaskForm></TaskForm>
       </>
    );
};

export default Home;