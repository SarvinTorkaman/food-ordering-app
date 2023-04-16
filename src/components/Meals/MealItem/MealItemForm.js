import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';

const MealForm = (props) => {

    return(
        <React.Fragment>

            <form className={classes.form} onSubmit={props.handleSubmit}>

                <Input />
                <button type="submit">+ Add</button>
    


                
            </form>
        </React.Fragment>
    )


}
export default MealForm;