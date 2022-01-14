import React from "react";
import {Routes, Route} from 'react-router-dom'
import {AuthPage} from "./pages/AuthPage";
import {SignUpPage} from "./pages/SignUpPage";
import {ChildrenPage} from "./pages/ChildrenPage";
import {ChildPage} from "./pages/ChildPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<ChildrenPage/>}/>
                <Route path="child" element={<ChildPage/>}>
                    <Route path=":id" element={<ChildPage/>}/>
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
