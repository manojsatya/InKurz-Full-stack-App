import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Home } from "styled-icons/boxicons-solid/Home";
import { Bookmark } from "styled-icons/boxicons-solid/Bookmark";
import { Grid } from "styled-icons/boxicons-solid/Grid";
import { Settings } from "styled-icons/material/Settings";
import { Search } from "styled-icons/octicons/Search";
import Badge from "@material-ui/core/Badge";

Navigation.propTypes = {
  bookmarkCount: PropTypes.number
};

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));
export default function Navigation({ bookmarkCount }) {
  const classes = useStyles();
  return (
    <NavigationStyled>
      <LinkStyled exact to="/mainpage">
        <HomeIconStyled />
      </LinkStyled>
      <LinkStyled to="/bookmarks">
        <Badge
          className={classes.margin}
          badgeContent={bookmarkCount}
          color="error"
        >
          <BookmarkIconStyled />
        </Badge>
      </LinkStyled>
      <LinkStyled exact to="/categories">
        <GridIconStyled />
      </LinkStyled>
      <LinkStyled exact to="/search">
        <SearchIconStyled />
      </LinkStyled>
      <LinkStyled exact to="/settings">
        <SettingsIconStyled />
      </LinkStyled>
    </NavigationStyled>
  );
}

const LinkStyled = styled(NavLink)`
  color: inherit;
  display: flex;
  justify-content: center;

  &.active {
    color: ${props => (props.theme.mode === "dark" ? "#ffb930" : "#721313")};
  }
`;

const NavigationStyled = styled.nav`
  position: fixed;
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  background-color: ${props =>
    props.theme.mode === "dark" ? "black" : "#ffefda"};
  bottom: -1px;
`;

const HomeIconStyled = styled(Home)`
  width: 35px;
`;
const BookmarkIconStyled = styled(Bookmark)`
  width: 35px;
`;

const GridIconStyled = styled(Grid)`
  width: 35px;
`;

const SearchIconStyled = styled(Search)`
  width: 35px;
`;
const SettingsIconStyled = styled(Settings)`
  width: 35px;
`;
