import './BasicTable.css'

function BasicTable({data, label}) {
  return (
    <div className="table">
      <h2>{label}</h2>
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