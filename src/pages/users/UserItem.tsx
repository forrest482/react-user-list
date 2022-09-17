import { Card, CardContent, Grid, Avatar, Chip, Stack } from "@mui/material";
import { IUser } from "../../models/IUser";

type Props = {
  user: IUser;
  layout: string;
};

const UserItem = ({ user, layout }: Props) => {
  return (
    <Grid key={user.id} item xs={2} sm={4} md={4} style={{ display: "grid" }}>
      <Card raised>
        <CardContent>
          <Stack
            direction={layout === "horizontal" ? "row-reverse" : "column"}
            spacing={1}
          >
            <Avatar
              src={user.avatar}
              sx={{ width: 200, height: 200, alignSelf: "center" }}
            />
            <Stack spacing={1} alignSelf="center" width="100%">
              <Chip
                label={`${user.first_name} ${user.last_name}`}
                color="primary"
                variant="outlined"
              />
              <Chip label={user.email} color="success" variant="outlined" />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserItem;
