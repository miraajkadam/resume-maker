import MenuIcon from '@mui/icons-material/Menu'
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

const drawerWidth = 240

const Navbar = (props: any) => {
  const navigate = useNavigate()

  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const { authed, logout } = useAuth()

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      {authed ? (
        <List>
          <ListItem key={'Edit Resume'} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => {
                navigate('/edit')
              }}
            >
              <ListItemText primary={'Edit Resume'} />
            </ListItemButton>
          </ListItem>

          <ListItem key={'View Resume'} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => {
                navigate('/view')
              }}
            >
              <ListItemText primary={'View Resume'} />
            </ListItemButton>
          </ListItem>

          <ListItem key={'Sign Out'} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => {
                logout()
              }}
            >
              <ListItemText primary={'Sign Out'} />
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem key={'Sign In'} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => {
                logout()
              }}
            >
              <ListItemText primary={'Sign In'} />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex', marginBottom: '5rem' }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Resume Maker
          </Typography>
          {authed ? (
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button
                key={'Edit Resume'}
                sx={{ color: '#fff' }}
                onClick={() => {
                  navigate('/edit')
                }}
              >
                Edit Resume
              </Button>

              <Button
                key={'View Resume'}
                sx={{ color: '#fff' }}
                onClick={() => {
                  navigate('/view')
                }}
              >
                View Resume
              </Button>

              <Button
                key={'Sign Out'}
                sx={{ color: '#fff' }}
                onClick={() => {
                  logout()
                }}
              >
                Sign Out
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button
                key={'Sign Out'}
                onClick={() => {
                  navigate('/login')
                }}
                sx={{ color: '#fff' }}
              >
                Sign In
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}

export default Navbar
