import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskLists from "./TaskLists";

export default function TaskBoard() {
  return (
    <section class="mb-20">
      <div className="container">
        {/* Search Task */}
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            {/* TaskActions */}
            <TaskActions />
          </div>
          <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
              <thead>
                <tr>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                    {" "}
                    Title{" "}
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                    {" "}
                    Description{" "}
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                    {" "}
                    Tags{" "}
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                    {" "}
                    Priority{" "}
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                    {" "}
                    Options{" "}
                  </th>
                </tr>
              </thead>
              {/* TaskLists */}
              <TaskLists />
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
