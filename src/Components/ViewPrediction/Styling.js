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
            backgroundColor: Constants.light_blue
        },
        alignSelf: "center",
        marginLeft: theme.spacing(2)
    },
    tableContainer:{
        height: '28rem'
    },
    tableHead:{
        color: 'white',
        fontWeight: '700',
        backgroundColor: Constants.light_blue_2
    },
    tableHead_2:{
        color: 'white',
        fontWeight: '700',
        backgroundColor: Constants.light_blue
    },
}));

export default useStyles;