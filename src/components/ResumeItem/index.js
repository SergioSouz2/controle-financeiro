import * as C from './styles'


export function ResumeItem({ title, Icon, value }) {
   return (
      <C.Container >
         <C.Header>
            <C.HeaderTitle>{title}</C.HeaderTitle>
            <Icon color='#9C147A ' />
         </C.Header>
         <C.Total>{value}</C.Total>

      </C.Container>
   );
}