import * as React from "react";
import { Trash, Trash2 } from "react-feather";

export default function Card(props) {
  const { title, description, onDelete } = props;

  const handleDelete = () => {
    onDelete();
  };

  return (
    <>
      <div className="bg-[#515b69] rounded-lg text-[#DDDDDD] p-2">
        <div className="flex items-center justify-between">
          <div className="card-scroll-bar overflow-x-auto">
            <h1 className="font-extrabold">{title}</h1>
            <h2 className="mt-2">{description}</h2>
          </div>
          <div onClick={handleDelete} className="text-[#F11A7B] cursor-pointer">
            <Trash2 />
          </div>
        </div>
      </div>
    </>
  );
}
