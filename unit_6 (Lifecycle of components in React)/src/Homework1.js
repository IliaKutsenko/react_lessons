import React from 'react';

class Homework1 extends React.Component {
    constructor(props) {
        console.log(props);
        super();
        this.state = {
            s1: props.p1,
        }
        this.s2 = 201;
    }

    buttonHander = () => {
        let val1 = this.state.s1;
        let val2 = this.s2;
        val1 = val1 + 50;
        val2 = val2 + 50;
        this.setState({ s1: val1 })
        this.s2 = val2;
    }

    componentDidMount() {
        let val1 = this.state.s1;
        let val2 = this.s2;
        val1 = val1 + 5;
        val2 = val2 + 5;
        this.setState({ s1: val1 })
        this.s2 = val2;
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.buttonHander}>Push</button>
                </div>
                <div>
                    {this.state.s1};
                </div>
                <div>
                    {this.s2};
                </div>
            </>
        )
    }
}

export default Homework1;