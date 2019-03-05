import React, {Component} from 'react';

class Child extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    // That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument.
    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <select
                    id="great-names"

                    // The stateless component class uses this new function as an event handler.
                    onChange={this.handleChange}>

                    <option value="Frarthur">Frarthur</option>
                    <option value="Gromulus">Gromulus</option>
                    <option value="Thinkpiece">Thinkpiece</option>
                </select>
            </div>
        );
    }
}

export default Child
