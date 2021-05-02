import React, { useState } from "react";
import {
  Layout,
  Menu,
  Table,
  Row,
  Progress,
  Modal,
  Drawer,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faDownload,
  faCheckCircle,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { useBreakpoints } from "./component/util/BreakPoint";

import TopMenu from "./component/TopMenu/TopMenu";

const { Header, Sider, Content } = Layout;

import "./App.css";
import "antd/dist/antd.css";

const iconFast = (
  <FontAwesomeIcon icon={faShippingFast} color="#77acf1" size="2x" />
);
const iconDown = (
  <FontAwesomeIcon icon={faDownload} style={{ color: "#3d84b8" }} />
);
const iconCheck = (
  <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
);
const iconTrash = (
  <FontAwesomeIcon icon={faTrashAlt} style={{ color: "red" }} />
);

//#region DATA
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 400,
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
  },
  {
    title: "Size",
    dataIndex: "size",
    width: 100,
    sorter: (a: any, b: any) => a.size - b.size,
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const data: any = [];
for (let i = 0; i < 11; i++) {
  data.push({
    key: i,
    name: `${Math.random().toString(36).substring(3)}`,
    size: `${i + 4}GB`,
    status:
      i % 2 ? (
        <Progress percent={70} status="exception" />
      ) : (
        <Progress percent={40} />
      ),
  });
}
//#endregion

function App() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [visible, setVisible] = useState(false);
  const { isLaptopMid } = useBreakpoints();

  const onSelectChange = (selectedRowKeys: any) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;


  return (
    <div>
      <Layout className="app">
        <Header>
          {isLaptopMid ? (
            <Row
              align="middle"
              wrap={false}
              justify="center"
              className="menu-sm"
            >
              <div className="element big" onClick={showDrawer}>
                {iconFast}
              </div>
            </Row>
          ) : (
           <TopMenu isShowLogo={true}/>
         )}
          <Drawer
            title="Util Button"
            placement="top"
            height={150}
            closable={true}
            onClose={onClose}
            visible={visible}
          >
            <TopMenu />
          </Drawer>
        </Header>
        <Layout>
          <Sider>
            <Menu mode="vertical" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={iconDown}>
                Download
              </Menu.Item>
              <Menu.Item key="2" icon={iconCheck}>
                Complete
              </Menu.Item>
              <Menu.Item key="3" icon={iconTrash}>
                Trash
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <span>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
            </span>
            <div>
              <Table
                className="table"
                pagination={{ position: ["bottomCenter"] }}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
