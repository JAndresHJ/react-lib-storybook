import React, { ChangeEventHandler } from "react";
import Button from '../Button';
import Input from "../Input";
import { ComponentSize } from '../../config/sizes';
import SearchIcon from '../../icons/Search';
import { SearchWrapper } from './styled';

export interface SearchProps {
  className?: string;
  size?: ComponentSize;
  width?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string;
}

const Search: React.ForwardRefRenderFunction<HTMLDivElement, SearchProps> = (props, ref) => {
  const {
    className,
    size = 'default',
    width = '100%',
    value,
    onChange,
    placeholder
  } = props

  const textInputStyles = {
    size,
    width: '100%',
    placeholder
  }

  return (
    <SearchWrapper
      ref={ref}
      className={className}
      width={width}
    >
      <Input
        value={value}
        onChange={onChange}
        placeHolder={placeholder}
        clearable
        {...textInputStyles}
      />
      <Button type='secondary' icon={SearchIcon}/>
    </SearchWrapper>
  );
}

export default React.forwardRef<HTMLDivElement, SearchProps>(Search);