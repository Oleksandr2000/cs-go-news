export interface SelectProps {
  options: Option[];
  onChange: (event: any) => any;
  value: any;
}

export type Option = {
  label: string;
  value: any;
};
