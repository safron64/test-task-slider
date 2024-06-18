import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
  border: 1px solid #000;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  width: 30px;
  height: 30px;
  
	${props => (props.left ? 'left: 10px;' : 'right: 10px;')}
	z-index: 1;
`

const SliderControls = ({ onPrev, onNext, showPrev, showNext }) => (
	<>
		{showPrev && (
			<Button left onClick={onPrev}>
				{'<'}
			</Button>
		)}
		{showNext && <Button onClick={onNext}>{'>'}</Button>}
	</>
)

export default SliderControls
