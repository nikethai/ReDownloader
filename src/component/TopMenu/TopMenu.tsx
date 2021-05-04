import React, { useState, FC } from "react";
import { Button, Dropdown, Input, Menu, Modal } from "antd";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITopMenuProps } from "@/interface/index";

import "./TopMenu.css";
import DLModalContent from "../AddDL/DLModalContent";

const SubMenu = Menu.SubMenu;

//#region ICON REGION
const iconFast = (
  <FontAwesomeIcon icon={faShippingFast} color="#77acf1" size="2x" />
);

//Dirty Bootstrap icon hack
const iconPause = (
  <img className="svg-size" src="../assets/pause.svg" alt="Pause" />
);

//Dirty Bootstrap icon hack
const iconPlay = (
  <img className="svg-size" src="../assets/play.svg" alt="Play" />
);

//Dirty Bootstrap icon hack
const iconTrashBT = (
  <img className="svg-size" src="../assets/trash.svg" alt="Trash" />
);

//Dirty Bootstrap icon hack
const iconAdd = <img className="svg-size" src="../assets/plus.svg" alt="Add" />;

//Dirty Bootstrap icon hack
const iconMenu = (
  <img className="svg-size" src="../assets/list-nested.svg" alt="Menu" />
);
//#endregion

const TopMenu: FC<ITopMenuProps> = ({ isShowLogo }: ITopMenuProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const userSetting = (
    <Menu>
      <Menu.Item key="1">Setting</Menu.Item>
      <SubMenu key="themesub" title="Theme">
        <Menu.Item key="5">Dảk</Menu.Item>
        <Menu.Item key="6">Lai</Menu.Item>
      </SubMenu>
      <Menu.Item key="3">About</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4">Exit</Menu.Item>
    </Menu>
  );

  const AddModal = (
    <Modal
      title={
        <div className="centralize-item ">
          <div className="element">{iconFast}</div>
          <span>Add Task</span>
        </div>
      }
      visible={isModalVisible}
      width={800}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <DLModalContent />
    </Modal>
  );
  return (
    <>
      <div className="flex items-center ">
        {isShowLogo ? (
          <div >
            <div className="element">{iconFast}</div>
          </div>
        ) : (
          <></>
        )}
        <div>
          <div className="three-button spacial-item">
            <Button
              className="centralize-item"
              type="default"
              icon={iconPause}
              size={"large"}
              style={{
                border: 0,
                borderRadius: 8,
                background: "#f8f8f8",
              }}
            />
            <Button
              className="centralize-item"
              type="default"
              icon={iconPlay}
              size="large"
              style={{
                border: 0,
                borderRadius: 8,
                background: "#f8f8f8",
              }}
            />
            <Button
              className="centralize-item"
              type="default"
              icon={iconTrashBT}
              size="large"
              style={{
                border: 0,
                borderRadius: 8,
                background: "#f8f8f8",
              }}
            />
            <Button
              className="centralize-item"
              type="default"
              icon={iconAdd}
              size="large"
              onClick={showModal}
              style={{
                border: 0,
                borderRadius: 8,
                background: "#f8f8f8",
              }}
            />
            {AddModal}
          </div>
        </div>
        <div className="w-3/4">
          <Input
            placeholder="Search"
            allowClear
            style={{
              background: "#f9f6f7",
            }}
          />
        </div>
        <div className="flex justify-center ml-3">
          <Dropdown overlay={userSetting} trigger={["click"]}>
            <Button
              className="centralize-item"
              type="default"
              icon={iconMenu}
              size="large"
              style={{
                border: 0,
                borderRadius: 8,
                background: "#f8f8f8",
              }}
            />
          </Dropdown>
        </div>
      </div>
    </>
  );
};
export default TopMenu;
