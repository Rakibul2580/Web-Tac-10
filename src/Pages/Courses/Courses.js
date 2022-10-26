import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import CoursesCard from "./CoursesCard/CoursesCard";
import Sidebar from "./Sidebar/Sidebar";

const Courses = () => {
  const { items } = useContext(AuthContext);
  return (
    <div className="flex">
      <div>
        <Sidebar items={items} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <CoursesCard key={item.id} item={item}></CoursesCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
