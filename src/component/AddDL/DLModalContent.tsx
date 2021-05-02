import React, { useState, FC } from "react";
import { Table, TablePaginationConfig } from "antd";
import "./DLModalContent.css";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    type: 32,
    size: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    type: 42,
    size: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 400,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
  },
];

const pagiconfig: TablePaginationConfig = {
  //@ts-ignore
  position: ["none"],
};

const DLModalContent: FC = (props) => {
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        //ts-ignore
        pagination={pagiconfig}
      />
    </>
  );
};

export default DLModalContent;
