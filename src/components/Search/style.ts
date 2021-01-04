import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
` 
export const SearchInput = styled.input`
  outline-style: none;
  border: 1px solid #ccc; 
  border-radius: 3px;
  padding: 10px;
  width: 320px;
  font-size: 14px;
  :focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
  }
`

export const SearchImage = styled.img`
  width: 35px;
  height: 35px;
  vertical-align: middle;
  margin-right: 10px;
`