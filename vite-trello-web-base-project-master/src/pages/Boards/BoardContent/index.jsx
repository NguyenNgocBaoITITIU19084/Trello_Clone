import { useState } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import AddCardIcon from '@mui/icons-material/AddCard'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import DeleteIcon from '@mui/icons-material/Delete'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import PeopleIcon from '@mui/icons-material/People'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', height: (theme) => `calc(${theme.trello.boardContentHeight})`, backgroundColor: 'primary.main', padding: 2 }}>
      {/* Column Box */}
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          backgroundColor: '#ecf0f1',
          borderRadius: '10px',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)}})`
        }}>

        <Box sx={{ height: (theme) => theme.trello.headerColumnHeight, padding: 1, display: 'flex', justifyContent: 'space-between' }}>
          <Typography fontWeight='bold'>Header Column</Typography>
          <Box>
            <Tooltip title='Column options'>
              <ExpandMoreIcon
                id='basic-button-workspace'
                aria-controls={open ? 'basic-menu-workspace' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'black', fontWeight: 'bold' }}
              />
            </Tooltip>
            <Menu
              id='basic-menu-workspace'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button-workspace'
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize='small' />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant='body2' color='text.secondary'>
                  ⌘X
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize='small' />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant='body2' color='text.secondary'>
                  ⌘C
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize='small' />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant='body2' color='text.secondary'>
                  ⌘V
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <DeleteIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText>Remove Column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <AddCardIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* List Card Column */}
        <Box sx={{ padding: 1, display: 'flex', flexDirection: 'column', gap: 1, overflowX: 'hidden', overflowY: 'auto', maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${theme.trello.headerColumnHeight} - ${theme.trello.footerColumnHeight})` }}>
          <Card sx={{ cursor: 'pointer', overflow: 'unset' }}>
            <CardMedia
              sx={{ height: 140 }}
              image='https://tse3.mm.bing.net/th/id/OIP.N_2JnDr_maXujCu82psftQHaEK?pid=Api&P=0&h=220'
              title='green iguana'
            />
            <CardContent sx={{ padding: '8px' }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                Lizard
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: '0px' }}>
              <Tooltip title='members'>
                <Button size='small' startIcon={<PeopleIcon/>}>20</Button>
              </Tooltip>
              <Tooltip title='comments'>
                <Button size='small' startIcon={<CommentIcon/>}>15</Button>
              </Tooltip>
              <Tooltip title='attachs'>
                <Button size='small' startIcon={<AttachmentIcon/>}>10</Button>
              </Tooltip>
            </CardActions>
          </Card>

          <Card sx={{ overflow: 'unset' }}>
            <CardContent sx={{ cursor: 'pointer', padding: '8px 6px', '&:last-child': { paddingBottom: '8px' } }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                card 01
              </Typography>
            </CardContent>
          </Card>
          
          <Card sx={{ overflow: 'unset' }}>
            <CardContent sx={{ cursor: 'pointer', padding: '8px 6px', '&:last-child': { paddingBottom: '8px' } }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                card 01
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ overflow: 'unset' }}>
            <CardContent sx={{ cursor: 'pointer', padding: '8px 6px', '&:last-child': { paddingBottom: '8px' } }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                card 01
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ overflow: 'unset' }}>
            <CardContent sx={{ cursor: 'pointer', padding: '8px 6px', '&:last-child': { paddingBottom: '8px' } }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                card 01
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ overflow: 'unset' }}>
            <CardContent sx={{ cursor: 'pointer', padding: '8px 6px', '&:last-child': { paddingBottom: '8px' } }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                card 01
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ overflow: 'unset' }}>
            <CardContent sx={{ cursor: 'pointer', padding: '8px 6px', '&:last-child': { paddingBottom: '8px' } }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                card 01
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ overflow: 'unset' }}>
            <CardContent sx={{ cursor: 'pointer', padding: '8px 6px', '&:last-child': { paddingBottom: '8px' } }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                card 01
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ overflow: 'unset' }}>
            <CardContent sx={{ cursor: 'pointer', padding: '8px 6px', '&:last-child': { paddingBottom: '8px' } }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                card 01
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ overflow: 'unset' }}>
            <CardContent sx={{ cursor: 'pointer', padding: '8px 6px', '&:last-child': { paddingBottom: '8px' } }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                card 01
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ overflow: 'unset' }}>
            <CardContent sx={{ cursor: 'pointer', padding: '8px 6px', '&:last-child': { paddingBottom: '8px' } }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                card 01
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ overflow: 'unset' }}>
            <CardContent sx={{ cursor: 'pointer', padding: '8px 6px', '&:last-child': { paddingBottom: '8px' } }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                card 01
              </Typography>
            </CardContent>
          </Card>


          <Card sx={{ overflow: 'unset' }}>
            <CardContent sx={{ cursor: 'pointer', padding: '8px 6px', '&:last-child': { paddingBottom: '8px' } }}>
              <Typography variant='h5' component='div' fontSize='18px' fontWeight='bold'>
                card 01
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Footer Column */}
        <Box
          sx={{
            height: (theme) => theme.trello.footerColumnHeight,
            padding: 1, color: '#1e90ff',
            display: 'flex',
            alignItems: 'item',
            justifyContent: 'space-between'
          }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
            <AddCardIcon />
            <Typography fontWeight='bold'>Add new Card</Typography>
          </Box>
          <Tooltip title='Drag Column'>
            <DragHandleIcon sx={{ cursor: 'pointer' }}/>
          </Tooltip>
        </Box>

      </Box>
    </Box>
  )
}

export default BoardContent
