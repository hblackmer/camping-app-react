import React, { Component } from 'react';
import { Button } from 'reactstrap'

class CommentForm extends Component {

    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div>
                <Button outline>
                    <i className="fa fa-lg fa-pencil" /> Submit Comment
                </Button>
            </div>
        );
    }
}

export default CommentForm;