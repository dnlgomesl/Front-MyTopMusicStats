import { Tooltip } from 'react-tooltip'
import './BasicTable.css'

function BasicTable({data, label, textTooltip, element}) {
  return (
    <div className="table">
      <h2><a className={element}>{label}</a></h2>
      <Tooltip anchorSelect={"." + element} place="top">
        {textTooltip}
      </Tooltip>
      <div className='boxes'>
        <div className="box">
          <div className="label">Média: </div>
          <div className="value">{data.mean}</div>
        </div>
        <div className="box">
          <div className="label">Moda: </div>
          <div className="value">{data.mode}</div>
        </div>
        <div className="box">
          <div className="label">Mediana: </div>
          <div className="value">{data.median}</div>
        </div>
      </div>
    </div>
);
}

export default BasicTable;