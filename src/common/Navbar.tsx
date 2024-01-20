import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <div className="logo">STOCKPHOTOS.AI</div>
        <div className="links">
          <div>Pricing</div>
          <div>Gallery</div>
        </div>
      </div>
      <div className="search">
        <SearchIcon />
        <input type="text" name="" id="" placeholder="Search on gallery..." />
        <button className="search-button">Search</button>
      </div>
      <div className="login">
        <button className="btn btn-secondary">Login</button>
        <button className="btn btn-primary">Try now</button>
      </div>
    </div>
  );
}

export default Navbar;
