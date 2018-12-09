import { fucss } from 'next-fucss/utils';

const classNameData = ({ isGreen, isYellow, color, bold = false, mobile }) => fucss({
  'bd-w:1px bd-c:greya5 ta:l p:12px-10px va:m': true,
  'c:green': color === 'green',
  'c:yellow': isYellow,
  'fw:600': bold,
  'mdx-dp:n': !mobile
})

export default ({ data, fields }) => {
  
  return (
    <div>
      <table className="w:100pc c:whitea8" style={{ borderCollapse: 'collapse' }}>
        <thead className="tt:uc fs:70pc mdx-dp:n">
          <tr>
            { fields.map( field => (
              <td key={field} className="p:5px c:whitea5">{field}</td>
            )) }
          </tr>
        </thead>
        <tbody className="fs:80pc">
          { data.map( (item, i) => (
            <tr key={i + '_tbody'}>
              { Object.keys(item).map( key => {
                const value = item[key];
                return ( 
                  <td key={key + '_tbody'} className={ 
                    classNameData( !value ? {} : value)
                  }>
                    {value && getValue(value)}{value && value.title && <span className="fs:130pc m:0 p:0 c:white">{value.title}</span>}
                    {value && value.subValue && <small><br/>{value.subValue}</small>}
                    {value && value.component && <value.component {...value.props} test={value.props} /> }
                  </td>
                )
              })}
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}

function getValue(value){
  return value && typeof value === 'object' ? value.value : value;
}