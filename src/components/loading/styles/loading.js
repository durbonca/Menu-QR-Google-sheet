import styled from 'styled-components'


export const Plate = styled.div`
    position: relative;
    margin: 0 auto;
    height: 250px;
    width: 250px;
    border-bottom: solid 5px #B4B4B4;
    border-radius: 0 0 10px 10px / 5px;

    &:after{
        position: relative;
        bottom: -10px;
        content: " ";
        margin: 0 25px;
        width: 200px;
        height: 5px;
        background-color: #DDD;
        border-radius: 0 0 5px 5px;
    }
`
export const Bottle = styled.div`
    position: absolute;
    width: 50px;
    bottom: 0;
    left: 100px;
    z-index: 10;
`
export const Cork = styled.div`
    position: relative;
    margin: 0 auto;
    background-color: #8E1B1C;
    width: 20px;
    height: 40px;
    border-radius: 2px 2px 0 0;
    border-bottom: solid 3px #FBC85F;

    &:before{
        position: absolute;
        top: 5px;
        left: -2px;
        display: block;
        content: " ";
        background-color: #8E1B10;
        border-top: solid 1px #9A2A1F;
        border-bottom: solid 1px #9A2A1F;
        width: 24px;
        height: 10px;
        border-radius: 2px;
    }
`
export const Neck = styled.div`
    margin: 0 auto;
    background-color: rgba(41, 105, 70, 0.9);
    width: 20px;
    height: 10px;
`
export const Body = styled.div`
    position: relative;
    margin: 0 auto;
    padding-top: 30px;
    background-color: rgba(41, 105, 70, 0.9);
    width: 50px;
    height: 110px;
    border-radius: 20px 20px 5px 5px; 
`
export const Label = styled.div`
    position: relative;
    background-color: #F2EAB9;
    height: 30px;
    border: solid 2px #CFC89B;
    z-index: 25;
    animation: spinning-label 3s linear infinite;

    @keyframes spinning-label {
        0% {
            margin-left: 0%;
            border-left-width: 0px;
            margin-right: 100%;
            border-right-width: 2px;
        }
        49% {
            border-left-width: 0px;
            border-right-width: 2px;
        }
        50% {            
            margin-left: 0%;
            border-left-width: 2px;
            margin-right: 0%;
            border-right-width: 0px;
        }
        98% {
            border-left-width: 2px;            
        }
        99% { 
            margin-left: 100%;
            border-left-width: 0px;
            margin-right: 0%;
            border-right-width: 0px;
        }
        100% {
            margin-left: 0%;
            border-left-width: 0px;
            margin-right: 100%;
            border-right-width: 0px;
        }
    }
`
export const LabelShadow = styled.div`
    position: absolute;
    height: 34px;
    background-color: rgba(0, 0, 0, 0.3);
    top: 30px;
    z-index: 20;
    animation: spinning-shadow 3s linear infinite;

    @keyframes spinning-shadow {
        0% {
            left: 0;
            width: 50px;
            margin-left: 0px;
        }
        50% {     
            left: 0;     
            width: 0px;
            margin-left: 0px;
        }
        51% {
        
            margin-left: 50px;
        }
        100% {
            width: 50px;
            margin-left: 0;
        }
    }
`
export const Glass = styled.div`
    position: absolute;
    width: 40px;
    bottom: 0;
    left: 100px;
    animation: spinning-glass 3s ease-in-out infinite;

    @keyframes spinning-glass {
        0% { 
            left: 25px;
            z-index: 20;
        }
        50% {
            left: 185px;
            z-index: 20;
        } 
        51% {
            z-index: 0;                
        }
        100% {            
            left: 25px;
            z-index: 0;
        }
    }
`
export const Bowl = styled.div`
    background-color: rgba(190, 190, 190, 0.5);
    padding-top: 10px;
    width: 40px;
    height: 30px;
    border-radius: 5px 5px 20px 20px / 20px;
`
export const CorkSide = styled.div`
    position: absolute;
    height: 25px;
    width: 15px;
    bottom: 0;
    background-color: #F2EAB9;
    border-top: solid 2px #8E1B1C;
    
    animation: spinning-cork 3s ease-in-out infinite;

    @keyframes spinning-cork {
        0% { 
            left: 150px;
            z-index: 0;
        }
        50% {
            left: 85px;
            z-index: 0;
        } 
        51% {
            z-index: 20;                
        }
        100% {            
            left: 150px;
            z-index: 20;
        }
    }
`

export const Wine = styled.div`
    background-color: #8E1B1C;
    margin: 0 auto;
    width: 30px;
    height: 15px;
    border-radius: 4px 4px 20px 20px / 20px;
`

export const Stem = styled.div`
    margin: 0 auto;
    background-color: rgba(190, 190, 190, 0.5);
    width: 5px;
    height: 30px;
`

export const Foot = styled.div`
    background-color: rgba(190, 190, 190, 0.5);
    width: 40px;
    height: 5px;
    border-radius: 20px 20px  0 0 / 5px;
`