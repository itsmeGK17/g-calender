import React, { useState } from "react";

const Gcalender = () => {
  const now = new Date();
  const [weekDays, setWeekDays] = useState([
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ]);
  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const getAlldate = (month, year) => {
    let date = new Date(year, month, 1);
    let pueshedDate = [];
    while (date.getMonth() === month) {
      pueshedDate.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    // console.log("getdateall", pueshedDate);
    return pueshedDate;
  };

  let onlydateGet = getAlldate(5, 2024);

  let dates = [];
  onlydateGet.forEach((ele) => {
    if (ele) {
      let allDated = ele.toISOString().split("T")[0];
      dates.push(allDated);
    }
  });

  console.log("dates", dates);
  const handleInput = (e) => {
    setEvent(e.target.value);
  };
  const handleDateClick = (dated) => {
    setSelectedDate(dated);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="bg-light shadow-sm text-black p-2 ">
        <h3>G-calender</h3>
        <div className="d-flex align-items-center justify-content-end">
          <button
            className="btn btn-outline-primary"
            style={{ marginTop: "-45px" }}
          >
            Back
          </button>
        </div>
      </div>

      <div className="mt-3">
        <div className="d-flex align-items-center justify-content-sm-evenly ">
          <h4 style={{ textDecoration: "underline" }}>
            {new Date().toDateString()}
          </h4>
          <div className="mb-2" style={{ paddingLeft: "400px" }}>
            <button className="btn btn-outline-primary">Prev</button>
            <button className="btn btn-outline-primary">Next</button>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        {weekDays?.map((weekday, index) => {
          return (
            <div
              style={{
                height: "30px",
                width: "150px",
                border: "0.5px solid",
              }}
              key={index}
            >
              {weekday}
            </div>
          );
        })}
        <div className="d-flex align-items-center justify-content-center flex-wrap col-lg-7">
          
          {dates.map((date, index) => {
            const dated = new Date(
              now.getFullYear(),
              now.getMonth(),
              now.getDate() + 1
            );
            return (
              <div
                style={{
                  height: "150px",
                  width: "150px",
                  border: "0.5px solid",
                }}
                onClick={() => handleDateClick(dated)}
              >
                {date}
              </div>
            );
          })}
        </div>
        {open && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              border: "1px solid",
              width: "200px",
              height: "200px",
              backgroundColor: " rgba(100, 100, 111,1 )",
              marginTop: "100px",
              boxShadow: "0px 7px 29px 0px",
            }}
          >
            <h5 style={{ textDecorationLine: "underline" }}>Add event</h5>
            <h5 style={{ marginTop: "-13px" }}>
              Date:-{selectedDate?.toLocaleDateString()}
            </h5>
            <input
              type="text"
              name="event"
              value={event}
              placeholder="Add Event Title"
              onChange={handleInput}
            />

            <button
              className="btn btn-primary btn-sm m-5 "
              onClick={handleClose}
            >
              close
            </button>

            <button className="btn btn-primary btn-sm" onClick={handleSave}>
              Save
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Gcalender;
