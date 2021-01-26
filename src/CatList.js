// write your CatList component here
import React from 'react';

const CatList = ({catPics}) =>

<div>
  {catPics.map(CatPic => (<img key = {CatPic.id} src = {CatPic.url} alt = {CatPic.id} />))}

</div>

export default CatList