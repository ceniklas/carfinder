import Typography from "@material-ui/core/Typography";
import { CostSummary } from "./car-card.component";
import Tooltip from '@material-ui/core/Tooltip';

export const CostVisulizer = ({ data }: { data: CostSummary }) => {
  return (
    <div style={{ marginTop: '1rem'}}>
      <Typography variant="h6" align="left">
        Total: {data.total}
      </Typography>
      <div style={{ height: "2rem", background: "#F0EBD8", display: 'flex', padding: '0.15rem' }}>
        <Tooltip title={`Skatt: ${data.tax}`}>
          <div style={{ height: "2rem",width: `${(data.tax / data.total) * 100}%`, background: "#0D1321" }}></div>
        </Tooltip>
        <Tooltip title={`Försäkring: ${data.ensurance}`}>
          <div style={{ height: "2rem",width: `${(data.ensurance / data.total) * 100}%`, background: "#1D2D44" }}></div>
        </Tooltip>
        <Tooltip title={`Bränsle: ${data.fuel}`}>
          <div style={{ height: "2rem",width: `${(data.fuel / data.total) * 100}%`, background: "#3E5C76" }}></div>
        </Tooltip>
        <Tooltip title={`Värdeminskning: ${data.valueReduction}`}>
          <div style={{ height: "2rem",width: `${(data.valueReduction / data.total) * 100}%`, background: "#748CAB" }}></div>
        </Tooltip>
      </div>
    </div>
  );
};
