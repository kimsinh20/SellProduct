import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import * as React from 'react';


function CartVocherDialog(props) {
    const { onClose, selectedValue, open ,vocher} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open} >
            <DialogTitle>select vocher free ship my order</DialogTitle>
            <List sx={{ pt: 0 }}>
                {vocher.map((e) => (
                    <ListItem disableGutters>
                        <ListItemButton onClick={() => handleListItemClick(e)} key={e}>
                            <ListItemText primary={e} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

CartVocherDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};
export default CartVocherDialog;