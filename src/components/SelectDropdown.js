import React from 'react';
import './SelectDropdown.css';
import Select from 'react-select';


class SelectDropdown extends React.Component {

    constructor(props) {
        super();
        this.state = {
            selectedOption: null,
        };
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    render() {
        return (
            <div class="select-dropdown">
                <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={this.props.options}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}

export default SelectDropdown;