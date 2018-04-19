import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  btn: {
    borderRadius: 5,
    fontSize: '1em',
    margin: 5,
    cursor: 'pointer',
    display: 'inline-block',
    height: 32,
    width: 'auto',
    boxShadow: '0 3px 20px rgba(0,0,0,.25), inset 0 2px 0 rgba(255,255,255,.6), 0 2px 0 rgba(0,0,0,.1), inset 0 0 20px rgba(0,0,0,.1)',
    ':hover': {
      cursor: 'pointer',
      textShadow: 'none',
      transform: 'scale(1.05)',
    }
  }
});