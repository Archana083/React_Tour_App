import React, { useEffect, useState } from "react";
import smile from "../../src/assets/img/smile.png";
import  docs  from "../../src/assets/img/document.png";
import  headphone  from "../../src/assets/img/headphones.png";
import  people  from "../../src/assets/img/user.png";


const Counter = () => {
    const [students, setStudents] = useState(0);
    const [acadProgram, setAcadProgram] = useState(0);
    const [awards, setAwards] = useState(0);
    const [certStudent, setCertStudent] = useState(0);

    const targetValues = {
        students: 8232,
        acadProgram: 521,
        awards: 163,
        certStudent: 93,
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setStudents((prev) => (prev < targetValues.students ? prev + 1 : prev));
            setAcadProgram((prev) =>
                prev < targetValues.acadProgram ? prev + 1 : prev
            );
            setAwards((prev) => (prev < targetValues.awards ? prev + 1 : prev));
            setCertStudent((prev) =>
                prev < targetValues.certStudent ? prev + 1 : prev
            );

            // Stop the interval when all counters reach their targets
            if (
                students >= targetValues.students &&
                acadProgram >= targetValues.acadProgram &&
                awards >= targetValues.awards &&
                certStudent >= targetValues.certStudent
            ) {
                clearInterval(interval);
            }
        }, 50); // Adjust the speed of counting by changing the interval

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [students, acadProgram, awards, certStudent]);

    const count = [
        {
            img:smile,
            number:students,
            para:'Enrolled Students'
        },
        {
            img:docs,
            number:acadProgram,
            para:'Academic Programs'
        },
        {
            img:headphone,
            number:awards,
            para:'Winning Award'
        },
        {
            img:people,
            number:certStudent,
            para:'Certified Students'
        },
    ]

    return (
        <div className="container">
            <div className="title">
                <h3>Some Fun Fact </h3>
                <h2>
                    Our Great <span> Achievement</span>
                </h2>
            </div>
            <div className="row my-5">
                {count.map((item, index) => (
                    <div className="col-md-3 col-sm-6" key={index}>
                        <div className="px-2 counter d-flex gap-2 align-items-center">
                            <div className="img_wrap">
                                <img src={item.img} className="w-100" alt={item.para} />
                            </div>
                            <div>
                                <h2>{item.number}</h2>
                                <p>{item.para}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Counter;
