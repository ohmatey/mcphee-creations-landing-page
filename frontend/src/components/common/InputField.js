import React from 'react'
import styled from '@emotion/styled'
import { Label, Input } from '@rebass/forms'

const Field = styled.div`
  margin-bottom: 16px;
`

const InputField = ({
  id,
  name,
  type,
  label,
  placeholder,
  required = false
}) => (
  <Field>
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  </Field>
)

export default InputField
