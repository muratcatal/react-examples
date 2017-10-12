import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: 'none'
    }
});

class MyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            surname: "",
            from: ""
        }
    }
    handleNameChange = (name) => {
        this.setState({name: name});
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    }

    handleSubmit = event => {
        let {name, surname, from} = this.state;
        alert(`Welcome ${name} ${surname}! I think you are from ${from}`);
        event.preventDefault();
    }

    render() {
        const {classes} = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container>
                    <Grid item sm={12} xs={12}>
                        <TextField
                            id="name"
                            margin="normal"
                            value={this.state.name}
                            onChange={(event) => {
                            this.handleNameChange(event.target.value)
                        }}
                            placeholder="Name"/>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <TextField
                            id="surname"
                            margin="normal"
                            value={this.state.surname}
                            onChange={this.handleChange("surname")}
                            placeholder="Surname"/>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <TextField
                            id="from"
                            margin="normal"
                            value={this.state.from}
                            onChange={this.handleChange("from")}
                            placeholder="From"/>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <Button
                            raised
                            color="primary"
                            className={classes.button}
                            type="submit"
                            onClick={this.handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default withStyles(styles)(MyForm);