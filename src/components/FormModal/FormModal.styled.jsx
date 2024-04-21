import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
    padding: 24px;
    width: 448px;
    height: 100%;
`

export const FormEl = styled.form`
    display: flex;
    flex-direction: column;
    gap: 14px;
    > *:last-child {
    margin-top: 10px; 
  }
`

export const Field = styled.div`
 
`

export const LabelEl = styled.label`
    
`

export const InputEl = styled.input`
    background: #f7f7f7;
    border-radius: 10px;
    padding: 18px 18px 18px 18px;
    width: 400px;
    height: 56px;
    outline: none; 
    border: none;
    ::placeholder {
            position: relative;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.25;
            color: rgba(16, 24, 40, 0.6);
        }
`

export const TextareaEl = styled.textarea`
    border-radius: 10px;
    padding: 18px 18px 18px 18px;
    width: 400px;
    height: 114px;
    background: #f7f7f7;
    border: none;
    outline: none; 
`

export const Title = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    color: #101828;
    margin-bottom: 8px;
`

export const SubTitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #475467;
    margin-bottom: 24px;  
`