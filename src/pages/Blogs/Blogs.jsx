import React from "react";

const Blogs = () => {
  //   const data = useLoaderData();
  //   const { id } = useParams();
  //   const singleAns = data.find((ans) => ans.id === id);

  //   const { question, answer } = singleAns;
  return (
    <div className="w-4/5 mx-auto bg-white my-8 rounded-3xl">
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          What is useState and how does it work in React?
        </div>
        <div className="collapse-content text-sm">
          useState is a Hook in React that allows tract the state of a variable.
          It uses an initial value.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          What is the purpose of useEffect in React?
        </div>
        <div className="collapse-content text-sm">
          useEffect is a Hook that lets you perform side effect like fetch data
          under a dependency array.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          What is a custom hook in React and when should you use one?
        </div>
        <div className="collapse-content text-sm">
          A custom hook is a function that lets you extract and reuse logic
          between components.
        </div>
      </div>{" "}
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Difference about controlled and uncontrolled component. Which one is
          better?
        </div>
        <div className="collapse-content text-sm">
          A controlled component is one where form data is handled by React
          state, while an uncontrolled component relies on the DOM to manage
          form data using refs. Controlled components are preferred for better
          control.
        </div>
      </div>
    </div>
  );
};

export default Blogs;
