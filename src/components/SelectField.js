import { FieldProps ,ErrorMessage} from 'formik'
import React from 'react'
import Select, { Option, ReactSelectProps } from 'react-select'

 function mapListToOptionSet(val) {
    return { value: val, label: val };
}

export default function SelectField ({
    options,
    field,
    form,
    placeholder}) {
  
   return <div className="form-group">
        <Select placeholder={placeholder || field.name}
            className="form-control"
            isSearchable={true}
            isClearable={true}
            options={options.map(mapListToOptionSet)}
            name={field.name}
            value={options ? options.find(option => option.value === field.value) : ''}
            onChange={(option) => form.setFieldValue(field.name, option.value)}
            onBlur={field.onBlur}
        />

        <ErrorMessage name={field.name} component="div" />
    </div>
    }