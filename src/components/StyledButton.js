import styled from '@emotion/styled'

const StyledButton = styled('button')`
  background: #747d8c;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 3px 5px;
  &:hover{
      cursor: pointer;
  }
  &:focus, &:active{
      outline: none;
      border: none;
  }
`
export default StyledButton