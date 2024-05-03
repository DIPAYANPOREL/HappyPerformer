import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  color: white;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center items vertically */
  margin-bottom: 1rem;
  background-color: #0a1128; /* Set background color to cover the entire navbar */
`;

const NameSection = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 8px;
`;

const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; /* Set width to cover the entire navbar */
`;

const InputBar = styled.input`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin-right: 10px;
  border: none;
`;

const NotificationBar = styled.div`
  color: #758bfd;
  padding: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Search = styled.div`
  padding: 5px;
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  background-color: white;
  border-radius: 20px;
  margin-right: 10px;
  margin-left: 80%;
`;

const Nav = () => {
  return (
    <Container>
      <MenuItems>
        <Search>
          <InputBar placeholder="Search.." />
          <SearchOutlinedIcon
            style={{ color: "black", fontSize: 20, cursor: "pointer" }}
          />
        </Search>

        <NotificationBar>
          <NotificationsNoneOutlinedIcon />
        </NotificationBar>
      </MenuItems>
    </Container>
  );
};

export default Nav;
