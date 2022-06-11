import React from 'react'
import { FieldsetContainer } from '../../Containers/FieldsetContainer'

const Join = ({})=>{

    return(
        <FieldsetContainer legend={"Join"}>
           <a
        href="https://www.patreon.com/mythictable"
        data-patreon-widget-type="become-patron-button"
      >
        <img
          src={patreon}
          alt="Become a Patron!"
        />
      </a>
        </FieldsetContainer>
    )
}

export default Join
