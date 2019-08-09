import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.active{
        color: #ea6f5a;
    }
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
        font-size: 15px;
    }
`
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        line-height: 30px;
        text-align: center;
        &.focused{
            background: #777;
            color: #fff;
        }
    }
    .spin{
        font-size: 12px;
        margin-right: 2px;
        vertical-align: middle;
        display: inline-block;
        transition: all .4s ease-in;
        /* transform: rotate(120deg); */
        transform-origin: center center;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 240px;
    }
    &.slider-enter{
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slider-enter-active{
        
        width: 240px;
    }
    &.slider-exit{
        width: 240px;
        transition: all .2s ease-out;
    }
    &.slider-exit-active{
        
        width: 160px;
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px; 
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        background: #ec6149;
        color: #fff;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 20px;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`

export const SearchInfoTitle = styled.div`
    margin: 20px 0 15px 0;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`
export const SearchInfoItem = styled.a`
    display: block;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #666;
    border-radius: 3px;
    float: left;
    margin-right: 10px;
    margin-bottom: 15px;
`