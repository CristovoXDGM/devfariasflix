
import React from 'react';
import styled from 'styled-components';

const InputCadadatrar = styled.input`
 opacity:0.5;
 width: 100%;
 height:50px;
 padding:10px;
 border-radius:4px;
 border-color:transparent;
`

const InputTextArea = styled.textarea`
    width: 100%;
    margin-right:20px;
    height:150px;
    opacity:0.5;
    padding:10px;
    border-radius:4px;
    border-color:transparent;
`;

function FormField({ value, onChange, type, name, label, isTextArea }) {
    return (

        isTextArea ?
            <div style={{ paddingTop: 20 }}>
                <label style={{ display: "block", paddingBottom: 10 }} >
                    {label}
                </label>
                <InputTextArea
                    name={name}
                    value={value}
                    onChange={onChange}
                    type={type}

                /> </div> :
            <div style={{ paddingTop: 20 }}>
                <label style={{ display: "block", paddingBottom: 10 }} >
                    {label}
                </label>
                <InputCadadatrar
                    name={name}
                    value={value}
                    onChange={onChange}
                    type={type} />

            </div>


    );
}

export default FormField;