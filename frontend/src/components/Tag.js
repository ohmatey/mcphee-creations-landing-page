import React from 'react'

const Tag = ({
  text,
  variant
}) => (
  <div className={'tag ' + variant}>{text}</div>
)

export default Tag
