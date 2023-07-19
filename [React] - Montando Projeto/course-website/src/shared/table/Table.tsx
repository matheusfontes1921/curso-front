import TableAntD, { ColumnsType, TableProps } from "antd/es/table";
function Table<RecordType extends object = any>(props: TableProps<RecordType>) {
  return <TableAntD {...props} />;
}

export default Table;
