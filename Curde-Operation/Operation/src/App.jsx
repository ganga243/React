import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [rno, setRno] = useState(0);

  const [editIndex,setEditIndex]=useState(null)
  const [students, setStudents] = useState([
    { name: "Anu", rno: 1 },
    { name: "Arun", rno: 2 },
    { name: "Ansha", rno: 3 },
  ]);

  const hanldeChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else {
      setRno(parseInt(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !rno) {
      alert("All fields are required");
      return;
    }

    if (!/^\d+$/.test(rno)) {
      alert("Roll no must be a number");
      return;
    }
    if(editIndex){
      setStudents(students.map((student,ind)=>
        editIndex == ind? {name,rno}:students
      ))
      setEditIndex(null)
    }else{
      setStudents([...students, {name, rno}]);
    }
    setName("");
    setRno(0);
  };
  const enableEdit =(index)=>{
    setEditIndex(index)
    setName(students[index].name)
    setRno(students[index].rno)
  }
    
  

  const deleteStudent = (index) => {
    setStudents(
      students.filter((students, ind) => ind != index)
    );
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 m-auto w-2/7 p-4"
      >
        <div className="flex item-center justify-between">
          <label htmlFor="name">Student Name:</label>

          <input
            type="text"
            name="name"
            onChange={hanldeChange}
            className="p-2 border border-zinc-500 rounded-md"
            value={name}
          />
        </div>

        <div className="flex item-center justify-between">
          <label htmlFor="">Roll No.:</label>

          <input
            type="text"
            name="rno"
            onChange={hanldeChange}
            className="p-2 border border-zinc-500 rounded-md"
            value={rno}
          />
        </div>

        <div className="flex item-center justify-center">
          <input
            type="submit"
            value="Add Student"
            className="px-8 pt-2 text-white bg-zinc-500 rounded-md"
          />
        </div>
      </form>

      <div className="w-8/10 m-auto mt-5 flex-col gap-5">
        {students.map((students, index) => (
          <div
            className="flex gap-2 item-center w-1/3 justify-between"
            key={index}>
            <h2>{students.name}</h2>
            <h2>{students.rno}</h2>
          
          <button onClick={()=> enableEdit(index)}
          className="py-1 px-4 bg-red-500  text-white rounded">Edit
          </button>
           
            <button
              onClick={() => deleteStudent(index)}
              className="py-1 px-4 bg-red-500 text-white rounded">
            
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* {students.map(student => <h2>{student.name}</h2>)} */}
    </div>
  );
}

export default App;