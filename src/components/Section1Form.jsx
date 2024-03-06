// ./src/components/Section1Form.jsx

"use client";

import { useState } from "react";

export default function Section1Form() {
  const [year, setYear] = useState("");
  const [grade, setGrade] = useState("");
  const [nameOfClub, setNameOfClub] = useState("");
  const [numInClub, setNumInClub] = useState("");
  const [clubLeader, setClubLeader] = useState("");
  const [meetingsHeld, setMeetingsHeld] = useState("");
  const [meetingsAttended, setMeetingsAttended] = useState("");

  
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Club leader: ", clubLeader);


    const res = await fetch("api/section1", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year, 
        grade, 
        nameOfClub, 
        numInClub, 
        clubLeader, 
        meetingsHeld, 
        meetingsAttended,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setYear("");
      setGrade("");
      setNameOfClub("");
      setNumInClub("");
      setClubLeader("");
      setMeetingsHeld("");
      setMeetingsAttended("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
      
        <div>
          <label htmlFor="year">Full Name</label>
          <input
            onChange={(e) => setYear(e.target.value)}
            value={year}
            type="string"
            id="year"
            placeholder="John Doe"
          />
        </div>


        <div>
          <label htmlFor="grade">Grade</label>
          <input
            onChange={(e) => setGrade(e.target.value)}
            value={grade}
            type="number"
            id="grade"
            placeholder="1"
          />
        </div>

        <div>
          <label htmlFor="nameOfClub">Name of Club</label>
          <input
            onChange={(e) => setNameOfClub(e.target.value)}
            value={nameOfClub}
            type="text"
            id="nameOfClub"
            placeholder="John Doe"
          />
        </div>


        <div>
          <label htmlFor="numInClub">Number in Club</label>
          <input
            onChange={(e) => setNumInClub(e.target.value)}
            value={numInClub}
            type="number"
            id="numInClub"
            placeholder="1"
          />
        </div>

        <div>
          <label htmlFor="clubLeader">Club Leader</label>
          <input
            onChange={(e) => setClubLeader(e.target.value)}
            value={clubLeader}
            type="text"
            id="clubLeader"
            placeholder="John Doe"
          />
        </div>


        <div>
          <label htmlFor="meetingsHeld">Meetings Held</label>
          <input
            onChange={(e) => setMeetingsHeld(e.target.value)}
            value={meetingsHeld}
            type="number"
            id="meetingsHeld"
            placeholder="1"
          />
        </div>


        <div>
          <label htmlFor="meetingsAttended">Meetings Attended</label>
          <input
            onChange={(e) => setMeetingsAttended(e.target.value)}
            value={meetingsAttended}
            type="text"
            id="meetingsAttended"
            placeholder="1"
          />
        </div>



        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Create
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}