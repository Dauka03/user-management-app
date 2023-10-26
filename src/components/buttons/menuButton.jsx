import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  ButtonGroup,
  Stack,
} from "@chakra-ui/react";
import { useData } from "../../utils/DataContext";
function SettingButton({ email, openDeletedModal }) {
  const { state, dispatch } = useData();

  const togglePermissions = (email, permissions) => {
    const user = state.data.find((user) => user.email === email);

    if (user) {
      const updatedPermissions = user.permissions.includes(permissions)
        ? user.permissions.filter((permission) => permission !== permissions)
        : [...user.permissions, permissions];

      dispatch({
        type: "UPDATE_PERMISSIONS",
        payload: { email, permissions: updatedPermissions },
      });
    }
  };
  const deleteUser = (email) => {
    console.log(email);
    dispatch({ type: "DELETE_USER", payload: { email } });
    openDeletedModal();
  };

  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} style={{ backgroundColor: "transparent" }}>
          ...
        </MenuButton>
        <MenuList minWidth="240px">
          <Stack ection="row" style={{ alignItems: "flex-start" }}>
            <Button value="asc" style={{ backgroundColor: "transparent" }}>
              Изменить права доступа
            </Button>
            <Button value="desc" style={{ backgroundColor: "transparent" }}>
              Отправить код повторно
            </Button>
            <Button
              onClick={() => deleteUser(email)}
              value="delete"
              style={{ backgroundColor: "transparent" }}
            >
              Удалить
            </Button>
          </Stack>
          <MenuDivider />
          <MenuOptionGroup title="Permissions" type="checkbox">
            <MenuItemOption
              onClick={() => togglePermissions(email, "Все")}
              value="Все"
            >
              Все
            </MenuItemOption>
            <MenuItemOption
              onClick={() => togglePermissions(email, "Модерация объявлений")}
              value="Модерация объявлений"
            >
              Модерация объявлений
            </MenuItemOption>
            <MenuItemOption
              onClick={() => togglePermissions(email, "Блог")}
              value="Блог"
            >
              Блог
            </MenuItemOption>
            <MenuItemOption
              onClick={() => togglePermissions(email, "Тех. поддержка")}
              value="Тех. поддержка"
            >
              Тех. поддержка
            </MenuItemOption>
            <MenuItemOption
              onClick={() => togglePermissions(email, "Обращение клиентов")}
              value="Обращение клиентов"
            >
              Обращение клиентов
            </MenuItemOption>
            <MenuItemOption
              onClick={() => togglePermissions(email, "Аналитика")}
              value="Аналитика"
            >
              Аналитика
            </MenuItemOption>
            <MenuItemOption
              onClick={() => togglePermissions(email, "Акция")}
              value="Акция"
            >
              Акция
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </>
  );
}

export default SettingButton;
