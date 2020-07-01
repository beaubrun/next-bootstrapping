
import SvgIcon from '@material-ui/core/SvgIcon';

const MoreIcon = ({ viewBox, ...rest }) => (

  <SvgIcon viewBox={viewBox || '0 0 291.319 291.319'} {...rest}>
    <g>
      <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="fontSize large">
        <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
        </path></svg>
    </g>
  </SvgIcon>
);

export default MoreIcon