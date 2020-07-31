import React from 'react';
import styled, { css } from 'styled-components';

const Label = styled.label``;

Label.Text = styled.span`
   color: #E5E5E5;
  height: 120px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const InputCadadatrar = styled.input`
  
 background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 14px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
        const hasValue = value.length > 0;
        return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
    }
    }
  
`;

const InputTextArea = styled.textarea`
     background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 150px;
  font-size: 14px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
        const hasValue = value.length > 0;
        return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
    }
    }
`;



const Wrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

function FormField({
    value, onChange, type, name, label, isTextArea,
}) {
    const fieldId = `id_${name}`;
    return (

        isTextArea ? (
            <Wrapper style={{ paddingTop: 20 }}>
                <Label>
                    <InputTextArea

                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}

                    />
                    <Label.Text>
                        {label}
                            :
                            </Label.Text>
                </Label>
            </Wrapper>
        )
            : (
                <Wrapper style={{ paddingTop: 20 }}>
                    <Label>
                        <InputCadadatrar

                            type={type}
                            value={value}
                            name={name}
                            onChange={onChange}
                        />
                        <Label.Text>
                            {label}
                            :
                            </Label.Text>
                    </Label>
                </Wrapper>
            )

    );
}



export default FormField;
