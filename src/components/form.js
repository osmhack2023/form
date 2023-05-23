import React, { useRef } from "react";
import { Snackbar, TextField } from "@mui/material";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../config";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import BasicSelect from "./select";
export const Form = () => {
  const siteKey = process.env.REACT_APP_reCAPTCHA_SITE_KEY;
  const recaptchaRef = React.createRef();
  const formRef = useRef(); //ref of entire form component
  const fileRef = useRef(); //ref of file input field
  const [error1, seterror1] = useState(null);
  const [error2, seterror2] = useState(null);
  // const [loading, setloading] = useState(false)
  const [open, setopen] = useState(false);
  const [data, setData] = React.useState({});

  //to validate if the file submitted is int correct extensions
  const fileValidation = () => {
    var fileInput = fileRef.current;

    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions = /(\.pdf|\.png|\.jpg|\.jpeg|\.txt)$/i;

    if (!allowedExtensions.exec(filePath)) {
      alert("Invalid file type! Supported file types: pdf, png, jpg, txt.");
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

  const storage = getStorage();

  let fileItem;
  let fileName;

  //get file from input fild
  const getimg = (e) => {
    fileItem = e.target.files[0];
    fileName = fileItem.name;
  };

  //submit form
  const submit = async (e) => {
    // setloading(true)
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    let formData = new FormData();
    formData.append("token", token);
    // submit to backend API endpoint here
    const response = await fetch("https://v.osac.org.np:9000/api/submit/", {
      method: "POST",
      body: formData,
      mode: "cors",
    });
    const captchaResponse = await response.json();
    console.log("captchresponse", captchaResponse);
    console.log("first", captchaResponse.success);
    if (!captchaResponse.success) {
      seterror1(captchaResponse.message);
      return;
    }
    console.log("file item", fileItem);
    if (fileItem === undefined) {
      seterror1("error");
      setopen(true);
      return;
    }
    const spaceRef = ref(storage, "proposal/" + fileName);

    uploadBytes(spaceRef, fileItem)
      .then((snapshot) => {
        console.log("Uploaded proposal!");
        getDownloadURL(snapshot.ref).then(async (url) => {
          // setimg(url);

          try {
            var createpost = async () => {
              const id = data.name + data.email;

              // Add a new document in collection "teams"
              const adddoc = await setDoc(doc(db, "teams", id), {
                data,
                url: url,
              }).then(() => {
                const info = {
                  ...data,
                  url: url,
                };

                fetch(
                  // "https://sheet.best/api/sheets/ff6db3c6-f2c3-41fc-bec0-05bc1b693381",
                  "https://sheet.best/api/sheets/802a7ace-8d3b-4de4-a311-61928b2bfc31",
                  {
                    method: "POST",
                    mode: "cors",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(info),
                  }
                )
                  .then((r) => r.json())
                  .then((data) => {
                    // The response comes here
                    console.log(data);
                  })
                  .catch((err) => {
                    // Errors are reported there
                    console.log(err);
                    seterror1(err);
                  });
              });
            };
          } catch (err) {
            console.log("the error is" + err);
            seterror2(err);
          }
          createpost();
        });
      })
      .then(() => {
        setopen(true);
        formRef.current.reset();
        // setloading(false)
      });
  };
  return (
    <div className="form flex flex-col pt-5  h-[100vh] w-full px-20 gap-10 bg-white text-left">
      {/* <Loader open={open} /> */}
      <p className="header  font-semibold p-10 text-3xl md:text-5xl text-center font-inter">
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
        className="applicantInfo w-full justify-start items-start pb-[5rem] bg-white"
        onSubmit={submit}
      >
        <p className="text-[34px] py-5 text-center">Applicant Information:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start  py-5">
          <TextField
            name="name"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
            className="w-[45%]  max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            name="phone_number"
            label="Phone Number"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            name="address"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            label="College Name"
            name="college_name"
            variant="outlined"
            className="w-[91%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
        </div>
        <p className="bg-white text-[34px] py-5 text-center">
          Team Information:
        </p>
        <div className=" bg-white inputs flex flex-wrap gap-[15px] items-start justify-start  py-5">
          <TextField
            id="outlined-basic"
            label="Team Name"
            name="team_name"
            variant="outlined"
            className="w-[75%] max-sm:w-[20rem] "
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="short_description"
            label="Short description of your team"
            className="w-[75%]  max-sm:w-[20rem]"
            rows={10}
            multiline={true}
            onChange={update}
            required={true}
          />
        </div>
        <p className="text-[34px] py-5 text-left px-5">Member 1:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            name="member1_name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member1_email"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member1_phone"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member1_github"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <div className="w-[45%] max-sm:w-[20rem]">
            <BasicSelect
              details={{
                title: "food Preferences",
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
                options: ["small", "Medium", "large"],
                memberQueue: 1,
                name: "member1_size",
              }}
              update={updateForDropdown}
            />
          </div>
        </div>
        <p className="text-[34px] py-5 px-5">Member 2:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            name="member2_name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
            onChange={update}
            required={true}
          />
          
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member2_email"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member2_phone"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member2_github"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />

          <div className="w-[45%] max-sm:w-[20rem]">
            <BasicSelect
              details={{
                title: "food Preferences",
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
                options: ["small", "Medium", "large"],
                memberQueue: 2,
                name: "member2_size",
              }}
              update={updateForDropdown}
            />
          </div>
        </div>
        <p className=" text-[34px] py-5 px-5">Member 3:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            name="member3_name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member3_email"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member3_phone"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member3_github"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <div className="w-[45%] max-sm:w-[20rem]">
            <BasicSelect
              details={{
                title: "food Preferences",
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
                options: ["small", "Medium", "large"],
                memberQueue: 3,
                name: "member3_size",
              }}
              update={updateForDropdown}
            />
          </div>
        </div>
        <p className=" text-[34px] py-5 px-5">Member 4:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            name="member4_name"
            variant="outlined"
            onChange={update}
            className="w-[45%] max-sm:w-[20rem] "
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member4_email"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member4_phone"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="member4_github"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
          />

          <div className="w-[45%] max-sm:w-[20rem]">
            <BasicSelect
              details={{
                title: "food Preferences",
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
                options: ["small", "Medium", "large"],
                memberQueue: 4,
                name: "member4_size",
              }}
              update={updateForDropdown}
            />
          </div>
        </div>
        <p className="text-[34px] py-5 px-5">Project Information:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="project_name"
            label="Project Name"
            className="w-[45%] max-sm:w-[20rem]"
            onChange={update}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="project_description"
            label="A short description of your project (minimum 50 words)..."
            className="w-[75%]  max-sm:w-[20rem]"
            rows={10}
            multiline={true}
            onChange={update}
            required={true}
          />

          <div className="proposal flex flex-col justify-start items-start w-full gap-5 mt-5">
            <p className="text-[34px] py-5 ">Proposal File:</p>
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
                getimg(event);
                fileValidation();
              }}
              required={true}
              ref={fileRef}
            />
            <span>
              <em>* Supported file types: pdf, txt, jpg, png.</em>
            </span>

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
          className=" bg-btn w-max py-2 px-10 rounded-xl bg-dblue text-white text-2xl mt-5 ml-0 active:translate-y-1 hover:bg-dgreen"
          // onClick={submit}
        >
          Submit
        </button>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey="6LcNtCQmAAAAAJHXrxbe8UvoMPSwp6XHdR9Qo6cf"
          // sitekey={siteKey}
        />
      </form>
      <Snackbar
        open={open}
        // autoHideDuration={1000}
        onClose={handleclose}
        message={
          error1 === null && error2 === null
            ? "your form has been submitted successfully"
            : "sorry try again..something wrong happened"
        }
      />
    </div>
  );
};

export default Form;
