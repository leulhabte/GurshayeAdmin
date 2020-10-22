import { makeStyles } from '@material-ui/core';
import Constants from '../../Constant'

const useStyles = makeStyles((theme) => ({
    heading:{
        fontSize: '20px',
        marginTop: '3px'
    },
    pageButton:{
        backgroundColor: 'rgb(128, 188, 49)',
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
}));

export default useStyles;