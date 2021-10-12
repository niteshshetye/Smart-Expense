import React from 'react'

import { TextField } from '@mui/material'

import { useField } from 'formik'

const TextfieldWrapper = ({name, ...otherProps}) => {
    // console.log('useField: ', useField(name))
    const [field, meta] = useField(name);

    // console.log("field: ", field)
    // console.log("mata: ", mata)
    
    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined'
    };

    if(meta && meta.touched && meta.error){
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
        <>
            <TextField {...configTextfield} />            
        </>
    );
}

export default TextfieldWrapper;
