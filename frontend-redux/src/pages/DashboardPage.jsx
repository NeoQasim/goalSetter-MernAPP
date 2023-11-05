import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoalForm from "../Components/GoalForm";
const DashboardPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    // console.log(user);
    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [navigate, user]);

    return (
        <>
            <h1>Dashboard Page of {user.name} </h1>
            <GoalForm>k</GoalForm>
        </>
    );
};

export default DashboardPage;
