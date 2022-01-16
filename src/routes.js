import React from "react";
import {Routes, Route} from 'react-router-dom'
import {AuthPage} from "./pages/AuthPage";
import {SignUpPage} from "./pages/SignUpPage";
import {ChildrenPage} from "./pages/ChildrenPage";
import {ChildPage} from "./pages/ChildPage";
import {TaskPage} from "./pages/TaskPage";
import {EditTaskPage} from "./pages/EditTaskPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<ChildrenPage/>}/>
                <Route path="child" element={<ChildPage/>}>
                    <Route path=":id" element={<ChildPage/>}/>
                </Route>
                <Route path="child/:childId/task" element={<TaskPage/>}>
                    <Route path=":id" element={<TaskPage/>}/>
                </Route>
                <Route path="child/:childId/edit-task/" element={<EditTaskPage/>}>
                    <Route path=":id?" element={<EditTaskPage/>}/>
                </Route>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<AuthPage/>}/>
            <Route path="signup" element={<SignUpPage/>}/>
        </Routes>
    )
}
