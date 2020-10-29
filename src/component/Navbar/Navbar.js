import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search'
import { useStylesNavbar } from '../../useStyles/useStyles';
import { useGetVideosSearch } from '../../useGet/useGet';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addQuery } from '../../features/querySlice';
function Navbar() {
  const classes = useStylesNavbar()
  const [query,setQuery] = useState('')
  const {getVideosSearch} = useGetVideosSearch()
  const history = useHistory()
  const dispatch = useDispatch()
  const handleSearch = (e)=>{
    e.preventDefault()
    if(!query) return
    getVideosSearch(query)
    dispatch(addQuery(query))
    history.push('/searchResult')
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbarBackground}>
          <Typography className={classes.title} variant="h6" noWrap>
           Videos-zz
          </Typography>
          <form action="">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder="Search videos and enter…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
              <button onClick={handleSearch} style={{display : 'none'}}></button>
            </div>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
