import {
  FormControl,
  FormControlLabel,
  Grid,
  Pagination,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useEffect, useState } from "react";
import { IUser } from "../../models/IUser";
import { getUsers } from "../../services/userService";
import UserItem from "./UserItem";

const UsersList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [cardLayout, setCardLayout] = useState<string>("vertical");

  useEffect(() => {
    setIsLoading(true);
    getUsers(currentPage).then((c) => {
      if (c) {
        setUsers(c.data);
        setTotalCount(c.total);
        setTotalPages(c.total_pages);
        setIsLoading(false);
      }
    });
  }, [currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleChangeCardLayout = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardLayout((event.target as HTMLInputElement).value);
  };

  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      {isLoading && <h1>Loading....</h1>}

      <h3>Total Users Count: {totalCount}</h3>

      <FormControl>
        <RadioGroup row value={cardLayout} onChange={handleChangeCardLayout}>
          <FormControlLabel
            value="vertical"
            control={<Radio />}
            label="Vertical"
          />
          <FormControlLabel
            value="horizontal"
            control={<Radio />}
            label="Horizontal"
          />
        </RadioGroup>
      </FormControl>

      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {users.map((user) => (
          <UserItem user={user} layout={cardLayout} key={user.id} />
        ))}
      </Grid>

      <Grid style={{ display: "grid", placeItems: "center", marginTop: 20 }}>
        <Pagination
          count={totalPages}
          variant="outlined"
          color="primary"
          onChange={handlePageChange}
        />
      </Grid>
    </div>
  );
};

export default UsersList;
