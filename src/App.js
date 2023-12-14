//import logo from "./logo.svg";
import { useState } from "react";
import "./index.css";
export default App;

const data = [
  {
    id: 1,
    text: "Find a full-stack IT job 1",
    complete: false,
  },
  {
    id: 2,
    text: "Find a full-stack IT job 2",
    complete: false,
  },
  {
    id: 3,
    text: "Find a full-stack IT job 3",
    complete: false,
  },
];

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

function Form() {
  const [addText, setAddText] = useState(""); //for input text
  const [addTextArray, setAddTextArray] = useState(data); //for add or delete text
  // const [numUndoneItem, setNumUndoneItem] = useState(addTextArray.length); //for the num of undone
  // const [numCompleteItem, setNumCompleteItem] = useState(addTextArray); //for num to do left
  // const [deleteText, setText]=useState("");
  // const [packed, setPacked] = useState(null);
  //let numItems = addTextArray.length; //get the total number elements in the array
  console.log("the array length is :", addTextArray.length);
  console.log("This is a test message");

  //  let numToDo = addTextArray.length - numCompleteItem.length;
  //  let numTodo = addTextArray.length;
  //console.log("the num of todo is:", numToDo);
  // function handleTotalNumItemTodo() {
  //   setNumUndoneItem(numUndoneItem - 1);
  // }
  // function handleNumCompleteItem() {
  //   // setTextArray((addTextArray)=>addTextArray.filter(id=));
  //   // console.log(id);
  //   setNumCompleteItem((numCompleteItem) =>
  //     numCompleteItem.filter((item) => item.complete === true)
  //   );
  //   console.log(
  //     "after change complete is true, the num of to do:",
  //     numCompleteItem
  //   );

  //   // setNumUndoneItem(numTodoList.length);
  // }
  const numCompleteItem = addTextArray.filter((item) => item.complete !== true); //derived state
  console.log("the todo thing is", numCompleteItem);

  function handleSetCompleteFalse(id) {
    setAddTextArray((addTextArray) =>
      addTextArray.filter((item) =>
        item.id === id ? { ...item, packed: (item.complete = false) } : item
      )
    );
    // console.log(
    //   "after change complete false value, the new array is:",
    //   addTextArray
    // );
    // console.log("after change complete value, the new array length is:", addTextArray.length);

    //  numItems=numItems-1;
    //  setNumUndoneItem(addTextArray.length - 1);
    // handleTotalNumItemTodo();
    // console.log("after set complete is true, num to do is", numUndoneItem);
  }

  function handleSetComplete(id) {
    setAddTextArray((addTextArray) =>
      addTextArray.filter((item) =>
        item.id === id ? { ...item, packed: (item.complete = true) } : item
      )
    );
    console.log("after change complete value, the new array is:", addTextArray);
    // console.log("after change complete value, the new array length is:", addTextArray.length);

    //  numItems=numItems-1;
    //  setNumUndoneItem(addTextArray.length - 1);
    // handleTotalNumItemTodo();
    // console.log("after set complete is true, num to do is", numUndoneItem);
  }

  function handleDeleteText(id) {
    // setTextArray((addTextArray)=>addTextArray.filter(id=));
    console.log(id);
    setAddTextArray((AddTextArray) =>
      AddTextArray.filter((item) => item.id !== id)
    );
    console.log("after delete is:", addTextArray);

    //  setNumUndoneItem(addTextArray.length - 1);
  }

  function handleAddText(newText) {
    setAddTextArray((addTextArray) => [...addTextArray, newText]);

    console.log(addTextArray);
    //  setNumUndoneItem(addTextArray.length + 1);

    // setAddClick(false);
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    //console.log(addTextArray.id);
    // const id = crypto.randomUUID();
    //const id = 4;
    const newText = {
      id: Date.now(),
      text: addText,
      complete: false,
    };
    console.log(newText);

    handleAddText(newText);

    setAddText("");
  }

  return (
    <div>
      <form className="form" onSubmit={handleOnSubmit}>
        <h1 className="title">My To-Do List in 2024 😊</h1>
        <h2 className="sub-title">
          I have {numCompleteItem.length} things left
        </h2>
        <input
          className="input"
          placeholder="Enter your text here "
          value={addText}
          onChange={(e) => {
            setAddText(e.target.value);
          }}
        ></input>
        <button className="button">Add</button>
        <ToDoList
          addTextArray={addTextArray}
          handleDeleteText={handleDeleteText}
          handleSetComplete={handleSetComplete}
          // numUndoneItem={setNumUndoneItem}
          //  handleNumCompleteItem={handleNumCompleteItem}
          //  numUndoneItem={numUndoneItem};
          handleSetCompleteFalse={handleSetCompleteFalse}
        />
      </form>
    </div>
  );
}

function ToDoList({
  addTextArray,
  handleDeleteText,
  handleSetComplete,
  // setNumUndoneItem,
  //  handleNumCompleteItem,
  handleSetCompleteFalse,
}) {
  //const id = crypto.randomUUID();

  return (
    <div className="div">
      {addTextArray.map((item, i) => (
        <Item
          item={item}
          num={i}
          key={i}
          handleDeleteText={handleDeleteText}
          handleSetComplete={handleSetComplete}
          handleSetCompleteFalse={handleSetCompleteFalse}
          // setNumUndoneItem={setNumUndoneItem}
          //   handleNumCompleteItem={handleNumCompleteItem}
        />
      ))}
    </div>
  );
}

function Item({
  item,
  num,
  handleDeleteText,
  handleSetComplete,
  // setNumUndoneItem,
  handleNumCompleteItem,
  handleSetCompleteFalse,
}) {
  //const [packed, setPacked] = useState(null);

  // function setPacked(item) {
  //   return (item.packed = true);
  // }

  return (
    <div className="div">
      <h3
        className="h3"
        style={item.complete ? { textDecoration: "line-through" } : {}}
      >
        {num + 1}.&nbsp;&nbsp;&nbsp;
        {item.text}
        <span
          className="delete"
          onClick={() => {
            handleDeleteText(item.id);
          }}
        >
          &times;
        </span>
        <span>
          <input
            name="done"
            type="checkbox"
            value={item.complete}
            onClick={() => {
              item.complete
                ? handleSetCompleteFalse(item.id)
                : handleSetComplete(item.id);
              //   handleNumCompleteItem(item.id);
            }}
          ></input>

          {/* <h6>finished</h6> */}
        </span>
      </h3>
    </div>
  );
}
