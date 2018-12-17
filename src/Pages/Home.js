import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Loading from "../components/Loading";
import LazyLoad from "react-lazyload";
import placeholder from "../images/placeholder.png";
import { sortedUniq, sortBy } from "lodash";
import Select from "react-select";
import NoSsr from "@material-ui/core/NoSsr";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import CancelIcon from "@material-ui/icons/Cancel";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import classNames from "classnames";

const styles = theme => ({
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  rowWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  avatarWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%"
  },
  bigAvatar: {
    width: 100,
    height: 100
  },
  listWrap: {
    width: "auto"
  },
  listItem: {
    display: "inline-flex",
    width: "23.5%"
  },
  button: {
    margin: theme.spacing.unit,
    marginBottom: "80px"
  },
  bottomBtn: {
    display: "flex",
    margin: "20px auto 80px",
    textTransform: "capitalize"
  },
  headline: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 1.5
  },
  input: {
    display: "flex",
    padding: 0
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  chip: {
    fontSize: 12,
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light" ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 12
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 12
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  }
});

const li_2 = {
  width: "50%",
  height: "auto",
  overflow: "hidden",
  listStyle: "none",
  padding: "10px 15px"
};
const hiddenBlock = { display: "block", overflow: "hidden", height: "auto" };

const pTitle = {
  fontSize: "15px",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: "bold",
  lineHeight: "15px",
  padding: "0",
  margin: "2px"
};
const pSubTitle = {
  fontSize: "12px",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  lineHeight: "12px",
  padding: "0",
  margin: "4px 2px 2px"
};

const ul_li = { display: "flex", flexWrap: "wrap", padding: "2px 2px", margin: "-2px -2px" };

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}>
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const selectComponents = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

class Home extends React.Component {
  state = {
    single: null,
    multi: null
  };

  componentDidMount() {
    const { getResto } = this.props;
    // action to get resto list
    getResto();
  }

  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes, theme, listResto } = this.props;
    const selectStyles = {
      input: base => ({
        ...base,
        padding: '5px',
        color: theme.palette.text.primary,
        "& input": {
          font: "inherit"
        }
      })
    };
    // list
    let allOpenTimes = [];
    let filterOpenTimes = [];
    if (listResto.length > 0) {
      let openTimes = listResto.map(resto => resto.open_time);
      openTimes.map(item => {
        if (item.includes(" / ")) {
          let arrSplit = item.split(" / ");
          arrSplit.map(isplit => {
            allOpenTimes.push({ label: isplit.trim(), value: isplit.trim() });
            return false;
          });
        } else {
          allOpenTimes.push({ label: item.trim(), value: item.trim() });
        }
        return false;
      });
      filterOpenTimes = sortBy(sortedUniq(allOpenTimes), [function(o) { return o.label; }]);
    }

    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Typography variant="title" className={classes.headline}>
            Restaurants
          </Typography>
          <div style={{padding: "10px"}}>
          <NoSsr>
            <Select
              classes={classes}
              styles={selectStyles}
              textFieldProps={{
                label: "Filter By Open Time",
                InputLabelProps: {
                  shrink: true
                }
              }}
              options={filterOpenTimes}
              components={selectComponents}
              value={this.state.multi}
              onChange={this.handleChange("multi")}
              placeholder="Select open times"
              isMulti
            />
          </NoSsr>
          </div>
          <div className={classes.row}>
            <ul style={ul_li}>
              {listResto.map(tile => {
                return (
                  <li key={tile.id} style={li_2}>
                    <LazyLoad scroll offset={160} height={160} placeholder={<Loading />}>
                      <div style={hiddenBlock}>
                        <p style={pTitle}>{tile.name}</p>
                        <p style={pSubTitle}>
                          <b>Open Time:</b>
                          <br />
                          {tile.open_time}
                        </p>
                        <img src={placeholder} alt={tile.name} />
                      </div>
                    </LazyLoad>
                  </li>
                );
              })}
            </ul>
          </div>
          <Button variant="outlined" color="default" className={classes.bottomBtn}>
            More..
          </Button>
        </main>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  "listResto,listOpenTimes",
  actions
)(withRouter(withRoot(withStyles(styles, { withTheme: true })(Home))));
