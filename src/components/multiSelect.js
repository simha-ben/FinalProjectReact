import React, { Component, useEffect, useState } from 'react';
import makeAnimated from 'react-select/animated'
import AsyncSelect from 'react-select/async';
import ProgramService from '../services/Program.service';
import Select from 'react-select';
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        fields: state.ProgramReducer.optionSetValues
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(function MultySelect(props) {

    let { tableName, fields } = props;

    const [options, setOptions] = useState([])

    async function loadOptions() {
        
        var values = fields[tableName]
        //  var values = await ProgramService.getAllTableValues(tableName);
        let vv = values.map((i) => { return { value: i, label: i } });
        setOptions(vv);
    };
    useEffect(
        loadOptions, []
    );

    function handleInputChange(newValue) {
       
        props.onSelect({ key: tableName, value: newValue });
    };


    const animatedComponents = makeAnimated();
    return (
        <div>
            <h5>{props.title || tableName}</h5>
            <Select
                closeMenuOnSelect={true}
                components={animatedComponents}
                defaultValue={[]}
                isMulti
                options={options}
                onChange={handleInputChange}
            />
        </div>
    );
}


);