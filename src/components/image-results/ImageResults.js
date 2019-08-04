import React from 'react';
import PropTypes from 'prop-types';
import { GridList, GridListTile, GridListTileBar, IconButton, Dialog, Button } from '@material-ui/core';
import MuiDialogActions from '@material-ui/core/DialogActions';
import ZoomIn from '@material-ui/icons/ZoomIn';

class ImageResults extends React.Component {
    state = {
        open: false,
        currentImage: ''
    }
    handleOpen = (img) => {
        this.setState({
            open: true,
            currentImage: img
        });
    }
    handleClose = () => {
        this.setState({
            open: false,
        });
    }
    render() {
        let imageListContent;
        const { images } = this.props;

        if(images) {
            imageListContent = (
                <GridList cols={3}>
                    {images.map(img => (
                        <GridListTile>
                            <img src={img.largeImageURL} alt={img.tags}/>
                                <GridListTileBar
                                    title={img.tags}
                                    key={img.id}
                                    subtitle={
                                        <span>
                                            by <strong>{img.user}</strong>
                                        </span>
                                    }
                                    actionIcon={
                                        <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                            <ZoomIn htmlColor="white"/>
                                        </IconButton>
                                    }
                                />
                        </GridListTile>
                    ))};
                </GridList>
            )
        } else {
            imageListContent = null;
        }
        const actions = [
            <Button label="Close" primary={true} onClick={this.handleClose}/>
        ];
        return (
            <div>
                {imageListContent}
                <Dialog
                    actions={actions}
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <img src={this.state.currentImage} alt="" style={{width: '100%'}}/>
                    <MuiDialogActions>
                        <Button
                            variant="outlined"
                            onClick={this.handleClose}
                            color="secondary"
                        >
                            Close
                        </Button>
                    </MuiDialogActions>
                </Dialog>
            </div>
        );
    }
};

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
};

export default ImageResults;