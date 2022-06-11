import React from 'react'
import { FieldsetContainer } from '../../Containers/FieldsetContainer'
import { theme } from '../../../styles/theme'
const Join = ({})=>{

    return(
        <FieldsetContainer legend={"Join"}>
            <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL-footer"
            placeholder="email address"
            required
            />
            <input
            type="hidden"
            name="b_34d56cd42f708cf3153691d42_82b7e379ae"
            tabIndex="-1"
            value=""
            />
            <input
            type="submit"
            value="Subscribe"
            id="mc-embedded-subscribe"
            css={theme.button.cta}
           />
        </FieldsetContainer>
    )
}

export default Join

//   <div className="fields">
//       <div className="field">
//         <label htmlFor="mce-EMAIL-footer">Subscribe to the newsletter</label>
//         <input
//           type="email"
//           name="EMAIL"
//           id="mce-EMAIL-footer"
//           placeholder="email address"
//           required
//         />
//         <input
//           type="hidden"
//           name="b_34d56cd42f708cf3153691d42_82b7e379ae"
//           tabIndex="-1"
//           value=""
//         />
//       </div>
//     </div>
//     <ul className="contact">
//       <li />
//       <input
//         type="submit"
//         value="Subscribe"
//         id="mc-embedded-subscribe"
//       />
//     </ul>