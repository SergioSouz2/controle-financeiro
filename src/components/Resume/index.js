import * as C from './styles'
import {
   FaRegArrowAltCircleUp,
   FaRegArrowAltCircleDown,
   FaDollarSign

} from 'react-icons/fa'

import { ResumeItem } from '../ResumeItem';

export function Resume({ income, expense, total }) {
   return (
      <C.Container >
         <ResumeItem
            title="Entradas"
            Icon={FaRegArrowAltCircleUp}
            value={income}
         />
         <ResumeItem
            title="Saídas"
            Icon={FaRegArrowAltCircleDown}
            value={expense}
         />
         <ResumeItem
            title="Total"
            Icon={FaDollarSign}
            value={total}
         />
      </C.Container>
   );
}