import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardDeFilmes from './components/CardDeFilmes';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#333',
    colro:'#fff',
    width: '600px',
    padding:'10px',
    '&:hover': {
      backgroundColor: '#333',
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '500px',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#fff',
    width: '100%',
    border: '1px solid white',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '500px',
        '&:focus': {
          width: '500px',
        },
      },
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    top: '50%', 
    transform: 'translateY(-50%)', 
  }));


const Home = () =>{
    return (
        <div >
            <h1 style={{marginLeft:'15px'}}>HOME</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Seu componente de pesquisa aqui */}
          <Search  style={{width: '500px'}}> 
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          </div>
<div style={{margin:'17px'}}>
          <CardDeFilmes title="BATMAN CAVALEIRO" description="ESSE FILME E O MELHOR FILME DO BATIM<ADSADASDASGGGGGDFGDFGDFGDFGGDFGFDGFDG" genre="ação" rating="4" imageUrl="TESTER"></CardDeFilmes>
    </div>
        </div>
    )
}

export default Home;