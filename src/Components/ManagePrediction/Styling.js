import { makeStyles } from '@material-ui/core';
import Constants from '../../Constant'

const useStyles = makeStyles((theme) => ({
    heading:{
        fontSize: '20px',
        marginTop: '3px'
    },
    pageButton:{
        backgroundColor: Constants.light_blue_2,
        color: 'white',
        height: '2rem',
        '&:hover':{
            backgroundColor: 'rgb(113, 174,33)'
        },
        alignSelf: "center",
        marginLeft: theme.spacing(2)
    },
    tableContainer:{
        height: '28rem'
    },
    remove:{
        color: 'red'
    },
    edit:{
        color: Constants.light_blue
    }
}));

export default useStyles;