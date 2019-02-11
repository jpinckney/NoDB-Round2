/**************/
 ****DAY 1 ****
/*************/

npm i styled-components
import Styled from 'styled-components'


***********Styled-Component-Syntax****************

1. The newest thing about this project is styled components. Styled components allow me to style the elements of my page right inside my react app. Now not sure if there is a current difference between css-js, styled-components, and inline-styling. 

const NameOfStyledComponent=styled.div/nav/ul/ect .... `put css here`

Once you declare the css, you treat the const variable as a component and everything it wraps around inherits the style

<NameOfStyledComponent>______<NameOfStyledComponent/> --- you can still do everything in here as normal such as event listeners
<NameOfStyledComponent />

************Ternaries are Powerful****************

2. Ternaries can be used to conditionally render things such as buttons/text pretty much anything i can think of as long as its conditional. Dont forget that i am conditionally rendering a button even though it looks like a component. It looks this way because i have css const button = styled.button``

***************CSS******************

3. height: fit-content -- the fit content is absolutely wonderful. I need more training on this one. 