import Select from "react-select";

import "./Select.scss";
import { SelectProps } from "./Select.props";

import { useAppDispatch } from "../../hooks/useContextHooks";

const CustomSelect = ({ options, onChange, value }: SelectProps) => {
  const dispatch = useAppDispatch();

  const onChangeSort = (event: any) => {
    dispatch(onChange(event.value));
  };

  const getValue = () => {
    return value ? options.find((i) => i.value === value) : "";
  };

  return (
    <Select
      classNamePrefix='custom-select'
      onChange={onChangeSort}
      value={getValue()}
      options={options}
    />
  );
};

export default CustomSelect;
