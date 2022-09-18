import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

type Props = {
  cardLayout: string;
  onLayoutChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
};

const CardLayoutSelect = ({ cardLayout, onLayoutChange }: Props) => {
  return (
    <FormControl>
      <RadioGroup row value={cardLayout} onChange={onLayoutChange}>
        <FormControlLabel
          value="vertical"
          control={<Radio />}
          label="Vertical"
        />
        <FormControlLabel
          value="horizontal"
          control={<Radio />}
          label="Horizontal"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default CardLayoutSelect;
