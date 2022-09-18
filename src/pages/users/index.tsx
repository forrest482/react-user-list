/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import CardLayoutSelect from "../../components/card-layout-select";
import { UserModel } from "../../models/UserModel";
import { userService } from "../../services/userService";
import UserItem from "./UserItem";

const UsersList = () => {
  //States
  const [users, setUsers] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [cardLayout, setCardLayout] = useState<string>("vertical");

  //Hooks and Event Handlers
  useEffect(() => {
    getUsers();
  }, [currentPage]);

  const getUsers = async () => {
    setIsLoading(true);
    const response = await userService.getUsers(currentPage);
    if (response) {
      setUsers(response.data);
      setTotalCount(response.total);
      setTotalPages(response.total_pages);
    }
    setIsLoading(false);
  };

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

  //Render
  return (
    <>
      {isLoading && <h1>Loading....</h1>}

      <h3>Total Users Count: {totalCount}</h3>

      <CardLayoutSelect
        cardLayout={cardLayout}
        onLayoutChange={handleChangeCardLayout}
      />

      <Grid
        container
        spacing={{ xs: 1 }}
        columns={{ xs: cardLayout === "vertical" ? 4 : 2 }}
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
    </>
  );
};

export default UsersList;
