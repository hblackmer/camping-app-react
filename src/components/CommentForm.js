import React, { Component, Fragment } from 'react';
import { 
    Button,
    Label,
    Modal, ModalHeader, ModalBody
} from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
          };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ 
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() { 
        return (
            <Fragment>
                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-lg fa-pencil" /> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select 
                                    model=".rating" 
                                    id="rating"
                                    name="rating"
                                    className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text
                                    model=".author"
                                    id="author"
                                    name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required, 
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="text">Comment</Label>
                                <Control.textarea 
                                    model=".text"
                                    id="text"
                                    name="text"
                                    rows="6"
                                    className="form-control"
                                />
                            </div>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default CommentForm;