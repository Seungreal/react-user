import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import PropTypes from 'prop-types'
import {createStore} from 'redux'
import {rootReducer} from './root.reducer'
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {Main} from './Main'
import {UserLoginPage,UserJoinPage,UserDetailPage,UserListPage,UserUpdatePage} from './uss/pages'

export const RootRouter = ()=>{
    return <Provider store={createStore(rootReducer)}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/user-login' component={UserLoginPage}/>
                <Route path='/user-join' component={UserJoinPage}/>
                <Route path='/user-detail' component={UserDetailPage}/>
                <Route path='/user-list' component={UserListPage}/>
                <Route path='/user-update' component={UserUpdatePage}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    </Provider>
}