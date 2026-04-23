import React, { Component } from "react";
import {
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import List from "./List";
import { FaSearch, FaTimes } from "react-icons/fa";

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All",
    };
  }

  // Update state with the search input
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  // Clear the search input
  clearSearch = () => {
    this.setState({ search: "" });
  };

  // Update the "type" filter in state
  onFilter = (type) => {
    this.setState({ type: type });
  };

  // Filter items based on search term and type
  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType =
      this.state.type === "All" || item.type === this.state.type;
    return matchesSearch && matchesType;
  };

  render() {
    return (
      <div
        className="filter-list"
        style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}
      >
        {/* Dropdown Menu */}
        <DropdownButton
          id="dropdown-basic-button"
          title={`Filter: ${this.state.type}`}
          onSelect={this.onFilter}
          style={{ marginBottom: "1rem" }}
          variant="outline-primary"
        >
          <Dropdown.Item eventKey="All">
            <span role="img" aria-label="all">
              🌟
            </span>{" "}
            All
          </Dropdown.Item>
          <Dropdown.Item eventKey="Fruit">
            <span role="img" aria-label="fruit">
              🍎
            </span>{" "}
            Fruits
          </Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable">
            <span role="img" aria-label="vegetable">
              🥦
            </span>{" "}
            Vegetables
          </Dropdown.Item>
        </DropdownButton>

        {/* Search Input */}
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <FormControl
            placeholder="Search for produce..."
            value={this.state.search}
            onChange={this.onSearch}
            style={{ borderRadius: "0.25rem" }}
          />
          {this.state.search && (
            <Button
              variant="outline-secondary"
              onClick={this.clearSearch}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 0.75rem",
              }}
            >
              <FaTimes />
            </Button>
          )}
        </InputGroup>

        {/* Render Filtered List */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
