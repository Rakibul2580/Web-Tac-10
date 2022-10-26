import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import CoursesCard from "./CoursesCard/CoursesCard";
import Sidebar from "./Sidebar/Sidebar";

const Courses = () => {
  const { items } = useContext(AuthContext);
  return (
    <div className="flex justify-center">
      <div className="mt-5">
        <Sidebar items={items} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
        {items.map((item) => (
          <CoursesCard key={item.id} item={item}></CoursesCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
