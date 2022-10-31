import styled from 'styled-components'
import noProfilePhoto from '../../../../assets/img/noProfilePhoto.svg'

export const ImagePlaceholder = styled.div`
  min-width: 66px;
  max-height: 66px;
  border-radius: 8px;
  background-color: gray;
  background-image: url(${noProfilePhoto});
`
export const CastImage = styled.img`
  border-radius: 8px;
`
