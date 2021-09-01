import React, { useContext } from "react";
import { SlideyboyContext } from "../../hooks/context";
import { DataGrid, GridToolbarDensitySelector, GridToolbarFilterButton } from "@material-ui/data-grid";
import TextField from "@material-ui/core/TextField";
import { useDemoData } from "@mui/x-data-grid-generator";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(0.5, 0.5, 0),
      justifyContent: "space-between",
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap",
    },
  }),
  { defaultTheme }
);

function QuickSearchToolbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </div>
      <StyledTextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          endAdornment: <SearchIcon fontSize="small" />,
        }}
      />
    </div>
  );
}

const MainView = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });

  const [searchText, setSearchText] = React.useState("");
  const [rows, setRows] = React.useState(data.rows);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = data.rows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  React.useEffect(() => {
    setRows(data.rows);
  }, [data.rows]);

  const { slideyboy, setSlideyboy } = useContext(SlideyboyContext);

  const toggleSlideyboy = () => {
    setSlideyboy(true);
  };

  return (
    <View>
      <div className="breadcrumb">Room Credits</div>
      <h1>Room Credits</h1>
      <StyledDataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        rows={rows}
        onRowClick={() => toggleSlideyboy()}
        columns={data.columns}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(""),
          },
        }}
      />
    </View>
  );
};

const View = styled.div`
  padding: 6rem;
  background: #f2f6f6;
  height: 100vh;
  .breadcrumb {
    text-transform: uppercase;
  }
`;

const StyledTextField = styled(TextField)``;

const StyledDataGrid = styled(DataGrid)`
  border: 0 !important;
  span.MuiButton-label {
    color: #000;
  }
`;

export default MainView;
