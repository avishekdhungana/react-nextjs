import { Input } from "@mui/material";
import React, { useState } from "react";

const HabitForm = () =>{
    const[habit, Sethabit]=useState("");
    const[task,newtask]=useState([]);


    const Addhabit =(e) =>{
        e.preventDefault();
        if(habit.trim().length===0)
            return;
        newtask([...task,habit])
        Sethabit("")

    }
        return(
            <div>
                <h1>
                    Habit Tracker
                </h1>
                <Input
                type="text"
                value={habit}
                onChange={(e) =>  Sethabit(e.target.value)}
                />

                <button onClick={Addhabit}>Add</button>

                <ol>
                    {task.map((i,index) =>(
                        <li key={index}>{i}</li>
                    
                    ))
                                }                </ol>
            </div>
        )


    }
export default HabitForm;