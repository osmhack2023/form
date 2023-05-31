import React, { useRef } from "react";
import { Snackbar, TextField } from "@mui/material";
import { useState } from "react";

import BasicSelect from "./select";
import Telephone from "./tel";

import { useDispatch } from "react-redux";
import { reserActions } from "./reset";
export const Form = () => {

  const dispatch=useDispatch()
  const formRef = useRef(); //ref of entire form component
  const fileRef = useRef(); //ref of file input field
  const [error1, seterror1] = useState(null);
  const [error2, seterror2] = useState(null);
  // const [loading, setloading] = useState(false)
  const [open, setopen] = useState(false);
  const [data, setData] = React.useState({});
  const [file, setFile] = React.useState(null);


  //to validate if the file submitted is int correct extensions
  const fileValidation = () => {
    var fileInput = fileRef.current;

    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions = /(\.pdf|\.png|\.jpg|\.jpeg|\.txt|\.docx)$/i;

    if (!allowedExtensions.exec(filePath)) {
      alert(
        "Invalid file type! Supported file types: pdf, docx, png, jpg, txt."
      );
      fileInput.value = "";
      return false;
    }
  };


  //close snackbar
  const handleclose = () => {
    setopen(false);
  };
  const updateForDropdown = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };
  //to update form data for database after each onchange event
  const update = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //submit form
  const submit = async (e) => {
    e.preventDefault();
    console.log("started");

    console.log("file item", file);
    if (file === undefined) {
      seterror1("error");
      setopen(true);
      return;
    }

    const formDataFile = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formDataFile.append(key, value);
    });
    formDataFile.append("file", file);

    console.log(formDataFile);
    const formSubmit = await fetch(
      "https://v.osac.org.np:9000/api/formsubmit/",
      {
        method: "POST",
        mode: "cors",
        body: formDataFile,
      }
    );
    const formResponse = await formSubmit.json();
    console.log(formResponse);
    if (!formResponse.success) {
      seterror2(formResponse.message);
    } else {
      setopen(true);
      formRef.current.reset();
      dispatch(reserActions.resetState(true))
    }
  };

  return (
    <div className="form flex flex-col pt-5  h-[100vh] w-full  gap-10 bg-white text-left px-5 max-[463px]:pl-2">
      {/* <Loader open={open} /> */}
      <p className="header  font-semibold p-10 text-3xl md:text-5xl text-center font-inter self-center">
        Registration form for OSMHack2023
      </p>
      <p className="desc text-[24px] font-[500]">
        Please fill out the form below to participate in the OSMHack 2023. This
        form will collect essential information about you, your skills, and your
        project ideas. It will help us customize the hackathon experience to
        meet your needs. We appreciate your time and look forward to your active
        participation in this exciting event!
      </p>
      <form
        ref={formRef}
        className="applicantInfo w-full  pb-[5rem] bg-white"
        onSubmit={submit}
      >
        <p className="w-max max-md:text-[20px] text-[34px] py-5 text-center ">
          Applicant Information:
        </p>
        <div className="inputs flex flex-wrap gap-[15px]   py-5">
          <TextField
            name="name"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem]"
            onBlur={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            className="w-[45%]  max-sm:w-[20rem]"
            onBlur={update}
            required={true}
          />
          {/* <TextField
            id="outlined-basic"
            name="phone_number"
            label="Phone Number"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem]"

            onChange={update}
            type="tel"
            pattern="[9]{1}[0-9]{9}"


            required={true}
          /> */}
          <div className="w-[45%] max-sm:w-[20rem]">
            <Telephone
              update={updateForDropdown}
              details={{
                name: "phone_number",
                member_queue: true,
              }}

            />
          </div>
          {/* <input type="tel" name="phone_number" className="w-[45%] max-sm:w-[20rem]" id="" pattern="[9]{1}[0-9]{9}"/> */}
          <TextField
            id="outlined-basic"
            label="Address"
            name="address"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem]"
            onBlur={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            label="College Name"
            name="college_name"
            variant="outlined"
            className="w-[91%] max-sm:w-[20rem]"
            onBlur={update}
            required={true}
          />
        </div>
        <p className="bg-white w-max max-md:text-[20px] text-[34px] py-5 text-center">
          Team Information:
        </p>
        <div className=" bg-white inputs flex flex-wrap gap-[15px]   py-5">
          <TextField
            id="outlined-basic"
            label="Team Name"
            name="team_name"
            variant="outlined"
            className="w-[75%] max-sm:w-[20rem] "
            onBlur={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="short_description"
            label="Team Description"
            placeholder="Short description of your team"
            className="w-[75%]  max-sm:w-[20rem]"
            rows={10}
            multiline={true}
            onBlur={update}
            required={true}
            inputProps={{
              minLength: 200,
            }}
          />
        </div>
        <p className="w-max max-md:text-[20px] text-[34px] py-5 text-left px-5">
          Member 1:
        </p>
        <div className="inputs flex flex-wrap gap-[15px]  px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            name="member1_name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
            onBlur={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member1_email"
            label="Email"
            type="email"
            className="w-[45%] max-sm:w-[20rem]"
            onBlur={update}
            required={true}
          />

          <div className="w-[45%] max-sm:w-[20rem]">
            <Telephone
              update={updateForDropdown}
              details={{
                name: "member1_phone",
                memberQueue: true,
              }}
            />
          </div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member1_github"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            onBlur={update}
          />
          <div className="w-[45%] max-sm:w-[20rem]">
            <BasicSelect
              details={{
                title: "Food Preferences",
                options: ["Veg", "Non-Veg"],
                memberQueue: 1,
                name: "member1_vegornonveg",
              }}
              update={updateForDropdown}
            />
          </div>

          <div className="w-[45%] max-sm:w-[20rem]">
            <BasicSelect
              details={{
                title: "T-Shirt Size",
                options: ["Small", "Medium", "Large"],
                memberQueue: 1,
                name: "member1_size",
              }}
              update={updateForDropdown}
            />
          </div>
        </div>
        <p className="w-max max-md:text-[20px] text-[34px] py-5 px-5">
          Member 2:
        </p>
        <div className="inputs flex flex-wrap gap-[15px]  px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            name="member2_name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
            onBlur={update}
            required={true}
          />

          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member2_email"
            label="Email"
            type="email"
            className="w-[45%] max-sm:w-[20rem]"
            onBlur={update}
            required={true}
          />
          {/* <TextField
            id="outlined-basic"
            variant="outlined"
            name="member2_phone"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          /> */}
          <div className="w-[45%] max-sm:w-[20rem]">
            <Telephone
              update={updateForDropdown}
              details={{
                name: "member2_phone",
                member_queue: true,
              }}
            />
          </div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member2_github"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            onBlur={update}
          />

          <div className="w-[45%] max-sm:w-[20rem]">
            <BasicSelect
              details={{
                title: "Food Preferences",
                options: ["Veg", "Non-Veg"],
                memberQueue: 2,
                name: "member2_vegornonveg",
              }}
              update={updateForDropdown}
            />
          </div>

          <div className="w-[45%] max-sm:w-[20rem]">
            <BasicSelect
              details={{
                title: "T-Shirt Size",
                options: ["Small", "Medium", "Large"],
                memberQueue: 2,
                name: "member2_size",
              }}
              update={updateForDropdown}
            />
          </div>
        </div>
        <p className=" w-max max-md:text-[20px] text-[34px] py-5 px-5">
          Member 3:
        </p>
        <div className="inputs flex flex-wrap gap-[15px]  px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            name="member3_name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
            onBlur={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member3_email"
            label="Email"
            type="email"
            className="w-[45%] max-sm:w-[20rem]"
            onBlur={update}
          />
          {/* <TextField
            id="outlined-basic"
            variant="outlined"
            name="member3_phone"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          /> */}
          <div className="w-[45%] max-sm:w-[20rem]">
            <Telephone
              update={updateForDropdown}
              details={{
                name: "member3_phone",
                member_queue: false,
              }}
            />
          </div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member3_github"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            onBlur={update}
          />
          <div className="w-[45%] max-sm:w-[20rem]">
            <BasicSelect
              details={{
                title: "Food Preferences",
                options: ["Veg", "Non-Veg"],
                memberQueue: 3,
                name: "member3_vegornonveg",
              }}
              update={updateForDropdown}
            />
          </div>
          <div className="w-[45%] max-sm:w-[20rem]">
            <BasicSelect
              details={{
                title: "T-Shirt Size",
                options: ["Small", "Medium", "Large"],
                memberQueue: 3,
                name: "member3_size",
              }}
              update={updateForDropdown}
            />
          </div>
        </div>
        <p className=" w-max max-md:text-[20px] text-[34px] py-5 px-5">
          Member 4:
        </p>
        <div className="inputs flex flex-wrap gap-[15px]  px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            name="member4_name"
            variant="outlined"
            onBlur={update}
            className="w-[45%] max-sm:w-[20rem] "
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member4_email"
            type="email"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
            onBlur={update}
          />
          {/* <TextField
            id="outlined-basic"
            variant="outlined"
            name="member4_phone"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          /> */}
          <div className="w-[45%] max-sm:w-[20rem]">
            <Telephone
              update={updateForDropdown}
              details={{
                name: "member4_phone",
                member_queue: false,
              }}
            />
          </div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member4_github"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            onBlur={update}
          />

          <div className="w-[45%] max-sm:w-[20rem]">
            <BasicSelect
              details={{
                title: "Food Preferences",
                options: ["Veg", "Non-Veg"],
                memberQueue: 4,
                name: "member4_vegornonveg",
              }}
              update={updateForDropdown}
            />
          </div>
          <div className="w-[45%] max-sm:w-[20rem]">
            <BasicSelect
              details={{
                title: "T-Shirt Size",
                options: ["Small", "Medium", "Large"],
                memberQueue: 4,
                name: "member4_size",
              }}
              update={updateForDropdown}
            />
          </div>
        </div>
        <p className="w-max max-md:text-[20px] text-[34px] py-5 px-5">
          Project Information:
        </p>
        <div className="inputs flex flex-wrap gap-[15px]  px-5 py-5">
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="project_name"
            label="Project Name"
            className="w-[45%] max-sm:w-[20rem]"
            onBlur={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="project_description"
            placeholder="A short description of your project (minimum 50 words)..."
            label="Project Description"
            className="w-[75%]  max-sm:w-[20rem]"
            rows={10}
            multiline={true}
            onBlur={update}
            required={true}
            inputProps={{
              minLength: 200,
            }}
          />

          <div className="proposal flex flex-col justify-start items-start w-full gap-5 mt-5">
            <p className="w-max max-md:text-[20px] text-[34px] py-5 ">
              Proposal File:
            </p>
            <p className="text-xl font-semibold ">
              Drop a file explaining the projects in detail. Include following
              points:{" "}
            </p>
            <ul className="flex flex-col justify-start items-start list-disc px-4 py-1">
              <li>Project name </li>
              <li> Project description</li>
              <li>The problem you will solve with this project </li>
              <li>Platforms or technologies to be used </li>
              <li>
                How would you use OpenStreetMap in this project{" "}
                <em className="font-semibold"> [Most Important]</em>
              </li>
              <li>
                Some flowchart or architecture of your project/product
                <em className="font-semibold"> [Optional]</em>
              </li>
              <li>
                Previous hackathon experience of any member{" "}
                <em className="font-semibold"> [Optional]</em>
              </li>
            </ul>
            <input
              type="file"
              name="proposal"
              id="kj"
              onChange={(event) => {
                setFile(event.target.files[0]);
                fileValidation();
              }}
              required={true}
              ref={fileRef}
            />
            <span>
              <em>* Supported file types: pdf,docx,txt, jpg, png.</em>
            </span>
            <a

             href="https://drive.google.com/file/d/1al2xo56p5Ys9K6Oo_DhqS6dxInooDQdY" target="_"  className="w-max px-2 py-2 rounded-xl cursor-pointer hover:bg-dgreen text-white bg-rednew">Get template of proposal</a>

            <div className="flex gap-5 items-center justify-center">
              <input
                type="checkbox"
                name=""
                id=""
                required={true}
                className=""
              />
              <p>
                I agree to the terms and conditions and will follow code of
                conduct.
              </p>
            </div>
          </div>
        </div>

        <button
          className=" bg-btn w-max py-2 px-10   rounded-xl bg-dblue text-white text-2xl mt-5 ml-5 active:translate-y-1 hover:bg-dgreen"
          // onClick={submit}
        >
          Submit
        </button>
      </form>
      <Snackbar
        open={open}
        // autoHideDuration={1000}
        onClose={handleclose}
        message={
          error1 === null && error2 === null
            ? "Form Submitted Successfully!"
            : "Something went Wrong :(, Try with google forms instead!"
        }
      />
    </div>
  );
};

export default Form;
