import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskLists from "./TaskLists";

export default function TaskBoard() {
  return (
    <section className="mb-20">
      <div className="container">
        {/* Search Task */}
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* TaskActions */}
          <TaskActions />
          {/* TaskLists */}
          <TaskLists />
        </div>
      </div>
    </section>
  );
}
