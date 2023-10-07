import React, { useState } from 'react'
import { items } from '../json/items';
import { filters } from '../json/filters';
import FileUploader from './ImageEditor';
import DebouncingReact from '../components/DebouncingReact';
import MyPost from './MyPost';
// import Fridaytest from '../components/Fridaytest';
const MyItems = () => {


    return (
        <div>
            {/* <FileUploader/> */}
            {/* <Fridaytest /> */}
            {/* <NewPost/> */}
            <MyPost/>
            {/* <DebouncingReact/> */}
        </div>
    )
}

export default MyItems