import React from 'react'
import { withStyles } from '@mui/styles'
import {Dialog} from '@mui/material/'
import {AppBar} from '@mui/material/'
import {Toolbar} from '@mui/material/'
import {IconButton} from '@mui/material/'
import {Typography} from '@mui/material/'
import CloseIcon from '@mui/icons-material/Close';
import {Slide} from '@mui/material/'

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  imgContainer: {
    position: 'relative',
    flex: 1,
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}

function Transition(props) {
  return <Slide direction="up" {...props} />
}

class ImgDialog extends React.Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props
    return (
      <Dialog
        fullScreen
        open={!!this.props.img}
        onClose={this.props.onClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.onClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Cropped image
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.imgContainer}>
          <img src={this.props.img} alt="Cropped" className={classes.img} />
        </div>
      </Dialog>
    )
  }
}

export default withStyles(styles)(ImgDialog)
