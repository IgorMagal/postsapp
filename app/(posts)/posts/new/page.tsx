"use client";

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { MdCancel, MdSave } from "react-icons/md";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

export default function NewPost() {
  const [comment, setComment] = useState<String>("");
  const [disabled, setDisabled] = useState<Boolean>(false);
  let toastId: string = "toast";
  const session = useSession();

  useEffect(() => {
    if (comment.length > 500) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [comment]);

  const { mutate } = useMutation(
    async (comment: string) => axios.post("/api/posts/new", { comment }),
    {
      onSuccess: (data) => {
        setComment("");
        setDisabled(false);
        console.log(data);
        toast.success("Post created successfully", { id: toastId });
      },
      onError: (error) => {
        setDisabled(false);
        console.log(error);
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data, { id: toastId });
        }
      },
    }
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toastId = toast.loading("Creating your post...", { id: toastId });
    setDisabled(true);
    mutate(comment as string);
  };

  return (
    <form
      className="bg-neutral-100 rounded-lg p-4 w-full max-w-[800px] mx-5 mt-24 animate-[wiggle_0.05s_ease-in-out_2]"
      onSubmit={handleSubmit}
    >
      <div className="text-xl mb-4 font-semibold text-neutral-700">
        <p>{`Hey ${session.data?.user?.name || "you"},`}</p>
        <p className=" ">{"What's on your mind today?"}</p>
      </div>
      <div className="mb-4">
        <textarea
          id="comment"
          role="textbox"
          rows={5}
          className="border rounded px-3 py-2 w-full text-black"
          value={comment as string}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>

      <div className="justify-between flex items-center w-full">
        <p
          className={`mx-2 font-bold ${
            comment.length > 500 ? "text-red-500" : "text-neutral-800"
          }`}
        >{`${comment.length}/500`}</p>
        <div className="flex justify-center gap-4 mx-2">
          <button
            disabled={disabled as boolean}
            onClick={() => setComment("")}
            type="button"
            className="bg-white hover:bg-neutral-700 hover:text-white text-neutral-700 border-2 font-bold py-2 px-4 rounded-lg disabled:opacity-50"
          >
            <div className="flex items-center gap-1">
              <MdCancel size={30} />
              Clear
            </div>
          </button>
          <button
            disabled={disabled as boolean}
            type="submit"
            className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50"
          >
            <div className="flex items-center gap-1">
              <MdSave size={30} />
              Save
            </div>
          </button>
        </div>
      </div>
    </form>
  );
}
