import { Input } from 'antd'
import React from 'react'
import './SearchInputStyle.css'
export interface ISearchInput {
  palceholder: string
}
export const SearchInput = (props: ISearchInput) => {
  const { Search } = Input
  const onSearch = (value: string) => console.log(value)
  return (
    <Search placeholder={props.palceholder} onSearch={onSearch} enterButton />
  )
}
SearchInput.default = {
  placeholder: 'Please Enter Text'
}
