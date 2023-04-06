"use client";

import { useState } from "react";
import { MdCancel, MdSave } from "react-icons/md";

export default function NewPost() {
  const [comment, setComment] = useState<String>("");

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      <form
        className="bg-neutral-100 rounded-lg p-4 w-full max-w-[800px] mx-5  animate-[wiggle_0.05s_ease-in-out_2]"
        onSubmit={(event) => {}}
      >
        <div className="text-xl mb-4 font-semibold text-neutral-700">
          <p>{`Hey ${"Igor"},`}</p>
          <p className=" ">{"What's on your mind today?"}</p>
        </div>
        <div className="mb-4">
          <textarea
            id="comment"
            role="textbox"
            rows={5}
            className="border rounded px-3 py-2 w-full text-black"
            value={""}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <div className="flex justify-center gap-10 w-full">
          <button
            disabled={false}
            onClick={() => {}}
            type="button"
            className="bg-white hover:bg-neutral-700 hover:text-white text-neutral-700 border-2 font-bold py-2 px-4 rounded-lg"
          >
            <div className="flex items-center gap-1">
              <MdCancel size={30} />
              Cancel
            </div>
          </button>
          <button
            disabled={false}
            type="submit"
            className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-lg"
          >
            <div className="flex items-center gap-1">
              <MdSave size={30} />
              Save
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
