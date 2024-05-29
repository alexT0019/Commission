//import { useState } from "react";

import NavBar from "../Components/navbar";

import { Input, InputLabel } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';


export default function Form() {
    // let isHiddenUpload = false;
    
    // function isOther(){
    //     if (this.value='Others(Please specify)'){
    //         isHiddenUpload = true;
    //     }
    // }
    
    
    return (
        <div>
            <NavBar />
            <FormControl>
                {/* Name */}
                <InputLabel htmlFor="name" required={true}>Name</InputLabel>
                <Input id="name" placeholder="Name" />

                {/* Email */}
                <InputLabel htmlFor="email" required={true}>Email</InputLabel>
                <Input id="email" placeholder="Email" />
    
                {/* Item(dropdown) */}
                <InputLabel htmlFor="item" required={true}>Item</InputLabel>
                <Select defaultValue={'Please Select'}>
                    <Option value={'Headshot'}>Headshot</Option>
                    <Option value={'Waist Up'}>Waist Up</Option>
                    <Option value={'Full Body'}>Full Body</Option>
                    <Option value={'Illustration'}>Illustration</Option>
                    <Option value={'Others(Please specify)'}>Others(Please specify)</Option>
                </Select>

                {/* Link */}
                <InputLabel htmlFor="link" required={true}>Name</InputLabel>
                <Input id="link" placeholder="Fill in anything if using upload" />

                {/* Upload(disabled) */}                
                <InputLabel id="hiddenUpload" htmlFor="upload" required={true} disabled={true}>Upload</InputLabel>

                {/* Message */}
                <InputLabel htmlFor="message">Message</InputLabel>
                <Input id="message" placeholder="Any additional infomation" />

                {/* Submit */}
                
            </FormControl>
        </div>
    )
}